import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { skills } from "../utils/constants";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);



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
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content with enhanced styling - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction text */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {t("about.description1")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {t("about.description2")}
              </motion.p>
            </div>

            
          </motion.div>

          {/* Skills Grid - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t("about.skills.title")}
              </h3>
           
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + index * 0.05,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="relative bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-center space-y-2">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-xs group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {skill.name}
                    </h4>
                  </div>

                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap z-10 shadow-lg"
                    >
                      {skill.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900 dark:border-t-gray-700" />
                    </motion.div>
                  )}
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
