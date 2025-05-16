import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";

const classTypes = [
  {
    name: "Gentle Flow",
    desc: "Perfect for beginners and those seeking soft, meditative movement.",
  },
  {
    name: "Vinyasa Power",
    desc: "A high-energy, sweat-inducing flow focused on strength and endurance.",
  },
  {
    name: "Yin Restore",
    desc: "Longer holds, passive poses, and deep relaxation.",
  },
  {
    name: "Prenatal Yoga",
    desc: "Gentle movement designed for expecting mothers.",
  },
  {
    name: "Meditation + Breathwork",
    desc: "Mindful awareness, grounding, and calm.",
  },
];

const Classes = () => {
  return (
    <motion.div
      className="pt-32 pb-20 px-6 md:px-20 bg-ivory min-h-screen text-dark"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <SectionHeader
        title="Class Offerings"
        subtitle="Find the perfect class to support your wellness journey."
      />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
        {classTypes.map((cls, idx) => (
          <div
            key={idx}
            className="bg-tan/10 border border-tan rounded-xl p-6 shadow-card"
          >
            <h3 className="text-xl font-semibold text-dark mb-2">{cls.name}</h3>
            <p className="text-slate">{cls.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Classes;