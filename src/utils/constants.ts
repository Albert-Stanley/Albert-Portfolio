import { Project, Skill } from '../types';

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
  { name: 'React', category: 'frontend', icon: '⚛️' },
  { name: 'Next.js', category: 'frontend', icon: '▲' },
  { name: 'TypeScript', category: 'frontend', icon: '📘' },
  { name: 'Tailwind CSS', category: 'frontend', icon: '💨' },
  { name: 'Material UI', category: 'frontend', icon: '🎨' },
  { name: 'Jest', category: 'testing', icon: '🧪' },
  { name: 'React Testing Library', category: 'testing', icon: '🔬' },
  { name: 'Node.js', category: 'backend', icon: '💚' },
  { name: 'C#/.NET', category: 'backend', icon: '🔷' },
  { name: 'Git', category: 'tools', icon: '📝' },
  { name: 'GitHub Actions', category: 'tools', icon: '⚙️' },
  { name: 'Figma', category: 'tools', icon: '🎯' },
];

export const personalInfo = {
  name: 'Albert Stanley',
  title: 'Desenvolvedor Front-End & Engenheiro de Software',
  summary: 'Desenvolvedor apaixonado por criar experiências digitais excepcionais com foco em performance, usabilidade e código limpo. Especializado em React, TypeScript e arquiteturas modernas.',
  email: 'albertstanley927@gmail.com',
  linkedin: 'https://www.linkedin.com/in/albert-stanley/',
  github: 'https://github.com/Albert-Stanley/',
};