import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="pt-32 pb-20 px-6 md:px-20 bg-ivory min-h-screen text-dark"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <SectionHeader
        title="Contact Us"
        subtitle="Have a question? Want to join a class? Reach out below."
      />
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-tan/10 border border-tan p-8 rounded-xl space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded border border-gray-300 focus:ring focus:ring-tan outline-none bg-white text-dark"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded border border-gray-300 focus:ring focus:ring-tan outline-none bg-white text-dark"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded border border-gray-300 focus:ring focus:ring-tan outline-none bg-white text-dark"
        />
        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.03 }}
          className="bg-dark text-ivory px-6 py-3 rounded-full hover:bg-brown transition"
        >
          Send Message
        </motion.button>
        {submitted && (
          <motion.p
            className="text-green-600 text-sm pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            ✅ Message sent successfully!
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default Contact;
