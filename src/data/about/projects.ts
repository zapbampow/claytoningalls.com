export type Project = {
  title: string;
  shortDescription: string;
  longDescription: string[];
  filename: string;
  img: {
    url: string;
    alt: string;
  };
  links: {
    text: string;
    url: string;
    icon: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "Color Validator",
    shortDescription: "Validate CSS colors in JS",
    longDescription: [
      `While working on another project I needed a way to check whether some text was a valid CSS color. I was working with a variety of colors, including oklch. I couldn't find anything that included oklch in their validations.`,
      `"Just a little regex should do," I thought. I ended up going down a rabbit hole of all the variations for each type of CSS color: named, hex, rgb, hsl, lch, etc. This was the product of that rabbit hole.`,
    ],
    filename: "color-validator",
    img: {
      url: "https://picsum.photos/200",
      alt: "color validator in use",
    },
    links: [
      {
        text: "Github",
        url: "https://www.github.com",
        icon: "brand-github",
      },
      {
        text: "NPM",
        url: "https://www.npmjs.com",
        icon: "brand-npm",
      },
    ],
  },
  {
    title: "Board game data tools",
    shortDescription: "Analyze your recorded plays from BoardGameGeek",
    longDescription: [
      `I'm an avid board gamer. Since 2009 I've tried to record every time I've played a board or card game using tools at BoardGameGeek. Over time I've included who I played with, who won, where we were, and other information.`,
      `I wanted a way to answer the question, "When I play with my family, who wins the most frequently?" There was no easy way to answser a question like that in BoardGameGeek.`,
      `However, they do have an API. So I went about building a tool that anyone can use to ask all kinds of questions based on their tracked plays.`,
      `It also game me an opportunity to explore some functional programming techniques I had been reading about at the time at James Sinclair's website.`,
    ],
    filename: "bg-data-tools",
    img: {
      url: "https://picsum.photos/600",
      alt: "board game data tools in use",
    },
    links: [
      {
        text: "Github",
        url: "https://www.github.com",
        icon: "brand-github",
      },
      {
        text: "NPM",
        url: "https://www.npmjs.com",
        icon: "brand-npm",
      },
    ],
  },
];
