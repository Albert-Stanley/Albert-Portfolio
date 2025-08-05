import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, MapPin, Coffee } from "lucide-react";
import { useTranslation } from "react-i18next";
import { personalInfo } from "../utils/constants";
import ContactForm from "./ContactForm";

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "/in/albert-stanley",
      href: personalInfo.linkedin,
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "/Albert-Stanley",
      href: personalInfo.github,
      color: "from-gray-700 to-gray-900",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={
                    method.href.startsWith("mailto:") ? "_self" : "_blank"
                  }
                  rel={
                    method.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-blue-200 transition-colors duration-200">
                      {method.label}
                    </h3>
                    <p className="text-blue-200 dark:text-blue-300 text-sm">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 pt-6 border-t border-white/20"
            >
              <div className="flex items-center gap-3 text-blue-200 dark:text-blue-300">
                <MapPin className="w-5 h-5" />
                <span>{t("contact.info.location")}</span>
              </div>
              <div className="flex items-center gap-3 text-blue-200 dark:text-blue-300">
                <Coffee className="w-5 h-5" />
                <span>{t("contact.info.coffee")}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 space-y-6 max-w-md mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t("contact.cta.title")}
              </h3>
              <p className="text-blue-200 dark:text-blue-300 mb-8">
                {t("contact.cta.description")}
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                {t("contact.cta.downloadCV")}
              </motion.a>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full border-2 border-white/30 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {t("contact.cta.sendEmail")}
              </motion.a>
            </div>

            <div className="text-center pt-6">
              <p className="text-blue-200 dark:text-blue-300 text-sm">
                {t("contact.info.availability")}
              </p>
            </div>
          </motion.div>
        </motion.div>

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
