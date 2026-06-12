import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grading System",
  description:
    "YSET grading system reference — grade point mapping (O, A+, A, B+, B, C, F), SGPA and CGPA formulas with examples, and semester-wise subject structures.",
  openGraph: {
    title: "Grading System — YSET GPA Calculator",
    description: "Complete YSET grade point mapping, formulas, and semester structures.",
  },
};

export default function GradingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
