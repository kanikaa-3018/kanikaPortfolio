import atom from "../assets/atom.png";
import c from "../assets/c.png";
import cssharp from "../assets/cssharp.png";
import css from "../assets/css.png";
import databasefile from "../assets/databasefile.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import gitlab from "../assets/gitlab.png";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.png";
import python from "../assets/python.png";
import html5 from "../assets/html5.png";
import solid from "../assets/solid.png";
import typescript from "../assets/typescript.png";
import redux from "../assets/redux.png"
import express from "../assets/express.png"
import gitnew from "../assets/gitnew.png"

const skillsData = [
  // Frontend
  {
    image: html5,
    link: "#",
    title: "HTML5",
    description: "Markup for the modern web",
  },
  {
    image: css,
    link: "#",
    title: "CSS3",
    description: "Responsive and styled layouts",
  },
  {
    image: js,
    link: "#",
    title: "JavaScript",
    description: "Dynamic client-side interactions",
  },
  {
    image: atom,
    link: "#",
    title: "React.js",
    description: "Component-based UI development",
  },
  {
    image: redux,
    link: "#",
    title: "Redux",
    description: "State management for large apps",
  },
  {
    image: css,
    link: "#",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
  },
  {
    image: typescript,
    link: "#",
    title: "TypeScript",
    description: "Javascript with datatypes",
  },

  // Backend
  {
    image: nodejs,
    link: "#",
    title: "Node.js",
    description: "Backend runtime environment",
  },
  {
    image: express,
    link: "#",
    title: "Express.js",
    description: "Fast backend framework",
  },

  // Databases
  {
    image: databasefile,
    link: "#",
    title: "MongoDB",
    description: "NoSQL document DB",
  },
  {
    image: atom,
    link: "#",
    title: "MySQL",
    description: "Relational database",
  },

  // Dev Tools
  {
    image: git,
    link: "#",
    title: "Git",
    description: "Version control system",
  },
  {
    image: gitnew,
    link: "#",
    title: "GitHub",
    description: "Hosting and collaboration",
  },
  {
    image: gitlab,
    link: "#",
    title: "GitLab",
    description: "CI/CD & version control",
  },

  // Languages
  {
    image: c,
    link: "#",
    title: "C++",
    description: "DSA and competitive programming",
  },
  {
    image: python,
    link: "#",
    title: "Python",
    description: "Scripting and AI/ML",
  },
  {
    image: cssharp,
    link: "#",
    title: "C#",
    description: "Desktop and Unity dev",
  },

  // Web3
  {
    image: solid,
    link: "#",
    title: "Solidity",
    description: "Smart contracts on Ethereum",
  },
  {
    image: gitlab,
    link: "#",
    title: "MetaMask",
    description: "Web3 wallet integration",
  },

  // Design / UI
  { image: figma, link: "#", title: "Figma", description: "UI/UX prototyping" },

  // IDEs / Platforms
  {
    image: atom,
    link: "#",
    title: "VS Code",
    description: "Lightweight code editor",
  },

  // AI / Data Science (Icons commented out earlier — add them locally if needed)
  // { image: tensorflow, link: "#", title: "TensorFlow", description: "Deep learning" },
  // { image: pytorch, link: "#", title: "PyTorch", description: "ML framework" },
  // { image: numpy, link: "#", title: "NumPy", description: "Numerical computing" },
  // { image: pandas, link: "#", title: "Pandas", description: "Data analysis" },

  // Deployment / Hosting
  {
    image: atom,
    link: "#",
    title: "Vercel",
    description: "Frontend deployment",
  },
  {
    image: atom,
    link: "#",
    title: "Firebase",
    description: "Realtime DB & auth",
  },

  // Extra
  { image: atom, link: "#", title: "Postman", description: "API testing tool" },
  { image: atom, link: "#", title: "Docker", description: "Containerization" },
  {
    image: atom,
    link: "#",
    title: "Linux",
    description: "System and CLI usage",
  },
];

export default skillsData;
