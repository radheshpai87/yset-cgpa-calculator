"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Download, Copy, Check, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/animated-counter";
import { CGPASemester } from "@/lib/types";
import { calculateCGPA } from "@/lib/grading";
import { loadSemesters } from "@/lib/storage";
import { exportCGPAPdf } from "@/lib/pdf-export";
import dynamic from "next/dynamic";

const RechartsCharts = dynamic(() => import("@/components/cgpa-charts"), { ssr: false });

function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

const emptySemester = (index: number): CGPASemester => ({
  id: generateId(),
  name: `Semester ${index + 1}`,
  credits: 0,
  creditPoints: 0,
  sgpa: 0,
});

export default function CGPAPage() {
  const [semesters, setSemesters] = useState<CGPASemester[]>([emptySemester(0), emptySemester(1)]);
  const [copied, setCopied] = useState(false);
  const [targetCGPA, setTargetCGPA] = useState(9);
  const [nextSemCredits, setNextSemCredits] = useState(0);

  // Auto-load saved semesters from localStorage on mount
  useEffect(() => {
    const saved = loadSemesters();
    if (saved.length > 0) {
      setSemesters(
        saved.map((s) => ({
          id: generateId(),
          name: s.name,
          credits: s.totalCredits,
          creditPoints: s.totalCreditPoints,
          sgpa: s.sgpa,
        }))
      );
    }
  }, []);

  const validSemesters = semesters.filter((s) => s.credits > 0);
  const cgpa = calculateCGPA(validSemesters);
  const totalCredits = validSemesters.reduce((sum, s) => sum + s.credits, 0);
  const totalCreditPoints = validSemesters.reduce((sum, s) => sum + s.creditPoints, 0);

  const addSemester = () => setSemesters([...semesters, emptySemester(semesters.length)]);

  const removeSemester = (id: string) => {
    if (semesters.length === 1) return;
    setSemesters(semesters.filter((s) => s.id !== id));
  };

  const updateSemester = (id: string, field: keyof CGPASemester, value: string | number) => {
    setSemesters(
      semesters.map((s) => {
        if (s.id !== id) return s;
        const updated = { ...s, [field]: value };
        if (field === "credits" || field === "creditPoints") {
          const credits = field === "credits" ? Number(value) : s.credits;
          const creditPoints = field === "creditPoints" ? Number(value) : s.creditPoints;
          updated.sgpa = credits > 0 ? creditPoints / credits : 0;
        }
        return updated;
      })
    );
  };

  const copyCGPA = () => {
    navigator.clipboard.writeText(cgpa.toFixed(2));
    setCopied(true);
    toast.success("CGPA copied");
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadPdf = () => {
    if (validSemesters.length === 0) {
      toast.error("Add semester data first");
      return;
    }
    exportCGPAPdf(validSemesters, cgpa);
    toast.success("PDF downloaded");
  };

  // Predictor
  const neededTotal = targetCGPA * (totalCredits + nextSemCredits);
  const neededPoints = Math.max(0, neededTotal - totalCreditPoints);
  const neededSGPA = nextSemCredits > 0 ? neededPoints / nextSemCredits : 0;

  // Chart data
  const chartData = validSemesters.map((s, i) => ({ name: s.name || `Sem ${i + 1}`, sgpa: Number(s.sgpa.toFixed(2)) }));
  const runningCGPA = validSemesters.reduce((acc, s, i) => {
    const tc = (i > 0 ? acc[i - 1].tc : 0) + s.credits;
    const tp = (i > 0 ? acc[i - 1].tp : 0) + s.creditPoints;
    acc.push({ name: s.name || `Sem ${i + 1}`, cgpa: Number((tp / tc).toFixed(2)), tc, tp });
    return acc;
  }, [] as { name: string; cgpa: number; tc: number; tp: number }[]);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">CGPA Calculator</h1>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          Enter credit points and credits for each semester. CGPA = Total Credit Points ÷ Total Credits (weighted, not average of SGPAs).
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        {/* Main */}
        <div className="space-y-6">
          {/* Semester Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Semesters</CardTitle>
                <Button onClick={addSemester} variant="outline" size="sm">
                  <Plus className="h-4 w-4" /> Add Semester
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="hidden lg:grid lg:grid-cols-[1fr_120px_140px_80px_40px] gap-3 mb-3 text-xs font-semibold text-neutral-400 uppercase tracking-wide px-1">
                <div>Semester Name</div>
                <div>Total Credits</div>
                <div>Total Credit Points</div>
                <div>SGPA</div>
                <div></div>
              </div>

              <div className="space-y-3">
                {semesters.map((sem, index) => (
                  <div
                    key={sem.id}
                    className="grid grid-cols-1 lg:grid-cols-[1fr_120px_140px_80px_40px] gap-3 p-4 lg:p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800"
                  >
                    <div>
                      <label className="lg:hidden text-xs font-medium text-neutral-500 mb-1 block">Semester</label>
                      <Input
                        value={sem.name}
                        onChange={(e) => updateSemester(sem.id, "name", e.target.value)}
                        placeholder={`Semester ${index + 1}`}
                      />
                    </div>
                    <div>
                      <label className="lg:hidden text-xs font-medium text-neutral-500 mb-1 block">Total Credits</label>
                      <Input
                        type="number"
                        value={sem.credits || ""}
                        onChange={(e) => updateSemester(sem.id, "credits", Math.max(0, Number(e.target.value)))}
                        placeholder="e.g. 22"
                        min={0}
                      />
                    </div>
                    <div>
                      <label className="lg:hidden text-xs font-medium text-neutral-500 mb-1 block">Credit Points</label>
                      <Input
                        type="number"
                        value={sem.creditPoints || ""}
                        onChange={(e) => updateSemester(sem.id, "creditPoints", Math.max(0, Number(e.target.value)))}
                        placeholder="e.g. 198"
                        min={0}
                      />
                    </div>
                    <div className="flex items-center">
                      <label className="lg:hidden text-xs font-medium text-neutral-500 mr-3">SGPA:</label>
                      <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                        {sem.credits > 0 ? sem.sgpa.toFixed(2) : "—"}
                      </span>
                    </div>
                    <div className="flex items-center justify-end">
                      <button
                        onClick={() => removeSemester(sem.id)}
                        className="p-2 rounded-lg hover:bg-red-50 text-neutral-400 hover:text-red-500 dark:hover:bg-red-950/50 transition-colors"
                        aria-label="Remove"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={addSemester}
                className="mt-4 flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2"
              >
                <Plus className="h-4 w-4" /> Add another semester
              </button>
            </CardContent>
          </Card>

          {/* Charts */}
          {chartData.length >= 2 && (
            <RechartsCharts chartData={chartData} runningCGPA={runningCGPA} />
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* CGPA Card */}
          <Card className="border-green-200 bg-gradient-to-b from-green-50 to-white dark:border-green-900 dark:from-green-950/40 dark:to-neutral-900">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">Your CGPA</p>
              <AnimatedCounter
                value={cgpa}
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

              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button onClick={copyCGPA} variant="outline" size="sm">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
                <Button onClick={downloadPdf} variant="outline" size="sm">
                  <Download className="h-4 w-4" /> PDF
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Predictor */}
          {totalCredits > 0 && (
            <Card>
              <CardContent className="p-6">
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  CGPA Predictor
                </p>
                <p className="text-xs text-neutral-500 mb-4">What SGPA do you need next semester?</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <label className="text-sm text-neutral-600 dark:text-neutral-400 w-32">Target CGPA:</label>
                    <Input
                      type="number"
                      value={targetCGPA}
                      onChange={(e) => setTargetCGPA(Math.min(10, Math.max(0, Number(e.target.value))))}
                      min={0}
                      max={10}
                      step={0.1}
                      className="w-20"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="text-sm text-neutral-600 dark:text-neutral-400 w-32">Next sem credits:</label>
                    <Input
                      type="number"
                      value={nextSemCredits || ""}
                      onChange={(e) => setNextSemCredits(Math.max(0, Number(e.target.value)))}
                      min={0}
                      placeholder="e.g. 22"
                      className="w-20"
                    />
                  </div>
                </div>

                {nextSemCredits > 0 && (
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600 dark:text-neutral-400">Required SGPA:</span>
                      <span className={`font-bold ${neededSGPA > 10 ? "text-red-500" : "text-green-700 dark:text-green-400"}`}>
                        {neededSGPA.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600 dark:text-neutral-400">Required Credit Points:</span>
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">{neededPoints.toFixed(0)}</span>
                    </div>
                    {neededSGPA > 10 && (
                      <p className="text-xs text-red-500 font-medium pt-1">⚠️ Not achievable in one semester</p>
                    )}
                  </div>
                )}

                {nextSemCredits === 0 && (
                  <p className="text-xs text-neutral-400">Enter next semester&apos;s total credits to see prediction</p>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
