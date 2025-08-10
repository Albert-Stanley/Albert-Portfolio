import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import { getProjects } from "../data/projects";  

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  const projects = getProjects(t);

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
            <FaGithub className="w-6 h-6" />
            <span>{t("projects.viewMore")}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
