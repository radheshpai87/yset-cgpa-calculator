export interface SubjectPreset {
  name: string;
  credits: number;
}

export interface SemesterPreset {
  name: string;
  semester: number;
  subjects: SubjectPreset[];
  totalCredits: number;
}

export const semesterPresets: SemesterPreset[] = [
  {
    name: "Semester 1",
    semester: 1,
    totalCredits: 22,
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
    name: "Semester 2",
    semester: 2,
    totalCredits: 21,
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
    name: "Semester 3",
    semester: 3,
    totalCredits: 22,
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
];
