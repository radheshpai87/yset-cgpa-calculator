"use client";

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

interface ChartProps {
  chartData: { name: string; sgpa: number }[];
  runningCGPA: { name: string; cgpa: number }[];
}

export default function CGPACharts({ chartData, runningCGPA }: ChartProps) {
  if (chartData.length < 2) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardContent className="p-6">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">SGPA per Semester</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 10]} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="sgpa" fill="#16a34a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">CGPA Progression</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={runningCGPA}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 10]} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line type="monotone" dataKey="cgpa" stroke="#16a34a" strokeWidth={2} dot={{ fill: "#16a34a", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
