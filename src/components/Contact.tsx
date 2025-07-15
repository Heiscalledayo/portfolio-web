import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <section id="contact" className="bg-white text-black py-15 px-4">
      <Toaster position="top-center" />

      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: 'Cascadia Mono' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📬 Let's Get In Touch
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-8"
          style={{ fontFamily: 'Inconsolata' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Got a project or just want to say hi? Fill the form below and I’ll get back to you soon.
        </motion.p>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-6 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="border p-3 rounded-md"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="border p-3 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="border p-3 rounded-md"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition flex items-center justify-center"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
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
          </button>
        </motion.form>

        <motion.p
          className="text-sm text-gray-500 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Or email me directly at:{' '}
          <a
            href="mailto:ayomidecoder@gmail.com"
            className="text-blue-600 font-semibold"
          >
            ayomidecoder@gmail.com
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
