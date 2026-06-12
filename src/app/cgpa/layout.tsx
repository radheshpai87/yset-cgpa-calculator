import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGPA Calculator",
  description:
    "Calculate your Cumulative GPA (CGPA) across all semesters for YSET. Uses weighted credit points method, not average of SGPAs. Includes CGPA predictor.",
  openGraph: {
    title: "CGPA Calculator — YSET GPA Calculator",
    description: "Calculate cumulative GPA using weighted credit points across all semesters.",
  },
};

export default function CGPALayout({ children }: { children: React.ReactNode }) {
  return children;
}
