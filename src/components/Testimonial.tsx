import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Adeyemi",
    role: "CEO, Adeyemi Tech",
    feedback:
      "Working with Ayomide was an absolute pleasure. He transformed our idea into a fully functional platform with clean code and great UI design.",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Founder, LearnFast",
    feedback:
      "Professional, creative, and extremely reliable. Delivered our project ahead of schedule and exceeded expectations.",
    avatar: "https://i.pravatar.cc/100?img=2",
    rating: 5,
  },
  {
    name: "Chinedu Okafor",
    role: "Product Manager, NaijaStore",
    feedback:
      "Excellent communication and top-notch development skills. Highly recommend for any fullstack project.",
    avatar: "https://i.pravatar.cc/100?img=3",
    rating: 5,
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-14 text-gray-900 dark:text-white"
          style={{ fontFamily: "Cascadia Mono" }}
        >
          💬 What Clients Say
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-5 ring-4 ring-gray-100 dark:ring-gray-700"
              />

              <p className="text-gray-600 dark:text-gray-300 italic mb-5">
                “{t.feedback}”
              </p>

              <div className="flex justify-center mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.158 3.57a1 1 0 00.95.69h3.746c.969 0 1.371 1.24.588 1.81l-3.03 2.2a1 1 0 00-.364 1.118l1.158 3.57c.3.921-.755 1.688-1.54 1.118l-3.03-2.2a1 1 0 00-1.176 0l-3.03 2.2c-.784.57-1.838-.197-1.539-1.118l1.158-3.57a1 1 0 00-.364-1.118l-3.03-2.2c-.783-.57-.38-1.81.588-1.81h3.746a1 1 0 00.95-.69l1.158-3.57z" />
                  </svg>
                ))}
              </div>

              <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                {t.name}
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {t.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
