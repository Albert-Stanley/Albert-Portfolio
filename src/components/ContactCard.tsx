import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { TFunction } from "i18next";

interface ContactMethod {
  icon: React.ReactElement;
  label: string;
  value: string;
  action: () => void;
  color: string;
  hoverColor: string;
}

interface ContactCardProps {
  method: ContactMethod;
  index: number;
  emailCopied: boolean;
  t: TFunction<"translation", undefined>;
}

const ContactCard: React.FC<ContactCardProps> = ({
  method,
  index,
  emailCopied,
  t,
}) => {
  const isEmailCard = method.label === "Email";

  return (
    <motion.div
      key={method.label}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -6 }}
      whileTap={{ scale: 0.95 }}
      onClick={method.action}
      className="group cursor-pointer w-full max-w-[280px]"
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 relative overflow-hidden h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
        />

        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${method.color} ${method.hoverColor} rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl relative`}
        >
          {React.cloneElement(method.icon, {
            className: "w-8 h-8 sm:w-12 sm:h-12",
          })}

          {isEmailCard && emailCopied && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-gray-800"
            >
              <Check className="w-3 h-3 text-white" />
            </motion.div>
          )}
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-blue-200 transition-colors duration-200">
            {method.label}
          </h3>
          <p className="text-blue-200 dark:text-blue-300 text-xs sm:text-sm group-hover:text-white transition-colors duration-200 min-h-[40px] flex items-center">
            {isEmailCard
              ? emailCopied
                ? t("contact.contactcard.email_copiado")
                : t("contact.contactcard.email")
              : method.value}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
