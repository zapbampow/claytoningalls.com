export type Role = {
  title: string;
  company: string;
  date: string;
  url: string;
  description: { type: string; text: string }[];
  technology?: string[];
};
