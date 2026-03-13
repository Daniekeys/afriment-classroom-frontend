export type Subject = {
  id: string;
  code: string;
  name: string;
  department: string;
  description: string;
};

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: "subj-001",
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "A foundational course covering programming concepts, algorithms, and computational thinking.",
  },
  {
    id: "subj-002",
    code: "MATH201",
    name: "Calculus I",
    department: "Mathematics",
    description:
      "An introductory course on limits, derivatives, and integrals with applications to real-world problems.",
  },
  {
    id: "subj-003",
    code: "ENG303",
    name: "Advanced Academic Writing",
    department: "English",
    description:
      "A course focused on developing advanced writing skills for academic research and professional communication.",
  },
];
