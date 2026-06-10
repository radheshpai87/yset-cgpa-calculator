import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Subject } from "./types";
import { getGrade, getGradePoint } from "./grading";

export function exportSGPAPdf(
  subjects: Subject[],
  sgpa: number,
  semesterName: string = "Semester"
) {
  const doc = new jsPDF();

  // Header
  doc.setFontSize(18);
  doc.setTextColor(34, 120, 15);
  doc.text("Yenepoya School of Engineering & Technology", 105, 20, { align: "center" });

  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text(`SGPA Report - ${semesterName}`, 105, 32, { align: "center" });

  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated on: ${new Date().toLocaleDateString("en-IN")}`, 105, 40, { align: "center" });

  // Table
  const tableData = subjects
    .filter(s => s.marks >= 0 && s.marks <= 100 && s.credits > 0)
    .map((s, i) => [
      i + 1,
      s.name || `Subject ${i + 1}`,
      s.marks,
      s.credits,
      getGrade(s.marks),
      getGradePoint(s.marks),
      s.credits * getGradePoint(s.marks),
    ]);

  autoTable(doc, {
    startY: 48,
    head: [["#", "Subject", "Marks", "Credits", "Grade", "GP", "Credit Points"]],
    body: tableData,
    theme: "grid",
    headStyles: { fillColor: [34, 120, 15] },
    styles: { fontSize: 9 },
  });

  // Summary
  const finalY = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 15;
  const totalCredits = subjects.reduce((sum, s) => sum + (s.credits > 0 ? s.credits : 0), 0);
  const totalCreditPoints = subjects
    .filter(s => s.marks >= 0 && s.marks <= 100 && s.credits > 0)
    .reduce((sum, s) => sum + s.credits * getGradePoint(s.marks), 0);

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(`Total Credits: ${totalCredits}`, 14, finalY);
  doc.text(`Total Credit Points: ${totalCreditPoints}`, 14, finalY + 8);
  doc.setFontSize(14);
  doc.setTextColor(34, 120, 15);
  doc.text(`SGPA: ${sgpa.toFixed(2)}`, 14, finalY + 18);

  doc.save(`YSET_SGPA_Report_${semesterName.replace(/\s+/g, "_")}.pdf`);
}

export function exportCGPAPdf(
  semesters: { name: string; credits: number; creditPoints: number; sgpa: number }[],
  cgpa: number
) {
  const doc = new jsPDF();

  // Header
  doc.setFontSize(18);
  doc.setTextColor(34, 120, 15);
  doc.text("Yenepoya School of Engineering & Technology", 105, 20, { align: "center" });

  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text("CGPA Report", 105, 32, { align: "center" });

  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated on: ${new Date().toLocaleDateString("en-IN")}`, 105, 40, { align: "center" });

  // Table
  const tableData = semesters.map((s, i) => [
    i + 1,
    s.name || `Semester ${i + 1}`,
    s.credits,
    s.creditPoints,
    s.sgpa.toFixed(2),
  ]);

  autoTable(doc, {
    startY: 48,
    head: [["#", "Semester", "Credits", "Credit Points", "SGPA"]],
    body: tableData,
    theme: "grid",
    headStyles: { fillColor: [34, 120, 15] },
    styles: { fontSize: 10 },
  });

  // Summary
  const finalY = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 15;
  const totalCredits = semesters.reduce((sum, s) => sum + s.credits, 0);
  const totalCreditPoints = semesters.reduce((sum, s) => sum + s.creditPoints, 0);

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(`Total Credits: ${totalCredits}`, 14, finalY);
  doc.text(`Total Credit Points: ${totalCreditPoints}`, 14, finalY + 8);
  doc.setFontSize(14);
  doc.setTextColor(34, 120, 15);
  doc.text(`CGPA: ${cgpa.toFixed(2)}`, 14, finalY + 18);

  doc.save("YSET_CGPA_Report.pdf");
}
