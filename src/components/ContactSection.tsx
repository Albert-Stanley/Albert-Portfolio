import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { personalInfo } from "../utils/constants";
import ContactCard from "./ContactCard";

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
      icon: <Mail />,
      label: "Email",
      value: personalInfo.email,
      action: copyEmailToClipboard,
      color: "from-red-500 to-pink-500",
      hoverColor: "hover:from-red-400 hover:to-pink-400",
    },
    {
      icon: <Linkedin />,
      label: "LinkedIn",
      value: t("contact.contactcard.linkedin"),
      action: () => window.open(personalInfo.linkedin, "_blank"),
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-500 hover:to-blue-600",
    },
    {
      icon: <FaGithub />,
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
            transition={{ duration: 6, repeat: Infinity, delay: i * 1.2 }}
            style={{ left: `${10 + i * 20}%`, top: `${20 + i * 15}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto py-20">
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

          <div className="flex flex-wrap justify-center items-stretch gap-6 sm:gap-8">
            {contactMethods.map((method, index) => (
              <ContactCard
                key={method.label}
                method={method}
                index={index}
                emailCopied={emailCopied}
                t={t}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative px-4 sm:px-6 lg:px-8 pb-8 pt-4 border-t border-white/20 bg-gradient-to-t from-gray-900/50 to-transparent"
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
