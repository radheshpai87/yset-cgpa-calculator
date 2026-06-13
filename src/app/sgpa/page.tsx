"use client";

import { useState, useRef } from "react";
import { Plus, Trash2, Download, Copy, Save, Check, Upload, FileText, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/animated-counter";
import { Subject, SemesterData } from "@/lib/types";
import { getGradeInfo, calculateSGPA, getGradePoint } from "@/lib/grading";
import { saveSemesters, loadSemesters } from "@/lib/storage";
import { exportSGPAPdf } from "@/lib/pdf-export";
import { branches, findCreditsForSubject } from "@/lib/branch-credits";

function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

const emptySubject = (): Subject => ({
  id: generateId(),
  name: "",
  marks: 0,
  credits: 0,
});

export default function SGPAPage() {
  const [subjects, setSubjects] = useState<Subject[]>([emptySubject(), emptySubject(), emptySubject()]);
  const [semesterName, setSemesterName] = useState("Semester 1");
  const [copied, setCopied] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [detectedSemester, setDetectedSemester] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-fill credits when branch changes and subjects already have names
  const handleBranchChange = (branchId: string) => {
    setSelectedBranch(branchId);
    // Re-fill credits for existing subjects
    setSubjects((prev) =>
      prev.map((s) => {
        if (s.name && s.name.length > 2) {
          const credits = findCreditsForSubject(branchId, detectedSemester, s.name);
          if (credits > 0) return { ...s, credits };
        }
        return s;
      })
    );
  };

  const validSubjects = subjects.filter((s) => s.credits > 0 && s.marks > 0 && s.marks <= 100);
  const sgpa = calculateSGPA(validSubjects);
  const totalCredits = validSubjects.reduce((sum, s) => sum + s.credits, 0);
  const totalCreditPoints = validSubjects.reduce((sum, s) => sum + s.credits * getGradePoint(s.marks), 0);

  const addSubject = () => setSubjects([...subjects, emptySubject()]);

  const removeSubject = (id: string) => {
    if (subjects.length === 1) return;
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const updateSubject = (id: string, field: keyof Subject, value: string | number) => {
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Please upload a PDF file");
      return;
    }

    try {
      // Use pdf.js to extract text
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item: unknown) => (item as { str: string }).str).join(" ");
        fullText += pageText + "\n";
      }

      // Try to extract semester number
      const semMatch = fullText.match(/(I{1,3}V?|IV|V|VI|VII|VIII)\s*SEM/i) 
        || fullText.match(/(\d)\s*(?:st|nd|rd|th)?\s*sem/i)
        || fullText.match(/semester\s*(\d)/i);
      let semNum = 0;
      if (semMatch) {
        const romanToNum: Record<string, number> = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8 };
        const val = semMatch[1].toUpperCase();
        semNum = romanToNum[val] || parseInt(val) || 1;
        setSemesterName(`Semester ${semNum}`);
        setDetectedSemester(semNum);
      }

      // Parse subjects from the text
      const parsed = parseFromYSETFormat(fullText);

      if (parsed.length > 0) {
        setSubjects(
          parsed.map((s) => {
            // Try to auto-fill credits from branch data
            let credits = 0;
            if (selectedBranch) {
              credits = findCreditsForSubject(selectedBranch, semNum, s.name);
            }
            return {
              id: generateId(),
              name: s.name,
              marks: s.marks,
              credits,
            };
          })
        );
        const filledCount = parsed.filter((s) =>
          selectedBranch ? findCreditsForSubject(selectedBranch, semNum, s.name) > 0 : false
        ).length;
        if (filledCount > 0) {
          toast.success(`Found ${parsed.length} subjects — auto-filled ${filledCount} credits from ${branches.find(b => b.id === selectedBranch)?.shortName}`);
        } else {
          toast.success(`Found ${parsed.length} subjects — enter credits for each`);
        }
      } else {
        toast.error("Could not extract subjects. Try entering manually.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to read PDF. Try entering subjects manually.");
    }

    // Reset file input
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const saveSemester = () => {
    if (validSubjects.length === 0) {
      toast.error("Enter marks and credits for at least one subject");
      return;
    }
    const semesterData: SemesterData = {
      id: generateId(),
      name: semesterName,
      subjects: validSubjects,
      sgpa,
      totalCredits,
      totalCreditPoints,
      createdAt: new Date().toISOString(),
    };
    const existing = loadSemesters();
    saveSemesters([...existing, semesterData]);
    toast.success(`${semesterName} saved! Use it in CGPA calculator.`);
  };

  const copySGPA = () => {
    navigator.clipboard.writeText(sgpa.toFixed(2));
    setCopied(true);
    toast.success("SGPA copied");
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadPdf = () => {
    if (validSubjects.length === 0) {
      toast.error("Enter marks first");
      return;
    }
    exportSGPAPdf(validSubjects, sgpa, semesterName);
    toast.success("PDF downloaded");
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">SGPA Calculator</h1>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          Select your branch, upload your marksheet PDF — credits auto-fill. Or add subjects manually.
        </p>
      </div>

      {/* Branch Selector */}
      <div className="mb-6">
        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">
          Select your branch
        </label>
        <div className="flex flex-wrap gap-2">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => handleBranchChange(branch.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedBranch === branch.id
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
              }`}
            >
              {branch.shortName}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
          ⚠️ Auto-fill credits is only available for Kalvium branches
        </p>
        {selectedBranch && (
          <a
            href={branches.find((b) => b.id === selectedBranch)?.creditSheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 text-sm text-green-600 dark:text-green-400 hover:underline"
          >
            <FileText className="h-4 w-4" />
            View official credit sheet (PDF)
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>

      {/* Upload Section */}
      <div className="mb-8">
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 text-center cursor-pointer hover:border-green-400 hover:bg-green-50/50 dark:hover:border-green-700 dark:hover:bg-green-950/20 transition-all"
        >
          <Upload className="h-8 w-8 text-neutral-400 mx-auto mb-3" />
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Upload Marksheet PDF
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            {selectedBranch
              ? "Subjects, marks, and credits will be filled automatically"
              : "Subjects and marks will be extracted — select a branch above for auto-credits"}
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handlePdfUpload}
          className="hidden"
          aria-label="Upload marksheet PDF"
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        {/* Subjects Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Subjects</CardTitle>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  {validSubjects.length === 0
                    ? "Add subjects or upload a marksheet above"
                    : `${validSubjects.length} subject${validSubjects.length > 1 ? "s" : ""} with valid data`}
                </p>
              </div>
              <Button onClick={addSubject} variant="outline" size="sm">
                <Plus className="h-4 w-4" /> Add Subject
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Table Header */}
            <div className="hidden lg:grid lg:grid-cols-[1fr_100px_80px_70px_70px_80px_40px] gap-3 mb-3 text-xs font-semibold text-neutral-400 uppercase tracking-wide px-1">
              <div>Subject Name</div>
              <div>Marks</div>
              <div>Credits</div>
              <div>Grade</div>
              <div>GP</div>
              <div>Cr × GP</div>
              <div></div>
            </div>

            <div className="space-y-3">
              {subjects.map((subject, index) => {
                const gradeInfo = getGradeInfo(subject.marks);
                const creditPoints = subject.credits > 0 && subject.marks > 0 ? subject.credits * gradeInfo.gradePoint : 0;
                const needsCredits = subject.marks > 0 && subject.credits === 0;

                return (
                  <div
                    key={subject.id}
                    className={`grid grid-cols-1 lg:grid-cols-[1fr_100px_80px_70px_70px_80px_40px] gap-3 p-4 lg:p-3 rounded-xl border ${
                      needsCredits
                        ? "bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800"
                        : "bg-neutral-50 border-neutral-100 dark:bg-neutral-800/50 dark:border-neutral-800"
                    }`}
                  >
                    <div>
                      <label className="lg:hidden text-xs font-medium text-neutral-500 mb-1 block">Subject</label>
                      <Input
                        value={subject.name}
                        onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
                        placeholder={`Subject ${index + 1}`}
                      />
                    </div>
                    <div>
                      <label className="lg:hidden text-xs font-medium text-neutral-500 mb-1 block">Marks (0–100)</label>
                      <Input
                        type="number"
                        value={subject.marks || ""}
                        onChange={(e) => updateSubject(subject.id, "marks", Math.min(100, Math.max(0, Number(e.target.value))))}
                        placeholder="0–100"
                        min={0}
                        max={100}
                      />
                    </div>
                    <div>
                      <label className="lg:hidden text-xs font-medium text-neutral-500 mb-1 block">Credits</label>
                      <Input
                        type="number"
                        value={subject.credits || ""}
                        onChange={(e) => updateSubject(subject.id, "credits", Math.max(0, Number(e.target.value)))}
                        placeholder={needsCredits ? "⚠️" : "Cr"}
                        min={0}
                        className={needsCredits ? "border-amber-300 dark:border-amber-700" : ""}
                      />
                    </div>
                    <div className="flex items-center">
                      <label className="lg:hidden text-xs font-medium text-neutral-500 mr-3">Grade:</label>
                      {subject.credits > 0 && subject.marks > 0 ? (
                        <Badge variant="secondary" className={gradeInfo.color}>
                          {gradeInfo.grade}
                        </Badge>
                      ) : (
                        <span className="text-neutral-300 dark:text-neutral-600">—</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <label className="lg:hidden text-xs font-medium text-neutral-500 mr-3">GP:</label>
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {subject.credits > 0 && subject.marks > 0 ? gradeInfo.gradePoint : "—"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <label className="lg:hidden text-xs font-medium text-neutral-500 mr-3">Cr×GP:</label>
                      <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                        {creditPoints > 0 ? creditPoints : "—"}
                      </span>
                    </div>
                    <div className="flex items-center justify-end">
                      <button
                        onClick={() => removeSubject(subject.id)}
                        className="p-2 rounded-lg hover:bg-red-50 text-neutral-400 hover:text-red-500 dark:hover:bg-red-950/50 transition-colors"
                        aria-label="Remove subject"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={addSubject}
              className="mt-4 flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2"
            >
              <Plus className="h-4 w-4" /> Add another subject
            </button>
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* SGPA Result Card */}
          <Card className="border-green-200 bg-linear-to-b from-green-50 to-white dark:border-green-900 dark:from-green-950/40 dark:to-neutral-900">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">Your SGPA</p>
              <AnimatedCounter
                value={sgpa}
                decimals={2}
                className="text-5xl font-bold text-green-700 dark:text-green-400"
              />
              <p className="text-sm text-neutral-500 mt-1">out of 10.00</p>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="text-center p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700">
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white">{totalCredits}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">Total Credits</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700">
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white">{totalCreditPoints}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">Credit Points</p>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button onClick={copySGPA} variant="outline" size="sm">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
                <Button onClick={downloadPdf} variant="outline" size="sm">
                  <Download className="h-4 w-4" /> Export PDF
                </Button>
              </div>

              <Button onClick={saveSemester} className="w-full mt-3" size="sm">
                <Save className="h-4 w-4" /> Save for CGPA
              </Button>
            </CardContent>
          </Card>

          {/* Grade Distribution */}
          {validSubjects.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Grade Distribution</p>
                <div className="space-y-2">
                  {Object.entries(
                    validSubjects.reduce((acc, s) => {
                      const g = getGradeInfo(s.marks).grade;
                      acc[g] = (acc[g] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>)
                  ).map(([grade, count]) => (
                    <div key={grade} className="flex items-center gap-3">
                      <Badge variant="secondary" className="w-8 justify-center">{grade}</Badge>
                      <div className="flex-1 h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full transition-all duration-500"
                          style={{ width: `${(count / validSubjects.length) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 w-6 text-right">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

/** Parse YSET marksheet format from extracted PDF text */
function parseFromYSETFormat(text: string): { name: string; marks: number }[] {
  const subjects: { name: string; marks: number }[] = [];

  // Clean up the text - normalize whitespace
  const cleaned = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  // YSET marksheet subjects always end with PASS or FAIL
  // The pattern in extracted text is typically:
  // "SubjectName PASS Theory 50 46 50 48 100 94"
  // Or for IA-only: "SubjectName PASS Theory 0 50 47 50 47"

  // First, remove table headers that might get concatenated
  const headerless = cleaned
    .replace(/Subject\s+Theory\/Practical\s+Viva\s+IA\s+Total\s+Remarks/gi, "")
    .replace(/Max\s+Sec\s+Max\s+Sec\s+Max\s+Sec\s+Max\s+Sec/gi, "");

  // Pattern: SubjectName PASS/FAIL Theory [numbers]
  const pattern = /([A-Z][A-Za-z\s\-\/&(),.]+?)\s+(PASS|FAIL)\s+Theory\s+([\d\s]+)/g;
  let match;

  while ((match = pattern.exec(headerless)) !== null) {
    let name = match[1].trim();
    const numbers = match[3].trim().split(/\s+/).map(Number).filter((n) => !isNaN(n));

    // Skip if name looks like garbage or is too short
    if (name.length < 3) continue;

    // Get the total marks: last number in the sequence
    // For 100-max subjects: [50, sec, 50, sec, 100, totalSec] → last is totalSec
    // For 50-max subjects: [0, 50, sec, 50, totalSec] → last is totalSec
    if (numbers.length >= 2) {
      const totalMarks = numbers[numbers.length - 1];
      if (totalMarks >= 0 && totalMarks <= 100) {
        subjects.push({ name, marks: totalMarks });
      }
    }
  }

  // Fallback: try finding subject names by looking for PASS/FAIL without "Theory" attached
  if (subjects.length === 0) {
    const lines = headerless.split("\n");
    let i = 0;
    while (i < lines.length) {
      const line = lines[i].trim();
      // Look for a line with PASS or FAIL
      const passMatch = line.match(/^(.+?)\s+(PASS|FAIL)\s*$/);
      if (passMatch) {
        const name = passMatch[1].trim();
        // Look at next line(s) for "Theory" and numbers
        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1].trim();
          const nums = nextLine.match(/\d+/g);
          if (nums && nums.length >= 2 && name.length > 2) {
            const total = parseInt(nums[nums.length - 1]);
            if (total >= 0 && total <= 100) {
              subjects.push({ name, marks: total });
            }
          }
        }
      }
      i++;
    }
  }

  return subjects;
}
