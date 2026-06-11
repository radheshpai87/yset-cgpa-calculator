"use client";

import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { gradeTable } from "@/lib/grading";
import { semesterPresets } from "@/lib/presets";

export default function GradingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Grading System</h1>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          YSET grade point mapping, formulas, and semester structures
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Grade Table */}
        <Card>
          <CardHeader>
            <CardTitle>Grade Point Mapping</CardTitle>
            <CardDescription>Marks to grade conversion used at YSET</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-neutral-50 dark:bg-neutral-800">
                    <th className="px-5 py-3 text-left text-sm font-semibold text-neutral-600 dark:text-neutral-300">Marks</th>
                    <th className="px-5 py-3 text-center text-sm font-semibold text-neutral-600 dark:text-neutral-300">Grade</th>
                    <th className="px-5 py-3 text-center text-sm font-semibold text-neutral-600 dark:text-neutral-300">Grade Point</th>
                    <th className="px-5 py-3 text-left text-sm font-semibold text-neutral-600 dark:text-neutral-300">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {gradeTable.map((row, i) => (
                    <tr key={i} className="border-t border-neutral-100 dark:border-neutral-800">
                      <td className="px-5 py-3 text-sm text-neutral-700 dark:text-neutral-300">{row.range}</td>
                      <td className="px-5 py-3 text-center">
                        <Badge variant={row.gradePoint === 0 ? "destructive" : "secondary"}>
                          {row.grade}
                        </Badge>
                      </td>
                      <td className="px-5 py-3 text-center text-lg font-bold text-green-700 dark:text-green-400">
                        {row.gradePoint}
                      </td>
                      <td className="px-5 py-3 text-sm text-neutral-500 dark:text-neutral-400">
                        {row.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Formulas */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>SGPA Formula</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-900 p-5 mb-4">
                <p className="font-mono text-base text-green-800 dark:text-green-300 text-center">
                  SGPA = Σ(Credit × Grade Point) / Σ(Credits)
                </p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-4 text-sm font-mono text-neutral-600 dark:text-neutral-400 space-y-1">
                <p>Subject: Marks = 87, Credits = 4</p>
                <p>Grade Point = 9 (A+)</p>
                <p>Credit Points = 4 × 9 = <span className="text-green-700 dark:text-green-400 font-bold">36</span></p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CGPA Formula</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-900 p-5 mb-4">
                <p className="font-mono text-base text-green-800 dark:text-green-300 text-center">
                  CGPA = Σ(All Credit Points) / Σ(All Credits)
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 mb-4">
                <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  CGPA is <strong>not</strong> an average of SGPAs. It uses total weighted credit points divided by total credits across all semesters.
                </p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-4 text-sm font-mono text-neutral-600 dark:text-neutral-400 space-y-1">
                <p>Sem 1: Credits = 22, Credit Pts = 207</p>
                <p>Sem 2: Credits = 21, Credit Pts = 201</p>
                <p className="pt-1 text-green-700 dark:text-green-400 font-bold">
                  CGPA = (207 + 201) / (22 + 21) = 408/43 = 9.49
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Semester Structures */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">YSET Semester Structures</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {semesterPresets.map((preset) => (
            <Card key={preset.semester}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{preset.name}</CardTitle>
                  <Badge variant="secondary">{preset.totalCredits} Credits</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {preset.subjects.map((s, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b border-neutral-50 dark:border-neutral-800 last:border-0">
                      <span className="text-sm text-neutral-700 dark:text-neutral-300 pr-3">{s.name}</span>
                      <span className="text-sm font-semibold text-neutral-500 shrink-0">{s.credits} Cr</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
