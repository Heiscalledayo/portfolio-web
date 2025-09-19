import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { useTheme } from './ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success('Message sent successfully!');
        form.current?.reset();
        setLoading(false);
      })
      .catch((error) => {
        toast.error('Failed to send message. Try again.');
        console.error('EmailJS Error:', error);
        setLoading(false);
      });
  };

  const inputClasses = `
    border p-3 rounded-md bg-transparent outline-none transition
    focus:ring-2 focus:ring-[#ff4c60] focus:border-[#ff4c60]
    ${theme === 'light' ? 'border-gray-400 text-black' : 'border-gray-300 text-white'}
  `;

  return (
    <section
      id="contact"
      className={`${theme === 'light' ? 'bg-gray-50 text-black' : 'bg-gray-900 text-white'} py-20 px-4`}
    >
      <Toaster position="top-center" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: 'DM Sans' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          📬 Let’s Get In Touch
        </motion.h2>

        <motion.p
          className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} mb-10 max-w-xl mx-auto`}
          style={{ fontFamily: 'Inconsolata' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Got a project or just want to say hi? Fill the form below and I’ll get back to you soon.
        </motion.p>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className={`grid gap-6 text-left rounded-2xl p-6 shadow-md border
            ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'}
          `}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className={inputClasses}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          />
          <motion.input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className={inputClasses}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className={inputClasses}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            disabled={loading}
            className={`${
              theme === 'light'
                ? 'bg-black text-white hover:bg-gray-800'
                : 'bg-white text-black hover:bg-gray-200'
            } py-3 px-6 rounded-full transition flex items-center justify-center`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.form>

        {/* 📧 Direct Email */}
        <motion.p
          className={`text-sm mt-8 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Or email me directly at{' '}
          <a
            href="mailto:ayomidecoder@gmail.com"
            className="text-[#ff4c60] font-semibold"
          >
            ayomidecoder@gmail.com
          </a>
        </motion.p>

        {/* 🌐 Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/yourusername" target="_blank" className="text-2xl hover:text-[#ff4c60] transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-2xl hover:text-[#ff4c60] transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" className="text-2xl hover:text-[#ff4c60] transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
