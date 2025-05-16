import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";

const instructors = [
  {
    name: "Luna Ray",
    title: "Founder / Lead Instructor",
    bio: "Luna specializes in Vinyasa and Yin yoga. Her focus is on mindfulness and alignment.",
  },
  {
    name: "Kai Moon",
    title: "Breathwork & Meditation Guide",
    bio: "Kai brings deep calm through guided meditations and breath-focused sessions.",
  },
  {
    name: "Zara Bloom",
    title: "Prenatal & Restorative Yoga",
    bio: "Zara supports mothers with gentle flow and restorative practices tailored for every trimester.",
  },
];

const Instructors = () => {
  return (
    <motion.div
      className="pt-32 pb-20 px-6 md:px-20 bg-ivory min-h-screen text-dark"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <SectionHeader
        title="Meet the Instructors"
        subtitle="Our certified and compassionate teachers guide each class with care and skill."
      />
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
        {instructors.map((ins, idx) => (
          <div
            key={idx}
            className="bg-tan/10 p-6 rounded-xl shadow-card text-center"
          >
            <h3 className="text-xl font-bold text-dark mb-1">{ins.name}</h3>
            <p className="text-sm text-tan font-medium mb-2">{ins.title}</p>
            <p className="text-slate text-sm">{ins.bio}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Instructors;
