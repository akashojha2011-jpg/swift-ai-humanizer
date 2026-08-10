export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function parseBlogMarkdown(md: string): { html: string; toc: TOCItem[] } {
  const lines = md.split("\n");
  const toc: TOCItem[] = [];
  let inList = false;
  let isOrdered = false;
  let inTable = false;
  let tableHeaderProcessed = false;
  let html = "";

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Handle Markdown Table
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      // If divider row like |---|---|
      if (line.includes("---")) {
        tableHeaderProcessed = true;
        continue;
      }

      const cells = line
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim());

      if (!inTable) {
        if (inList) {
          html += isOrdered ? "</ol>" : "</ul>";
          inList = false;
        }
        html += '<div className="overflow-x-auto my-6"><table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">';
        inTable = true;
        tableHeaderProcessed = false;
      }

      if (!tableHeaderProcessed) {
        html += '<thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-bold"><tr className="border-b border-slate-200 dark:border-slate-800">';
        cells.forEach((c) => {
          let formattedCell = formatInline(c);
          html += `<th className="py-3 px-3 border border-slate-200 dark:border-slate-800">${formattedCell}</th>`;
        });
        html += "</tr></thead><tbody>";
      } else {
        html += '<tr className="border-b border-slate-100 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">';
        cells.forEach((c) => {
          let formattedCell = formatInline(c);
          html += `<td className="py-2.5 px-3 border border-slate-100 dark:border-slate-800">${formattedCell}</td>`;
        });
        html += "</tr>";
      }

      continue;
    } else if (inTable) {
      html += "tbody></table></div>";
      inTable = false;
      tableHeaderProcessed = false;
    }

    // Format bold, italics, inline code, links
    line = formatInline(line);

    // Headers
    if (line.startsWith("# ")) {
      if (inList) {
        html += isOrdered ? "</ol>" : "</ul>";
        inList = false;
      }
      const rawText = line.slice(2).replace(/<[^>]*>/g, "").trim();
      const id = slugify(rawText);
      toc.push({ id, text: rawText, level: 1 });
      html += `<h1 id="${id}" class="scroll-mt-24 font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white pt-6 pb-2 tracking-tight">${line.slice(2)}</h1>`;
    } else if (line.startsWith("## ")) {
      if (inList) {
        html += isOrdered ? "</ol>" : "</ul>";
        inList = false;
      }
      const rawText = line.slice(3).replace(/<[^>]*>/g, "").trim();
      const id = slugify(rawText);
      toc.push({ id, text: rawText, level: 2 });
      html += `<h2 id="${id}" class="scroll-mt-24 font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white pt-8 pb-2 tracking-tight border-b border-slate-100 dark:border-slate-800/80">${line.slice(3)}</h2>`;
    } else if (line.startsWith("### ")) {
      if (inList) {
        html += isOrdered ? "</ol>" : "</ul>";
        inList = false;
      }
      const rawText = line.slice(4).replace(/<[^>]*>/g, "").trim();
      const id = slugify(rawText);
      toc.push({ id, text: rawText, level: 3 });
      html += `<h3 id="${id}" class="scroll-mt-24 font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white pt-5 pb-1 tracking-tight">${line.slice(4)}</h3>`;
    } else if (/^[-*•]\s+/.test(line)) {
      if (!inList || isOrdered) {
        if (inList) html += isOrdered ? "</ol>" : "</ul>";
        html += '<ul class="list-disc list-inside space-y-1.5 my-3 text-slate-700 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed">';
        inList = true;
        isOrdered = false;
      }
      html += `<li>${line.replace(/^[-*•]\s+/, "")}</li>`;
    } else if (/^\d+\.\s+/.test(line)) {
      if (!inList || !isOrdered) {
        if (inList) html += isOrdered ? "</ol>" : "</ul>";
        html += '<ol class="list-decimal list-inside space-y-1.5 my-3 text-slate-700 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed">';
        inList = true;
        isOrdered = true;
      }
      html += `<li>${line.replace(/^\d+\.\s+/, "")}</li>`;
    } else {
      if (inList) {
        html += isOrdered ? "</ol>" : "</ul>";
        inList = false;
      }
      if (line.trim().length > 0) {
        html += `<p class="my-3 text-slate-700 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed">${line}</p>`;
      }
    }
  }

  if (inList) html += isOrdered ? "</ol>" : "</ul>";
  if (inTable) html += "tbody></table></div>";

  return { html, toc };
}

function formatInline(text: string): string {
  let line = text;
  line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
  line = line.replace(/\*(.*?)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>');
  line = line.replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs text-emerald-600 dark:text-emerald-400">$1</code>');
  line = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-emerald-600 dark:text-emerald-400 font-medium underline underline-offset-2 hover:opacity-80 transition-opacity">$1</a>');
  return line;
}
