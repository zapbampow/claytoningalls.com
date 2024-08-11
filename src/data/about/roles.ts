import type { Role } from "@components/about/Role.ts";

export const roles: Role[] = [
  {
    title: "Developer",
    company: "Flocknote",
    date: "2022 - Present",
    url: "https://flocknote.com",
    description: [
      {
        type: "summary",
        text: "I build complex, but easy to use interfaces for a leading church management software company.",
      },
      {
        type: "detail",
        text: "While I work throughout our codebase, I regularly work on payments related features and get tasked with jumping in for emergency situations.",
      },
    ],
    technology: [
      "Javascript",
      "React",
      "Styled Components",
      "Framer Motion",
      "React Query",
      "React Hook Form",
      "React Testing Library",
    ],
  },
  {
    title: "Senior Application Developer",
    company: "NCF",
    date: "2021 - 2022",
    url: "https://ncfgiving.com",
    description: [
      {
        type: "detail",
        text: "Massively improved developer experience by refactoring legacy software to bundle Javascript with webpack, making it easier to develop and navigate the codebase",
      },
      {
        type: "detail",
        text: "Improved mobile responsiveness for the primary client facing application",
      },
      {
        type: "detail",
        text: "Built proof-of-concent app for moving a legacy portal application from jQuery to Remix",
      },
    ],
    technology: ["Javascript", "React", "Remix", "Webpack"],
  },
  {
    title: "Software Developer",
    company: "With One Vision",
    date: "2018 - 2021",
    url: "https://withone.vision",
    description: [
      {
        type: "summary",
        text: "Designed, developed, and maintained church management software.",
      },
      {
        type: "detail",
        text: "Replaced a legacy application with React and Material UI to manage the writing, approving, and sending of 1,000,000 texts and emails per year.",
      },
      {
        type: "detail",
        text: "Designed and built an internal staff site for the sharing and requesting of resources with React and Form.io",
      },
      {
        type: "detail",
        text: "Led the implementation of notifications and universal links in our React Native app.",
      },
      {
        type: "detail",
        text: "Partnered with a coworker to develop the table structures and API endpoints for a contact management feature in our mobile app using React and Knex.",
      },
      {
        type: "detail",
        text: "Designed and built a public site for downloading resources for church leaders",
      },
      {
        type: "detail",
        text: "Oversaw site maintainence, bug fixes, and feature additions for 12stone.com",
      },
    ],
    technology: [
      "React",
      "NodeJS",
      "SQL",
      "GraphQL",
      "NextJS",
      "Docusaurus",
      "React Native",
      "Knex",
      "Material UI",
      "Tailwind",
      "Bootstrap",
      "Bulma",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Georgia Tech Coding Bootcamp",
    date: "2018 - 2019",
    url: "https://pe.gatech.edu/programs/boot-camps",
    description: [
      {
        type: "summary",
        text: "Assisted students in learning full stack web development technologies, including HTML, CSS, JavaScript, Node.js, Express, MySQL, and React.",
      },
    ],
    technology: [],
  },
];
