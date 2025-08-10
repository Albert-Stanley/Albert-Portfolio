import { Project, Skill } from '../types'; 

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaSass,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiVite,
  SiJest,
  SiCypress,
  SiExpo,
  SiReact
} from 'react-icons/si';

export const personalInfo = {
  name: 'Albert Stanley',
  title: 'Desenvolvedor Front-End & Engenheiro de Software',
  summary: 'Desenvolvedor apaixonado por criar experiências digitais excepcionais com foco em performance, usabilidade e código limpo. Especializado em React, TypeScript e arquiteturas modernas.',
  email: 'albertstanley927@gmail.com',
  linkedin: 'https://www.linkedin.com/in/albert-stanley/',
  github: 'https://github.com/Albert-Stanley/',
};

export const projects: Project[] = [
  {
    id: 'github-profile-search',
    title: 'GitHub Profile Search',
    description: 'Aplicação que consome a API do GitHub para buscar perfis, com tratamento de erros e interface reativa.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Tanstack Query', 'Framer Motion'],
    type: 'web',
    githubUrl: 'https://github.com/Albert-Stanley',
  },
  {
    id: 'dede-application',
    title: 'DedeApplication',
    description: 'Aplicativo multiplataforma (iOS/Android) para gestão de dados de saúde, focado em performance e UI/UX.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Tailwind'],
    type: 'mobile',
    githubUrl: 'https://github.com/Albert-Stanley',
  },
  {
    id: 'google-auth-expo',
    title: 'Autenticação Google com Expo',
    description: 'Solução de autenticação com Google OAuth 2.0 usando arquitetura BFF (Backend-for-Frontend).',
    technologies: ['React Native', 'Expo', 'TypeScript', 'JWT', 'OAuth 2.0'],
    type: 'mobile',
    githubUrl: 'https://github.com/Albert-Stanley',
  },
];

export const skills: Skill[] = [
  { name: 'React', category: 'frontend', icon: <FaReact className="text-blue-500" /> },
  { name: 'Next.js', category: 'frontend', icon: <SiNextdotjs className="dark:text-white text-black" /> },
  { name: 'TypeScript', category: 'frontend', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'JavaScript', category: 'frontend', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'Tailwind CSS', category: 'frontend', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Sass', category: 'frontend', icon: <FaSass className="text-pink-500" /> },
  { name: 'Vite', category: 'frontend', icon: <SiVite className="text-purple-600" /> },
  { name: 'React Native', category: 'mobile', icon: <SiReact className="text-blue-500" /> },
  { name: 'Expo', category: 'mobile', icon: <SiExpo className="dark:text-white text-black" /> },
  { name: 'Node.js', category: 'backend', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Prisma', category: 'backend', icon: <SiPrisma className="text-teal-500" /> },
  { name: 'PostgreSQL', category: 'backend', icon: <SiPostgresql className="text-blue-700" /> },
  { name: 'Jest', category: 'testing', icon: <SiJest className="text-red-600" /> },
  { name: 'Cypress', category: 'testing', icon: <SiCypress className="dark:text-gray-300 text-gray-800" /> },
  { name: 'Git', category: 'tools', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'Docker', category: 'tools', icon: <FaDocker className="text-blue-500" /> },
  { name: 'Figma', category: 'tools', icon: <FaFigma className="text-purple-500" /> },
];