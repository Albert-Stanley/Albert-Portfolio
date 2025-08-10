import type { TFunction } from "i18next";
import { Project } from "../components/ProjectCard";

export const getProjects = (t: TFunction): Project[] => [
    {
      id: "portfolio",
      title: "Portfolio Pessoal",
      description:
        "Site de portfólio moderno construído com React e TypeScript, com modo escuro, internacionalização e animações suaves.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "i18next",
      ],
      githubUrl: "https://github.com/Albert-Stanley/Albert-Portfolio",
      liveUrl: "https://albert-stanley.vercel.app/",
      imageUrl: "/src/assets/portfolio-preview.png",
    },
    {
      id: "github-profile-search",
      title: t("projects.items.githubSearch.title"),
      description: t("projects.items.githubSearch.description"),
      technologies: [
        "React",
        "TypeScript",
        "Tailwind",
        "Tanstack Query",
        "Framer Motion",
      ],
      githubUrl: "https://github.com/Albert-Stanley/busca-perfil-github",
      liveUrl: "https://busca-perfil-github-one.vercel.app/",
      imageUrl: "/src/assets/github_project-preview.png",
    },
    {
      id: "dede-application",
      title: t("projects.items.dedeApp.title"),
      description: t("projects.items.dedeApp.description"),
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Zustand",
        "Tailwind",
      ],
      githubUrl: "https://github.com/Albert-Stanley/DedeApplication",
      imageUrl: "/src/assets/dede-app-preview.png",
    },
    {
      id: "google-auth",
      title: t("projects.items.googleAuth.title"),
      description: t("projects.items.googleAuth.description"),
      technologies: [
        "React",
        "TypeScript",
        "Tailwind",
        "Tanstack Query",
        "Framer Motion",
      ],
      githubUrl: "https://github.com/Albert-Stanley/google-oauth-app",
      liveUrl: "https://google-oauth.expo.app/",
      imageUrl: "/src/assets/oauth-preview.png",
    },
  ];