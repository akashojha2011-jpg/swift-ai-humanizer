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
  let inBlockquote = false;
  let html = "";

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Remove PDF page artifact lines like "Best AI Humanizer Tools in 2026 — Page 1"
    if (/^.*Page\s+\d+\s*$/i.test(line.trim())) {
      continue;
    }

    // Handle Markdown Table
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
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
        if (inBlockquote) {
          html += "-------------";
          inBlockquote = false;
        }
        html += '<div class="overflow-x-auto my-8 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs"><table class="w-full text-left text-sm border-collapse">';
        inTable = true;
        tableHeaderProcessed = false;
      }

      if (!tableHeaderProcessed) {
        html += '<thead class="bg-slate-100 dark:bg-slate-800/90 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-800"><tr>';
        cells.forEach((c) => {
          let formattedCell = formatInline(c);
          html += `<th class="px-5 py-3.5 font-heading font-bold text-sm text-slate-900 dark:text-white border-r border-slate-200 dark:border-slate-800 last:border-r-0 whitespace-nowrap">${formattedCell}</th>`;
        });
        html += "</tr></thead><tbody class='divide-y divide-slate-100 dark:divide-slate-800/80'>";
      } else {
        html += '<tr class="hover:bg-slate-50/80 dark:hover:bg-slate-900/50 transition-colors">';
        cells.forEach((c) => {
          let formattedCell = formatInline(c);
          html += `<td class="px-5 py-3.5 border-r border-slate-100 dark:border-slate-800/80 last:border-r-0 text-slate-800 dark:text-slate-200 font-sans">${formattedCell}</td>`;
        });
        html += "</tr>";
      }

      continue;
    } else if (inTable) {
      html += "</tbody></table></div>";
      inTable = false;
      tableHeaderProcessed = false;
    }

    // Format inline Markdown elements
    line = formatInline(line);

    // Blockquote (Investopedia Key Takeaway / Callout)
    if (line.startsWith("> ")) {
      if (inList) {
        html += isOrdered ? "</ol>" : "</ul>";
        inList = false;
      }
      if (!inBlockquote) {
        html += '<blockquote class="my-6 p-5 border-l-4 border-slate-900 dark:border-emerald-500 bg-slate-50 dark:bg-slate-900/80 rounded-r-xl text-slate-800 dark:text-slate-200 italic text-base sm:text-lg leading-relaxed shadow-2xs">';
        inBlockquote = true;
      }
      html += `<p class="my-2">${line.slice(2)}</p>`;
      continue;
    } else if (inBlockquote) {
      html += "</blockquote>";
      inBlockquote = false;
    }

    // Headers (Investopedia Style with Generous Vertical Margins)
    if (line.startsWith("# ")) {
      if (inList) {
        html += isOrdered ? "</ol>" : "</ul>";
        inList = false;
      }
      const rawText = line.slice(2).replace(/<[^>]*>/g, "").trim();
      const id = slugify(rawText);
      html += `<h1 id="${id}" class="scroll-mt-28 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mt-12 mb-6 tracking-tight leading-tight">${line.slice(2)}</h1>`;
    } else if (line.startsWith("## ")) {
      if (inList) {
        html += isOrdered ? "</ol>" : "</ul>";
        inList = false;
      }
      const rawText = line.slice(3).replace(/<[^>]*>/g, "").trim();
      const id = slugify(rawText);
      toc.push({ id, text: rawText, level: 2 });
      html += `<h2 id="${id}" class="scroll-mt-28 font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-14 mb-5 tracking-tight border-b border-slate-200 dark:border-slate-800 pb-3">${line.slice(3)}</h2>`;
    } else if (line.startsWith("### ")) {
      if (inList) {
        html += isOrdered ? "</ol>" : "</ul>";
        inList = false;
      }
      const rawText = line.slice(4).replace(/<[^>]*>/g, "").trim();
      const id = slugify(rawText);
      html += `<h3 id="${id}" class="scroll-mt-28 font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-10 mb-4 tracking-tight">${line.slice(4)}</h3>`;
    } else if (/^[-*•]\s+/.test(line)) {
      if (!inList || isOrdered) {
        if (inList) html += isOrdered ? "</ol>" : "</ul>";
        html += '<ul class="list-disc pl-8 sm:pl-12 ml-2 sm:ml-4 space-y-3 my-6 text-slate-800 dark:text-slate-200 font-sans text-base sm:text-lg leading-relaxed">';
        inList = true;
        isOrdered = false;
      }
      html += `<li>${line.replace(/^[-*•]\s+/, "")}</li>`;
    } else if (/^\d+\.\s+/.test(line)) {
      if (!inList || !isOrdered) {
        if (inList) html += isOrdered ? "</ol>" : "</ul>";
        html += '<ol class="list-decimal pl-8 sm:pl-12 ml-2 sm:ml-4 space-y-3 my-6 text-slate-800 dark:text-slate-200 font-sans text-base sm:text-lg leading-relaxed">';
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
        html += `<p class="my-5 text-slate-800 dark:text-slate-200 font-sans text-base sm:text-lg leading-relaxed">${line}</p>`;
      }
    }
  }

  if (inList) html += isOrdered ? "</ol>" : "</ul>";
  if (inTable) html += "</tbody></table></div>";
  if (inBlockquote) html += "</blockquote>";

  return { html, toc };
}

function formatInline(text: string): string {
  let line = text;
  line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
  line = line.replace(/\*(.*?)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>');
  line = line.replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs text-brand-600 dark:text-emerald-400">$1</code>');
  line = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-brand-600 dark:text-emerald-400 font-medium underline underline-offset-3 hover:text-brand-700 dark:hover:text-emerald-300 transition-colors">$1</a>');
  return line;
}
