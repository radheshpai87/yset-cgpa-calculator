import { SemesterData, StoredData } from "./types";

const STORAGE_KEY = "yset-cgpa-data";
const VERSION = "1.0.0";

export function saveSemesters(semesters: SemesterData[]): void {
  if (typeof window === "undefined") return;
  const data: StoredData = { semesters, version: VERSION };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadSemesters(): SemesterData[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data: StoredData = JSON.parse(raw);
    return data.semesters || [];
  } catch {
    return [];
  }
}

export function exportData(): string {
  if (typeof window === "undefined") return "{}";
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw || "{}";
}

export function importData(jsonString: string): SemesterData[] | null {
  try {
    const data: StoredData = JSON.parse(jsonString);
    if (data.semesters && Array.isArray(data.semesters)) {
      saveSemesters(data.semesters);
      return data.semesters;
    }
    return null;
  } catch {
    return null;
  }
}

export function clearData(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
