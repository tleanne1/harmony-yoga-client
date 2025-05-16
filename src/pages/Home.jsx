import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import TestimonialCarousel from "../components/TestimonialCarousel";
import heroImage from "../assets/hero-yoga.jpg";

const Home = () => {
  const classPreview = [
    {
      title: "Gentle Flow",
      desc: "Ideal for beginners to connect with breath and movement.",
    },
    {
      title: "Vinyasa Power",
      desc: "A dynamic and energizing practice to build strength and focus.",
    },
    {
      title: "Yin Restore",
      desc: "Slow-paced and meditative, perfect for winding down.",
    },
  ];

  return (
    <motion.div
      className="bg-ivory text-dark"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      {/* HERO */}
      <motion.section
        className="relative text-center bg-cover bg-center bg-no-repeat px-6 md:px-20 py-32"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-dark/50 z-0" />
        <div className="relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-display font-bold text-ivory mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to Harmony Yoga
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-ivory max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Breathe. Stretch. Grow. Join our peaceful community and discover the
            benefits of yoga for all levels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/classes"
              className="inline-block px-8 py-3 bg-ivory text-dark text-lg rounded-full hover:bg-tan transition"
            >
              View Classes
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* WHY YOGA */}
      <section className="bg-tan py-20 px-6 md:px-20">
        <SectionHeader
          title="Why Practice Yoga?"
          subtitle="More than movement—yoga offers clarity, balance, and connection. Here’s why our students love the journey."
        />
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10">
          {[
            {
              title: "Mindfulness",
              text: "Reduce stress through mindful breath and movement.",
            },
            {
              title: "Flexibility",
              text: "Improve posture, mobility, and balance gently.",
            },
            {
              title: "Community",
              text: "A supportive space where growth, not perfection, is the goal.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-ivory p-8 rounded-2xl shadow-card text-center"
            >
              <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
              <p className="text-slate text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLASSES PREVIEW */}
      <section className="py-20 px-6 md:px-20 bg-ivory">
        <SectionHeader
          title="Explore Our Classes"
          subtitle="Support every stage of your yoga journey."
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {classPreview.map((cls, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-tan/10 border border-tan p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">{cls.title}</h3>
              <p className="text-slate text-base">{cls.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/classes"
            className="px-6 py-2 bg-dark text-ivory rounded-full hover:bg-brown transition"
          >
            View All Classes
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 md:px-20 bg-tan/10">
        <SectionHeader
          title="What Our Students Say"
          subtitle="Real stories from our growing yoga community."
        />
        <TestimonialCarousel />
      </section>

      {/* CTA */}
      <section className="bg-brown text-white text-center py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Begin Your Journey Today
          </h3>
          <p className="mb-6 text-base md:text-lg">
            Join our next beginner class or drop in anytime—your mat is waiting.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-ivory text-dark rounded-full hover:bg-tan transition"
          >
            Book Your First Class
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
