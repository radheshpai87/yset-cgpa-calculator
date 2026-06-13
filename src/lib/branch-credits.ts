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
          { name: "Computational Mathematics – I", credits: 4 },
          { name: "Engineering Physics", credits: 4 },
          { name: "Problem Solving using Programming", credits: 4 },
          { name: "Basic Electronics", credits: 4 },
          { name: "Front-end Web Development - Fundamentals", credits: 4 },
          { name: "Innovation and Design Thinking", credits: 1 },
          { name: "Communicative English", credits: 1 },
        ],
      },
      {
        semester: 2,
        subjects: [
          { name: "Computational Mathematics - II", credits: 4 },
          { name: "Materials Chemistry for Computer Systems", credits: 4 },
          { name: "Object Oriented Programming", credits: 3 },
          { name: "Mechanical Engineering Sciences", credits: 3 },
          { name: "Frontend Web Development - Advanced", credits: 4 },
          { name: "UI and UX Design for Developers", credits: 2 },
          { name: "Professional Writing Skills in English", credits: 1 },
          { name: "Computer Organisation and Architecture", credits: 4 },
        ],
      },
      {
        semester: 3,
        subjects: [
          { name: "Backend Web Development", credits: 4 },
          { name: "NoSQL Databases for Web Development", credits: 4 },
          { name: "Full Stack Web Development", credits: 4 },
          { name: "Operating Systems", credits: 4 },
          { name: "Critical Thinking", credits: 2 },
          { name: "Technologies", credits: 3 },
          { name: "AI Systems Engineering", credits: 2 },
        ],
      },
      {
        semester: 4,
        subjects: [
          { name: "Data Structures and Algorithms - 1", credits: 4 },
          { name: "Database Management Systems", credits: 4 },
          { name: "Linux Administration", credits: 4 },
          { name: "AI Hardware and Accelerators", credits: 4 },
          { name: "Formal Language and Automata Theory", credits: 4 },
          { name: "Responsible and Explainable AI", credits: 4 },
          { name: "Professional Skills for the Workplace", credits: 3 },
        ],
      },
      {
        semester: 5,
        subjects: [
          { name: "Data Structures and Algorithms - 2", credits: 4 },
          { name: "Machine Learning", credits: 3 },
          { name: "Multimodal AI and Sensor Fusion", credits: 3 },
          { name: "Tools and Techniques for Creative Thinking", credits: 3 },
          { name: "LLM Systems Foundation", credits: 3 },
          { name: "Compiler Design", credits: 3 },
          { name: "AI Product Management & Design Thinking", credits: 4 },
        ],
      },
      {
        semester: 6,
        subjects: [
          { name: "Advanced Machine Learning", credits: 3 },
          { name: "Design and Analysis of Algorithms", credits: 4 },
          { name: "Computer Networks", credits: 4 },
          { name: "Systems Design", credits: 4 },
          { name: "Programming with Prompt Engineering", credits: 4 },
          { name: "Fundamentals of Business Management", credits: 3 },
          { name: "AI for Human-Machine Interaction", credits: 3 },
          { name: "Techno-Philosophy: AI and Ethics", credits: 4 },
        ],
      },
      {
        semester: 7,
        subjects: [
          { name: "Professional Elective - 1", credits: 4 },
          { name: "Professional Elective - 2", credits: 4 },
          { name: "Professional Elective - 3", credits: 4 },
          { name: "Industry Internship", credits: 9 },
        ],
      },
      {
        semester: 8,
        subjects: [
          { name: "Industry Internship", credits: 15 },
        ],
      },
    ],
  },
  {
    id: "cse-aiml",
    name: "Computer Science & Engineering (AI & ML)",
    shortName: "CSE - AIML",
    creditSheetUrl: "https://www.yset.yenepoya.edu.in/img/pdf/B.Tech_CSE_AIML.pdf",
    semesters: [
      {
        semester: 1,
        subjects: [
          { name: "Computational Mathematics – I", credits: 4 },
          { name: "Engineering Physics", credits: 4 },
          { name: "Problem Solving using Programming", credits: 4 },
          { name: "Basic Electronics", credits: 4 },
          { name: "Front-end Web Development - Fundamentals", credits: 4 },
          { name: "Innovation and Design Thinking", credits: 1 },
          { name: "Communicative English", credits: 1 },
        ],
      },
      {
        semester: 2,
        subjects: [
          { name: "Computational Mathematics - II", credits: 4 },
          { name: "Materials Chemistry for Computing Systems", credits: 4 },
          { name: "Object Oriented Programming", credits: 3 },
          { name: "Mechanical Engineering Sciences", credits: 3 },
          { name: "Frontend Web Development - Advanced", credits: 4 },
          { name: "UI and UX Design for Developers", credits: 2 },
          { name: "Professional Writing Skills in English", credits: 1 },
        ],
      },
      {
        semester: 3,
        subjects: [
          { name: "Backend Web Development", credits: 4 },
          { name: "NoSQL Databases for Web Development", credits: 4 },
          { name: "Full Stack Web Development", credits: 4 },
          { name: "Operating Systems", credits: 4 },
          { name: "Critical Thinking", credits: 2 },
          { name: "Computer Organization and Architecture", credits: 4 },
        ],
      },
      {
        semester: 4,
        subjects: [
          { name: "Data Structures and Algorithms - 1", credits: 4 },
          { name: "Professional Skills for the Workplace", credits: 4 },
          { name: "Database Management Systems", credits: 4 },
          { name: "Introduction to Artificial Intelligence", credits: 4 },
          { name: "Artificial Intelligence Methods, Tools and Techniques", credits: 4 },
          { name: "Linux Administration", credits: 4 },
        ],
      },
      {
        semester: 5,
        subjects: [
          { name: "Data Structures and Algorithms - 2", credits: 4 },
          { name: "Formal Language and Automata Theory", credits: 4 },
          { name: "Machine Learning", credits: 3 },
          { name: "Tools and Techniques for Creative Thinking", credits: 3 },
          { name: "LLM Systems Foundation", credits: 3 },
        ],
      },
      {
        semester: 6,
        subjects: [
          { name: "Design and Analysis of Algorithms", credits: 4 },
          { name: "Computer Networks", credits: 4 },
          { name: "Compiler Design", credits: 3 },
          { name: "Advanced Machine Learning", credits: 3 },
          { name: "Systems Design", credits: 4 },
          { name: "Programming with Prompt Engineering", credits: 4 },
        ],
      },
      {
        semester: 7,
        subjects: [
          { name: "Fundamentals of Business Management", credits: 3 },
          { name: "Natural Language Processing", credits: 4 },
          { name: "Professional Elective - 1", credits: 4 },
          { name: "Foundation Elective", credits: 3 },
          { name: "Professional Elective - 2", credits: 4 },
        ],
      },
      {
        semester: 8,
        subjects: [
          { name: "Capstone Project", credits: 6 },
          { name: "Industry Internship", credits: 12 },
        ],
      },
    ],
  },
  {
    id: "cse-cs",
    name: "Computer Science & Engineering (Cyber Security)",
    shortName: "CSE - Cyber Security",
    creditSheetUrl: "https://www.yset.yenepoya.edu.in/img/pdf/B.Tech_CSE_CS%20(1).pdf",
    semesters: [
      {
        semester: 1,
        subjects: [
          { name: "Computational Mathematics – I", credits: 4 },
          { name: "Engineering Physics", credits: 4 },
          { name: "Problem Solving using Programming", credits: 4 },
          { name: "Basic Electronics", credits: 4 },
          { name: "Front-end Web Development - Fundamentals", credits: 4 },
          { name: "Innovation and Design Thinking", credits: 1 },
          { name: "Communicative English", credits: 1 },
        ],
      },
      {
        semester: 2,
        subjects: [
          { name: "Computational Mathematics - II", credits: 4 },
          { name: "Materials Chemistry for Computer Systems", credits: 4 },
          { name: "Object Oriented Programming", credits: 3 },
          { name: "Mechanical Engineering Sciences", credits: 3 },
          { name: "Frontend Web Development - Advanced", credits: 4 },
          { name: "UI and UX Design for Developers", credits: 2 },
          { name: "Professional Writing Skills in English", credits: 1 },
        ],
      },
      {
        semester: 3,
        subjects: [
          { name: "Backend Web Development", credits: 4 },
          { name: "NoSQL Databases for Web Development", credits: 4 },
          { name: "Full Stack Web Development", credits: 4 },
          { name: "Computer Organisation and Architecture", credits: 4 },
          { name: "Operating Systems", credits: 4 },
          { name: "Critical Thinking", credits: 2 },
        ],
      },
      {
        semester: 4,
        subjects: [
          { name: "Data Structures and Algorithms - 1", credits: 4 },
          { name: "Professional Skills for the Workplace", credits: 4 },
          { name: "Database Management Systems", credits: 4 },
          { name: "Linux Administration", credits: 4 },
          { name: "Cybersecurity Fundamentals, Exploits and Vulnerabilities", credits: 4 },
          { name: "Cryptography and Network Security", credits: 4 },
        ],
      },
      {
        semester: 5,
        subjects: [
          { name: "Data Structures and Algorithms - 2", credits: 4 },
          { name: "Formal Language and Automata Theory", credits: 4 },
          { name: "Malware Analysis", credits: 3 },
          { name: "VAPT and Ethical Hacking", credits: 3 },
          { name: "Tools and Techniques for Creative Thinking", credits: 3 },
          { name: "IT Acts and Cyber Laws", credits: 3 },
        ],
      },
      {
        semester: 6,
        subjects: [
          { name: "Design and Analysis of Algorithms", credits: 4 },
          { name: "Computer Networks", credits: 4 },
          { name: "Compiler Design", credits: 3 },
          { name: "Security in Public Clouds", credits: 3 },
          { name: "Systems Design", credits: 4 },
          { name: "Programming with Prompt Engineering", credits: 4 },
        ],
      },
      {
        semester: 7,
        subjects: [
          { name: "Fundamentals of Business Management", credits: 3 },
          { name: "Cyber Forensics and Investigation", credits: 4 },
          { name: "Professional Elective - 1", credits: 4 },
          { name: "Foundation Elective", credits: 3 },
          { name: "Professional Elective - 2", credits: 4 },
          { name: "Professional Elective - 3", credits: 4 },
        ],
      },
      {
        semester: 8,
        subjects: [
          { name: "Capstone Project", credits: 6 },
          { name: "Industry Internship", credits: 12 },
        ],
      },
    ],
  },
  {
    id: "cse-ds",
    name: "Computer Science & Engineering (Data Science)",
    shortName: "CSE - Data Science",
    creditSheetUrl: "https://www.yset.yenepoya.edu.in/img/pdf/B.Tech_CSE_DS%20(3).pdf",
    semesters: [
      {
        semester: 1,
        subjects: [
          { name: "Computational Mathematics – I", credits: 4 },
          { name: "Engineering Physics", credits: 4 },
          { name: "Problem Solving using Programming", credits: 4 },
          { name: "Basic Electronics", credits: 4 },
          { name: "Front-end Web Development - Fundamentals", credits: 4 },
          { name: "Innovation and Design Thinking", credits: 1 },
          { name: "Communicative English", credits: 1 },
        ],
      },
      {
        semester: 2,
        subjects: [
          { name: "Computational Mathematics - II", credits: 4 },
          { name: "Materials Chemistry for Computer Systems", credits: 4 },
          { name: "Object Oriented Programming", credits: 3 },
          { name: "Mechanical Engineering Sciences", credits: 3 },
          { name: "Frontend Web Development - Advanced", credits: 4 },
          { name: "UI and UX Design for Developers", credits: 2 },
          { name: "Professional Writing Skills in English", credits: 1 },
        ],
      },
      {
        semester: 3,
        subjects: [
          { name: "Backend Web Development", credits: 4 },
          { name: "NoSQL Databases for Web Development", credits: 4 },
          { name: "Full Stack Web Development", credits: 4 },
          { name: "Computer Organisation and Architecture", credits: 4 },
          { name: "Operating Systems", credits: 4 },
          { name: "Critical Thinking", credits: 2 },
        ],
      },
      {
        semester: 4,
        subjects: [
          { name: "Data Structures and Algorithms - 1", credits: 4 },
          { name: "Professional Skills for the Workplace", credits: 4 },
          { name: "Database Management Systems", credits: 4 },
          { name: "Linux Administration", credits: 4 },
          { name: "Introduction to Data Science", credits: 4 },
          { name: "R Programming", credits: 4 },
        ],
      },
      {
        semester: 5,
        subjects: [
          { name: "Data Structures and Algorithms - 2", credits: 4 },
          { name: "Formal Language and Automata Theory", credits: 4 },
          { name: "Data Mining", credits: 3 },
          { name: "Statistical Inference", credits: 3 },
          { name: "Tools and Techniques for Creative Thinking", credits: 3 },
          { name: "Exploratory Data Analysis", credits: 3 },
        ],
      },
      {
        semester: 6,
        subjects: [
          { name: "Design and Analysis of Algorithms", credits: 4 },
          { name: "Computer Networks", credits: 4 },
          { name: "Compiler Design", credits: 3 },
          { name: "Data Visualization", credits: 3 },
          { name: "Systems Design", credits: 4 },
          { name: "Programming with Prompt Engineering", credits: 4 },
        ],
      },
      {
        semester: 7,
        subjects: [
          { name: "Fundamentals of Business Management", credits: 3 },
          { name: "Cloud Computing for Data Analytics", credits: 4 },
          { name: "Professional Elective - 1", credits: 4 },
          { name: "Foundation Elective", credits: 3 },
          { name: "Professional Elective - 2", credits: 4 },
          { name: "Professional Elective - 3", credits: 4 },
        ],
      },
      {
        semester: 8,
        subjects: [
          { name: "Capstone Project", credits: 6 },
          { name: "Industry Internship", credits: 12 },
        ],
      },
    ],
  },
];

