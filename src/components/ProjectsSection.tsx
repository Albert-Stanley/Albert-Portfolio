import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
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
      type: "web" as const,
      githubUrl: "https://github.com/Albert-Stanley/busca-perfil-github",
      liveUrl: "https://busca-perfil-github-one.vercel.app/",
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
      type: "mobile" as const,
      githubUrl: "https://github.com/Albert-Stanley/DedeApplication",
      // liveUrl: "https://your-live-url.com",
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description:
        "Site de portfólio moderno construído com React e TypeScript, com modo escuro, internacionalização e animações suaves.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "i18next",
      ],
      type: "web" as const,
      githubUrl: "https://github.com/Albert-Stanley/Albert-Portfolio",
      liveUrl: "https://albert-stanley.vercel.app/",
    },
  ];
  const ProjectCard: React.FC<{
    project: (typeof projects)[0];
    index: number;
  }> = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
    >
      <div className="grid lg:grid-cols-2 gap-0 min-h-[400px]">
        {/* Content */}
        <div className="p-8 flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white">
              {project.type === "web" ? (
                <Monitor className="w-6 h-6" />
              ) : (
                <Smartphone className="w-6 h-6" />
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">
                {project.type === "web"
                  ? t("projects.items.githubSearch.type")
                  : t("projects.items.dedeApp.type")}
              </p>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {t("projects.technologies")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              {t("projects.viewCode")}
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                {t("projects.viewLive")}
              </motion.a>
            )}
          </div>
        </div>

        {/* Mockup */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center p-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/5 dark:to-purple-400/5" />

          {project.type === "web" ? (
            // MacBook Mockup
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="relative perspective-1000"
            >
              <div className="bg-gray-800 rounded-t-lg p-2 w-80">
                <div className="flex gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="bg-white rounded h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />
                  <div className="relative text-center space-y-4 p-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg">
                      {project.title.substring(0, 2)}
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-300 rounded w-full" />
                      <div className="h-2 bg-gray-200 rounded w-3/4 mx-auto" />
                      <div className="h-2 bg-gray-200 rounded w-1/2 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 h-4 rounded-b-lg w-80" />
            </motion.div>
          ) : (
            // iPhone Mockup
            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="bg-gray-900 rounded-3xl p-2 w-48">
                <div className="bg-black rounded-3xl p-4 relative">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full" />

                  <div className="bg-white rounded-2xl h-80 mt-4 flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
                    <div className="relative flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                        {project.title.substring(0, 2)}
                      </div>
                      <div className="space-y-2 w-full">
                        <div className="h-2 bg-gray-300 rounded w-full" />
                        <div className="h-2 bg-gray-200 rounded w-4/5 mx-auto" />
                        <div className="h-2 bg-gray-200 rounded w-3/5 mx-auto" />
                      </div>
                      <div className="flex gap-2 w-full">
                        <div className="flex-1 h-8 bg-blue-500 rounded" />
                        <div className="flex-1 h-8 bg-gray-200 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-8">
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
          className="text-center mt-16"
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-full font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            {t("projects.viewMore")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
