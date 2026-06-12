import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SGPA Calculator",
  description:
    "Calculate your Semester GPA (SGPA) for YSET. Upload marksheet PDF to auto-fill subjects and marks, enter credits, get instant SGPA with grade breakdown.",
  openGraph: {
    title: "SGPA Calculator — YSET GPA Calculator",
    description: "Calculate semester GPA instantly. Upload marksheet PDF, enter credits, done.",
  },
};

export default function SGPALayout({ children }: { children: React.ReactNode }) {
  return children;
}
