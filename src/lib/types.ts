export interface Subject {
  id: string;
  name: string;
  marks: number;
  credits: number;
}

export interface SemesterData {
  id: string;
  name: string;
  subjects: Subject[];
  sgpa: number;
  totalCredits: number;
  totalCreditPoints: number;
  createdAt: string;
}

export interface CGPASemester {
  id: string;
  name: string;
  credits: number;
  creditPoints: number;
  sgpa: number;
}

export interface StoredData {
  semesters: SemesterData[];
  version: string;
}
