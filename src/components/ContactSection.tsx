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
    } catch {
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
      icon: <Mail className="w-10 h-10 sm:w-12 sm:h-12" />,
      label: "Email",
      value: personalInfo.email,
      action: copyEmailToClipboard,
      color: "from-red-500 to-pink-500",
      hoverColor: "hover:from-red-400 hover:to-pink-400",
    },
    {
      icon: <Linkedin className="w-10 h-10 sm:w-12 sm:h-12" />,
      label: "LinkedIn",
      value: t("contact.contactcard.linkedin"),
      action: () => window.open(personalInfo.linkedin, "_blank"),
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-500 hover:to-blue-600",
    },
    {
      icon: <Github className="w-10 h-10 sm:w-12 sm:h-12" />,
      label: "GitHub",
      value: t("contact.contactcard.github"),
      action: () => window.open(personalInfo.github, "_blank"),
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-600 hover:to-gray-800",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Partículas animadas */}
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
            }}
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-wide">
            {t("contact.title") || "CONTACT"}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4" />
          <p className="mt-4 text-blue-200 max-w-xl mx-auto text-sm sm:text-base">
            {t("contact.subtitle") ||
              "You can contact me through any of the options below. I’ll respond as soon as possible."}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {contactMethods.map((method) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -6 }}
                whileTap={{ scale: 0.95 }}
                onClick={method.action}
                className="group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:bg-white/20 transition-all duration-300 text-center relative overflow-hidden max-w-[280px] sm:max-w-none mx-auto">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl sm:rounded-2xl`}
                  />
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${method.color} ${method.hoverColor} rounded-lg sm:rounded-xl flex items-center justify-center text-white mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl relative`}
                  >
                    {method.icon}
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
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 group-hover:text-blue-200 transition-colors duration-200">
                    {method.label}
                  </h3>
                  <p className="text-blue-200 dark:text-blue-300 text-xs sm:text-sm group-hover:text-white transition-colors duration-200">
                    {method.label === "Email"
                      ? emailCopied
                        ? t("contact.contactcard.email_copiado")
                        : t("contact.contactcard.email")
                      : method.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rodapé */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-6 border-t border-white/20"
        >
          <p className="text-blue-200 dark:text-blue-300 text-sm sm:text-base">
            {t("contact.footer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
