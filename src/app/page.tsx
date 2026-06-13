"use client";

import Link from "next/link";
import { Calculator, GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-4">
              Yenepoya School of Engineering & Technology
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Calculate your <span className="text-green-600 dark:text-green-400">GPA</span> in seconds
            </h1>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Enter your marks from the marksheet, get your SGPA instantly.
              Pick your semester preset — subjects and credits are already filled in.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/sgpa">
                <Button size="lg">
                  <Calculator className="h-5 w-5" />
                  Calculate SGPA
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/cgpa">
                <Button size="lg" variant="outline">
                  <GraduationCap className="h-5 w-5" />
                  Calculate CGPA
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Calculator cards */}
            <Link
              href="/sgpa"
              className="group p-8 rounded-2xl border border-neutral-200 bg-white hover:border-green-200 hover:shadow-lg transition-all dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-green-900"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-950/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Calculator className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">SGPA Calculator</h3>
              <p className="text-neutral-500 dark:text-neutral-400">
                Calculate semester GPA with automatic grade mapping and YSET presets.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400 group-hover:gap-2 transition-all">
                Get started <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/cgpa"
              className="group p-8 rounded-2xl border border-neutral-200 bg-white hover:border-green-200 hover:shadow-lg transition-all dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-green-900"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-950/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">CGPA Calculator</h3>
              <p className="text-neutral-500 dark:text-neutral-400">
                Cumulative GPA using weighted credit points across all semesters.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400 group-hover:gap-2 transition-all">
                Get started <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/grading"
              className="group p-8 rounded-2xl border border-neutral-200 bg-white hover:border-green-200 hover:shadow-lg transition-all dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-green-900"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-950/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Grading System</h3>
              <p className="text-neutral-500 dark:text-neutral-400">
                Complete grade point mapping and semester structure reference.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400 group-hover:gap-2 transition-all">
                View details <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content - visually minimal, indexable by Google */}
      <section className="py-12 border-t border-neutral-100 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <details className="group">
            <summary className="text-sm font-medium text-neutral-400 dark:text-neutral-500 cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors">
              About this calculator
            </summary>
            <div className="mt-4 max-w-3xl text-xs text-neutral-400 dark:text-neutral-600 space-y-2 leading-relaxed">
              <p>
                Built specifically for students of Yenepoya School of Engineering &amp; Technology (YSET), Mangalore.
                This calculator uses YSET&apos;s official grading system — O (10), A+ (9), A (8), B+ (7), B (6), C (5), F (0) —
                to calculate your Semester Grade Point Average (SGPA) and Cumulative Grade Point Average (CGPA).
              </p>
              <p>
                Upload your YSET marksheet PDF to auto-fill subjects and marks. Then enter the credits for each subject
                to get your SGPA instantly. Save multiple semesters and calculate your CGPA using the weighted credit point method
                (total credit points ÷ total credits — not an average of SGPAs).
              </p>
              <p>
                Supports all B.Tech branches at Yenepoya Deemed University including Computer Science &amp; Engineering (CSE),
                Electronics, Mechanical, and Civil Engineering.
              </p>
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}
