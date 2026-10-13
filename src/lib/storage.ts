import { SemesterData, StoredData } from "./types";

const STORAGE_KEY = "yset-cgpa-data";
const VERSION = "1.0.0";

export function saveSemesters(semesters: SemesterData[]): void {
  if (typeof window === "undefined") return;
  const data: StoredData = { semesters, version: VERSION };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save semesters:", error);
  }
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

function isValidSemester(s: unknown): s is SemesterData {
  if (!s || typeof s !== "object") return false;
  const sem = s as Partial<SemesterData>;
  return (
    typeof sem.name === "string" &&
    Number.isFinite(sem.sgpa) &&
    Number.isFinite(sem.totalCredits) &&
    Number.isFinite(sem.totalCreditPoints)
  );
}

export function exportData(): string {
  const empty: StoredData = { semesters: [], version: VERSION };
  if (typeof window === "undefined") return JSON.stringify(empty);
  return localStorage.getItem(STORAGE_KEY) || JSON.stringify(empty);
}

export function importData(jsonString: string): SemesterData[] | null {
  try {
    const data: StoredData = JSON.parse(jsonString);
    if (data && Array.isArray(data.semesters) && data.semesters.every(isValidSemester)) {
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
