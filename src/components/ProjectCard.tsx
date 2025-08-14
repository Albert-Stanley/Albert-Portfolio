import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useTranslation();

  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`group relative rounded-2xl overflow-hidden shadow-2xl ${
              isReversed ? "lg:order-last" : ""
            }`}
          >
            <a
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
            >
              <img
                src={project.imageUrl}
                alt={`Imagem do projeto ${project.title}`}
                className="w-full h-auto aspect-[4/3] object-cover object-center transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <ExternalLink className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" />
              </div>
            </a>
          </motion.div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold shadow-md
            transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                <span>{t("projects.viewLive")}</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-lg font-semibold shadow-md
          transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 hover:shadow-lg"
            >
              <FaGithub className="w-5 h-5" />
              <span>{t("projects.viewCode")}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
