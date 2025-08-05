import React from "react";
import { motion } from "framer-motion";
import { Code, Heart, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: t("about.highlights.cleanCode.title"),
      description: t("about.highlights.cleanCode.description"),
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t("about.highlights.uxui.title"),
      description: t("about.highlights.uxui.description"),
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t("about.highlights.performance.title"),
      description: t("about.highlights.performance.description"),
    },
  ];

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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />

              {/* Photo placeholder */}
              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl aspect-square flex items-center justify-center shadow-2xl">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">AS</span>
                  </div>
                  <p className="text-sm">Foto do perfil</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("about.description1")}
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("about.description2")}
            </p>

            {/* Highlights */}
            <div className="grid gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
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
