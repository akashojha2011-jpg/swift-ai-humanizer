import { diffWords, Change } from "diff";

export interface DiffPart {
  value: string;
  added?: boolean;
  removed?: boolean;
}

export function computeWordDiff(original: string, modified: string): DiffPart[] {
  if (!original || !modified) return [];
  const diffs: Change[] = diffWords(original, modified);
  return diffs.map(d => ({
    value: d.value,
    added: d.added,
    removed: d.removed,
  }));
}
