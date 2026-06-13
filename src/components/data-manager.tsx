"use client";

import { useState, useRef } from "react";
import { Download, Upload, Trash2, Database } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { exportData, importData, clearData, loadSemesters } from "@/lib/storage";

interface DataManagerProps {
  onDataChange?: () => void;
}

export function DataManager({ onDataChange }: DataManagerProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [savedCount, setSavedCount] = useState(() => {
    if (typeof window === "undefined") return 0;
    return loadSemesters().length;
  });

  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `yset-gpa-data-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Data exported successfully");
  };

  const handleImport = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const result = importData(text);
      if (result) {
        setSavedCount(result.length);
        toast.success(`Imported ${result.length} semester(s)`);
        onDataChange?.();
      } else {
        toast.error("Invalid data file");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const handleClear = () => {
    if (confirm("Are you sure you want to delete all saved data? This cannot be undone.")) {
      clearData();
      setSavedCount(0);
      toast.success("All data cleared");
      onDataChange?.();
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Database className="h-4 w-4 text-green-600" />
          Data Management
        </CardTitle>
        <CardDescription>{savedCount} semester(s) saved</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button onClick={handleExport} variant="outline" size="sm" className="w-full gap-2 justify-start">
          <Download className="h-4 w-4" /> Export JSON
        </Button>
        <Button onClick={handleImport} variant="outline" size="sm" className="w-full gap-2 justify-start">
          <Upload className="h-4 w-4" /> Import JSON
        </Button>
        <Button
          onClick={handleClear}
          variant="ghost"
          size="sm"
          className="w-full gap-2 justify-start text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          <Trash2 className="h-4 w-4" /> Clear All Data
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="hidden"
          aria-label="Import JSON file"
        />
      </CardContent>
    </Card>
  );
}
