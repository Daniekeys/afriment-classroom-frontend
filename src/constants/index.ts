export const DEPARTMENT = ["CS", "Math", "English", "History"];

export const DEPARTMENT_OPTIONS = [
  ...DEPARTMENT.map((dept) => ({ value: dept, label: dept })),
];
