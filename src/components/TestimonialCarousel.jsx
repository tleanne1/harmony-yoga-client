import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Harmony Yoga changed my life. I feel more grounded, calm, and energized every day.",
    name: "Jenna L.",
  },
  {
    quote: "The instructors are so welcoming and supportive. I love the atmosphere!",
    name: "Alex M.",
  },
  {
    quote: "From day one, I felt like I belonged. This studio is something truly special.",
    name: "Priya S.",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative text-center max-w-2xl mx-auto mt-10 px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-tan/10 p-8 rounded-2xl shadow-card"
        >
          <p className="text-lg text-slate italic mb-4">"{testimonials[index].quote}"</p>
          <h4 className="text-dark font-semibold">{testimonials[index].name}</h4>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialCarousel;