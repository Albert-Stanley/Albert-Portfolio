import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'sending' | 'success' | 'error';
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'sending', message: t('contact.form.sending') });

    try {
      // Configure EmailJS with your service ID, template ID, and user ID
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Albert Stanley',
        },
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      );

      setStatus({ type: 'success', message: t('contact.form.success') });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: t('contact.form.error') });
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-6 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Conte-me sobre seu projeto..."
          />
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={status.type === 'sending'}
        whileHover={{ scale: status.type === 'sending' ? 1 : 1.02 }}
        whileTap={{ scale: status.type === 'sending' ? 1 : 0.98 }}
        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status.type === 'sending' ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <Send className="w-5 h-5" />
          </motion.div>
        ) : (
          <Send className="w-5 h-5" />
        )}
        {status.type === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
      </motion.button>

      {status.type !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 p-4 rounded-lg ${
            status.type === 'success'
              ? 'bg-green-500/20 text-green-100 border border-green-500/30'
              : status.type === 'error'
              ? 'bg-red-500/20 text-red-100 border border-red-500/30'
              : 'bg-blue-500/20 text-blue-100 border border-blue-500/30'
          }`}
        >
          {status.type === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : status.type === 'error' ? (
            <AlertCircle className="w-5 h-5" />
          ) : null}
          <span className="text-sm">{status.message}</span>
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;