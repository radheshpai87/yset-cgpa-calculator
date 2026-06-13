export interface BranchInfo {
  id: string;
  name: string;
  shortName: string;
  creditSheetUrl: string;
  semesters: BranchSemester[];
}

export interface BranchSemester {
  semester: number;
  subjects: { name: string; credits: number }[];
}

export const branches: BranchInfo[] = [
  {
    id: "cse-aift",
    name: "Computer Science & Engineering / AI & Full Stack Technology",
    shortName: "CSE / AIFT",
    creditSheetUrl: "https://www.yset.yenepoya.edu.in/img/pdf/B.Tech_CSE%20(3).pdf",
    semesters: [
      {
        semester: 1,
        subjects: [
          { name: "Innovation and Design Thinking", credits: 1 },
          { name: "Communicative English", credits: 1 },
          { name: "Basic Electronics", credits: 4 },
          { name: "Front End Web Development Fundamentals", credits: 4 },
          { name: "Computational Mathematics - I", credits: 4 },
          { name: "Engineering Physics", credits: 4 },
          { name: "Problem Solving Using Programming", credits: 4 },
        ],
      },
      {
        semester: 2,
        subjects: [
          { name: "Computational Mathematics - II", credits: 4 },
          { name: "Materials Chemistry for Computing Systems", credits: 4 },
          { name: "Object Oriented Programming", credits: 3 },
          { name: "Mechanical Engineering Sciences", credits: 3 },
          { name: "Front-End Web Development Advanced / Full Stack Web Development", credits: 4 },
          { name: "UI and UX Design for Developers", credits: 2 },
          { name: "Professional Writing Skills in English", credits: 1 },
        ],
      },
      {
        semester: 3,
        subjects: [
          { name: "Backend Web Development", credits: 4 },
          { name: "Operating Systems", credits: 3 },
          { name: "NoSQL Databases for Web Development", credits: 4 },
          { name: "AI Systems Engineering", credits: 3 },
          { name: "Full Stack Web Development", credits: 4 },
          { name: "Foundations of Intelligence and Emerging Technologies", credits: 3 },
          { name: "Critical Thinking", credits: 1 },
        ],
      },
    ],
  },
  {
    id: "cse-aiml",
    name: "Computer Science & Engineering (AI & ML)",
    shortName: "CSE - AIML",
    creditSheetUrl: "https://www.yset.yenepoya.edu.in/img/pdf/B.Tech_CSE_AIML.pdf",
    semesters: [],
  },
  {
    id: "cse-cs",
    name: "Computer Science & Engineering (Cyber Security)",
    shortName: "CSE - Cyber Security",
    creditSheetUrl: "https://www.yset.yenepoya.edu.in/img/pdf/B.Tech_CSE_CS%20(1).pdf",
    semesters: [],
  },
  {
    id: "cse-ds",
    name: "Computer Science & Engineering (Data Science)",
    shortName: "CSE - Data Science",
    creditSheetUrl: "https://www.yset.yenepoya.edu.in/img/pdf/B.Tech_CSE_DS%20(3).pdf",
    semesters: [],
  },
];

/**
 * Find credits for a subject by fuzzy matching against branch data.
 * Returns the credit value or 0 if not found.
 */
export function findCreditsForSubject(
  branchId: string,
  semester: number,
  subjectName: string
): number {
  const branch = branches.find((b) => b.id === branchId);
  if (!branch) return 0;

  const sem = branch.semesters.find((s) => s.semester === semester);
  if (!sem) return 0;

  const normalized = subjectName.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (const subject of sem.subjects) {
    const subNorm = subject.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Exact match or one contains the other
    if (
      subNorm === normalized ||
      subNorm.includes(normalized) ||
      normalized.includes(subNorm)
    ) {
      return subject.credits;
    }
  }

  // Partial match — check if significant words overlap
  const words = normalized.match(/[a-z]{4,}/g) || [];
  for (const subject of sem.subjects) {
    const subNorm = subject.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    const matchCount = words.filter((w) => subNorm.includes(w)).length;
    if (matchCount >= 2) return subject.credits;
  }

  return 0;
}
