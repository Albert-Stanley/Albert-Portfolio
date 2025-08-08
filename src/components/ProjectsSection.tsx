import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import ProjectCard, { Project } from "./ProjectCard";   

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

 
  const projects: Project[] = [
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
      imageUrl: "/images/portfolio.png",  
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
      imageUrl: "/images/github-search.png",  
    },
    {
      id: "dede-application",
      title: t("projects.items.dedeApp.title"),
      description: t("projects.items.dedeApp.description"),
      technologies: ["React Native", "Expo", "TypeScript", "Zustand", "Tailwind"],
      githubUrl: "https://github.com/Albert-Stanley/DedeApplication",
      imageUrl: "/images/dede-app.png",   
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
      imageUrl: "https://placehold.co/800x600/e2e8f0/334155?text=Projeto",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-900/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {t("projects.ctaText")}
          </p>
          <motion.a
            href="https://github.com/Albert-Stanley"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-gray-800 text-white rounded-full font-semibold text-lg hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors duration-300 shadow-lg"
          >
            <Github className="w-6 h-6" />
            <span>{t("projects.viewMore")}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;