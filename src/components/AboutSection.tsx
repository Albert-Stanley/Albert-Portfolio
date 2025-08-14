import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { skills } from "../utils/constants";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("about.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              {t("about.smallTitle")}
            </h3>

            <div className="space-y-6 flex-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed text-justify"
              >
                {t("about.description1")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed text-justify"
              >
                {t("about.description2")}
              </motion.p>
            </div>
          </motion.div>

          {/* Coluna Direita - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              {t("about.skills.title")}
            </h3>

            <div className="grid grid-cols-4 gap-5 flex-1">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-200">
                    {skill.icon}
                  </div>
                  <h4 className="mt-2 font-medium text-gray-900 dark:text-white text-xs sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 text-center">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