/**
 * Known 0-credit (MC) subjects that should be excluded from SGPA calculation.
 */
const ZERO_CREDIT_SUBJECTS = [
  "environmental studies",
  "constitution of india",
  "essence of indian knowledge tradition",
];

export function isZeroCreditSubject(name: string): boolean {
  const normalized = name.toLowerCase().trim();
  return ZERO_CREDIT_SUBJECTS.some(
    (zc) => normalized.includes(zc) || zc.includes(normalized) || levenshteinClose(normalized, zc)
  );
}

/** Simple check if two strings are close enough (handles typos) */
function levenshteinClose(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 3) return false;
  const shorter = a.length < b.length ? a : b;
  const longer = a.length < b.length ? b : a;
  let mismatches = 0;
  for (let i = 0; i < shorter.length; i++) {
    if (shorter[i] !== longer[i]) mismatches++;
    if (mismatches > 3) return false;
  }
  return true;
}

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

  // Try the specific semester first, then search all semesters
  const semestersToSearch = semester > 0
    ? [branch.semesters.find((s) => s.semester === semester), ...branch.semesters.filter((s) => s.semester !== semester)]
    : branch.semesters;

  const normalized = subjectName.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
  const normalizedNoSpace = normalized.replace(/\s+/g, "");

  for (const sem of semestersToSearch) {
    if (!sem) continue;
    for (const subject of sem.subjects) {
      const subNorm = subject.name.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
      const subNormNoSpace = subNorm.replace(/\s+/g, "");

      // Exact match (ignoring punctuation)
      if (subNormNoSpace === normalizedNoSpace) return subject.credits;

      // One contains the other
      if (subNormNoSpace.includes(normalizedNoSpace) || normalizedNoSpace.includes(subNormNoSpace)) {
        return subject.credits;
      }
    }
  }

  // Partial word match — check if significant words overlap (handles typos)
  const words = normalized.split(/\s+/).filter((w) => w.length >= 3);
  for (const sem of semestersToSearch) {
    if (!sem) continue;
    for (const subject of sem.subjects) {
      const subNorm = subject.name.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
      const subWords = subNorm.split(/\s+/).filter((w) => w.length >= 3);
      
      // Check word-level similarity (tolerant of typos)
      let matchCount = 0;
      for (const w of words) {
        for (const sw of subWords) {
          if (sw.includes(w) || w.includes(sw)) { matchCount++; break; }
          // Handle typos: if words are similar length and share most chars
          if (Math.abs(w.length - sw.length) <= 2 && w.length >= 4) {
            let common = 0;
            for (let i = 0; i < Math.min(w.length, sw.length); i++) {
              if (w[i] === sw[i]) common++;
            }
            if (common >= Math.min(w.length, sw.length) - 2) { matchCount++; break; }
          }
        }
      }
      
      if (matchCount >= 2 && matchCount >= Math.floor(Math.min(words.length, subWords.length) * 0.5)) {
        return subject.credits;
      }
    }
  }

  return 0;
}
