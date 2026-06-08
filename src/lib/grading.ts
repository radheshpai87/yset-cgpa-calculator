export interface GradeInfo {
  grade: string;
  gradePoint: number;
  description: string;
  color: string;
}

export function getGradePoint(mark: number): number {
  if (mark >= 90) return 10;
  if (mark >= 80) return 9;
  if (mark >= 70) return 8;
  if (mark >= 60) return 7;
  if (mark >= 55) return 6;
  if (mark >= 50) return 5;
  return 0;
}

export function getGrade(mark: number): string {
  if (mark >= 90) return "O";
  if (mark >= 80) return "A+";
  if (mark >= 70) return "A";
  if (mark >= 60) return "B+";
  if (mark >= 55) return "B";
  if (mark >= 50) return "C";
  return "F";
}

export function getGradeInfo(mark: number): GradeInfo {
  if (mark >= 90) return { grade: "O", gradePoint: 10, description: "Outstanding", color: "text-emerald-600" };
  if (mark >= 80) return { grade: "A+", gradePoint: 9, description: "Excellent", color: "text-green-600" };
  if (mark >= 70) return { grade: "A", gradePoint: 8, description: "Very Good", color: "text-blue-600" };
  if (mark >= 60) return { grade: "B+", gradePoint: 7, description: "Good", color: "text-yellow-600" };
  if (mark >= 55) return { grade: "B", gradePoint: 6, description: "Above Average", color: "text-orange-600" };
  if (mark >= 50) return { grade: "C", gradePoint: 5, description: "Average", color: "text-amber-600" };
  return { grade: "F", gradePoint: 0, description: "Fail", color: "text-red-600" };
}

export function calculateSGPA(subjects: { marks: number; credits: number }[]): number {
  const validSubjects = subjects.filter(s => s.marks >= 0 && s.marks <= 100 && s.credits > 0);
  if (validSubjects.length === 0) return 0;

  const totalCreditPoints = validSubjects.reduce((sum, s) => sum + s.credits * getGradePoint(s.marks), 0);
  const totalCredits = validSubjects.reduce((sum, s) => sum + s.credits, 0);

  if (totalCredits === 0) return 0;
  return totalCreditPoints / totalCredits;
}

export function calculateCGPA(semesters: { credits: number; creditPoints: number }[]): number {
  const validSemesters = semesters.filter(s => s.credits > 0 && s.creditPoints >= 0);
  if (validSemesters.length === 0) return 0;

  const totalCreditPoints = validSemesters.reduce((sum, s) => sum + s.creditPoints, 0);
  const totalCredits = validSemesters.reduce((sum, s) => sum + s.credits, 0);

  if (totalCredits === 0) return 0;
  return totalCreditPoints / totalCredits;
}

export const gradeTable = [
  { range: "90 - 100", grade: "O", gradePoint: 10, description: "Outstanding" },
  { range: "80 - 89", grade: "A+", gradePoint: 9, description: "Excellent" },
  { range: "70 - 79", grade: "A", gradePoint: 8, description: "Very Good" },
  { range: "60 - 69", grade: "B+", gradePoint: 7, description: "Good" },
  { range: "55 - 59", grade: "B", gradePoint: 6, description: "Above Average" },
  { range: "50 - 54", grade: "C", gradePoint: 5, description: "Average" },
  { range: "Below 50", grade: "F", gradePoint: 0, description: "Fail" },
];
