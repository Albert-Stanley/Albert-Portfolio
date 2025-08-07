import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { personalInfo } from "../utils/constants";

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      // Fallback para navegadores que não suportam clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = personalInfo.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-12 h-12" />,
      label: "Email",
      value: personalInfo.email,
      action: copyEmailToClipboard,
      color: "from-red-500 to-pink-500",
      hoverColor: "hover:from-red-400 hover:to-pink-400",
    },
    {
      icon: <Linkedin className="w-12 h-12" />,
      label: "LinkedIn",
      value: "Conectar",
      action: () => window.open(personalInfo.linkedin, "_blank"),
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-500 hover:to-blue-600",
    },
    {
      icon: <Github className="w-12 h-12" />,
      label: "GitHub",
      value: "Ver perfil",
      action: () => window.open(personalInfo.github, "_blank"),
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-600 hover:to-gray-800",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 text-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 1.2,
            }}
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Contact Methods - 3 large icons centered */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                onClick={method.action}
                className="group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 text-center relative overflow-hidden">
                  {/* Hover effect background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${method.color} ${method.hoverColor} rounded-xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl relative`}
                  >
                    {method.icon}

                    {/* Email copy indicator */}
                    {method.label === "Email" && emailCopied && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <Check className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-200">
                    {method.label}
                  </h3>

                  <p className="text-blue-200 dark:text-blue-300 text-sm group-hover:text-white transition-colors duration-200">
                    {method.label === "Email"
                      ? emailCopied
                        ? "Email copiado!"
                        : "Clique para copiar"
                      : method.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <p className="text-blue-200 dark:text-blue-300">
            {t("contact.footer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
