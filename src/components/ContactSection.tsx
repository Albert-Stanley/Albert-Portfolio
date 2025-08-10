import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
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
      icon: <FaGithub className="w-10 h-10 sm:w-12 sm:h-12" />,
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
      className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 text-white relative overflow-hidden"
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

      {/* Conteúdo principal */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto py-20">
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

          {/* Cards de contato com layout responsivo */}
          <div className="flex justify-center">
            {/* Layout para telas pequenas (< 630px): horizontal com cards menores */}
            <div className="grid grid-cols-3 gap-3 max-[629px]:flex max-[629px]:justify-center max-[629px]:gap-4 min-[630px]:grid-cols-1 min-[630px]:sm:grid-cols-3 min-[630px]:gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={method.action}
                  className="group cursor-pointer"
                >
                  {/* Card com tamanhos responsivos */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl min-[630px]:rounded-2xl p-3 max-[629px]:p-4 min-[630px]:p-8 hover:bg-white/20 transition-all duration-300 text-center relative overflow-hidden max-[629px]:w-24 max-[629px]:h-24 min-[630px]:max-w-[280px] mx-auto">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl min-[630px]:rounded-2xl`}
                    />

                    {/* Ícone com tamanhos responsivos */}
                    <div
                      className={`max-[629px]:w-8 max-[629px]:h-8 min-[630px]:w-16 min-[630px]:h-16 min-[630px]:sm:w-20 min-[630px]:sm:h-20 bg-gradient-to-r ${method.color} ${method.hoverColor} rounded-lg min-[630px]:rounded-xl flex items-center justify-center text-white mx-auto max-[629px]:mb-1 min-[630px]:mb-4 min-[630px]:sm:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl relative`}
                    >
                      <div className="max-[629px]:text-xs min-[630px]:text-base">
                        {React.cloneElement(method.icon, {
                          className:
                            "max-[629px]:w-4 max-[629px]:h-4 min-[630px]:w-10 min-[630px]:h-10 min-[630px]:sm:w-12 min-[630px]:sm:h-12",
                        })}
                      </div>

                      {method.label === "Email" && emailCopied && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute -top-1 -right-1 max-[629px]:w-3 max-[629px]:h-3 min-[630px]:w-6 min-[630px]:h-6 bg-green-500 rounded-full flex items-center justify-center"
                        >
                          <Check className="max-[629px]:w-2 max-[629px]:h-2 min-[630px]:w-3 min-[630px]:h-3 text-white" />
                        </motion.div>
                      )}
                    </div>

                    {/* Texto apenas para telas maiores */}
                    <div className="max-[629px]:hidden min-[630px]:block">
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

                    {/* Label pequena para telas pequenas */}
                    <div className="min-[630px]:hidden max-[629px]:block">
                      <p className="text-[10px] text-blue-200 font-medium truncate">
                        {method.label === "Email" && emailCopied
                          ? "✓"
                          : method.label.slice(0, 5)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé fixo no final para telas grandes */}
      <motion.div
        initial={{ opacity: 0,  }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative px-4 sm:px-6 lg:px-8 pb-8 pt-4  border-t border-white/20 bg-gradient-to-t from-gray-900/50 to-transparent"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-200 dark:text-blue-300 text-sm sm:text-base">
            {t("contact.footer")}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
