import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <Listbox value={currentLanguage.code} onChange={changeLanguage}>
      <div className="relative">
        <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm border border-gray-200 dark:border-gray-700">
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="block truncate text-gray-900 dark:text-white">
              {currentLanguage.flag} {currentLanguage.name}
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 mt-1 max-h-60 w-48 overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50 border border-gray-200 dark:border-gray-700">
            {languages.map((language) => (
              <Listbox.Option
                key={language.code}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-4 pr-4 ${
                    active 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                      : 'text-gray-900 dark:text-gray-100'
                  }`
                }
                value={language.code}
              >
                {({ selected }) => (
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{language.flag}</span>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {language.name}
                    </span>
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default LanguageSelector;