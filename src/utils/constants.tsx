import { Project, Skill } from "../types";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaLinux,
  FaFigma,
  FaJira,
  FaTrello,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpo,
  SiPostgresql,
  SiSpringboot,
  SiPostman,
  SiZod,
  SiNpm,
  SiJest,
  SiCypress,
  SiGraphql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md"; // JWT/OAuth
import { BsBoxes } from "react-icons/bs"; // Arquitetura BFF
import { GiTeamIdea } from "react-icons/gi"; // Scrum/Kanban

export const personalInfo = {
  name: "Albert Stanley",
  title: "Desenvolvedor Front-End & Engenheiro de Software",
  summary:
    "Desenvolvedor apaixonado por criar experiências digitais excepcionais com foco em performance, usabilidade e código limpo. Especializado em React, TypeScript e arquiteturas modernas.",
  email: "albertstanley927@gmail.com",
  linkedin: "https://www.linkedin.com/in/albert-stanley/",
  github: "https://github.com/Albert-Stanley/",
};

export const projects: Project[] = [
  {
    id: "github-profile-search",
    title: "GitHub Profile Search",
    description:
      "Aplicação que consome a API do GitHub para buscar perfis, com tratamento de erros e interface reativa.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Tanstack Query",
      "Framer Motion",
    ],
    type: "web",
    githubUrl: "https://github.com/Albert-Stanley",
  },
  {
    id: "dede-application",
    title: "DedeApplication",
    description:
      "Aplicativo multiplataforma (iOS/Android) para gestão de dados de saúde, focado em performance e UI/UX.",
    technologies: ["React Native", "Expo", "TypeScript", "Zustand", "Tailwind"],
    type: "mobile",
    githubUrl: "https://github.com/Albert-Stanley",
  },
  {
    id: "google-auth-expo",
    title: "Autenticação Google com Expo",
    description:
      "Solução de autenticação com Google OAuth 2.0 usando arquitetura BFF (Backend-for-Frontend).",
    technologies: ["React Native", "Expo", "TypeScript", "JWT", "OAuth 2.0"],
    type: "mobile",
    githubUrl: "https://github.com/Albert-Stanley",
  },
];

export const skills: Skill[] = [
  // FRONT-END
  {
    name: "React",
    category: "frontend",
    icon: <FaReact className="text-blue-500" />,
  },
  {
    name: "React Native",
    category: "frontend",
    icon: <FaReact className="text-blue-400" />,
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: <SiNextdotjs className="dark:text-white text-black" />,
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    name: "Expo",
    category: "frontend",
    icon: <SiExpo className="dark:text-white text-black" />,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: <SiTailwindcss className="text-cyan-500" />,
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: <FaCss3Alt className="text-blue-500" />,
  },

  {
    name: "Node.js",
    category: "backend",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    name: "Java",
    category: "backend",
    icon: <FaJava className="text-red-600" />,
  },
  {
    name: "SQL",
    category: "backend",
    icon: <SiPostgresql className="text-indigo-500" />,
  },
  {
    name: "GraphQL",
    category: "backend",
    icon: <SiGraphql className="text-pink-500" />,
  },
  {
    name: "APIs RESTful",
    category: "backend",
    icon: <TbApi className="text-blue-500" />,
  },

  {
    name: "Git",
    category: "tools",
    icon: <FaGitAlt className="text-orange-600" />,
  },
  { name: "Npm", category: "tools", icon: <SiNpm className="text-red-500" /> },
  {
    name: "Docker",
    category: "tools",
    icon: <FaDocker className="text-blue-500" />,
  },
  {
    name: "Linux",
    category: "tools",
    icon: <FaLinux className="text-yellow-500" />,
  },
  {
    name: "Postman",
    category: "tools",
    icon: <SiPostman className="text-orange-500" />,
  },

  {
    name: "Jest",
    category: "testing",
    icon: <SiJest className="text-red-600" />,
  },
];
