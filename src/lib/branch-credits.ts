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
          { name: "Basic Electronics", credits: 3 },
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
          { name: "Basic Electronics", credits: 3 },
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
          { name: "Basic Electronics", credits: 3 },
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
          { name: "Basic Electronics", credits: 3 },
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
    if (subNorm === normalized || subNorm.includes(normalized) || normalized.includes(subNorm)) {
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
