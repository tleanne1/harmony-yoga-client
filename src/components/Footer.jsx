import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-ivory pt-12 pb-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3">Harmony Yoga</h2>
          <p className="text-sm text-ivory/80">
            A sanctuary for mind, body, and breath. Rooted in presence, guided by compassion.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-tan">Home</Link></li>
            <li><Link to="/classes" className="hover:text-tan">Classes</Link></li>
            <li><Link to="/instructors" className="hover:text-tan">Instructors</Link></li>
            <li><Link to="/contact" className="hover:text-tan">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <p className="text-sm text-ivory/80 mb-3">Email: hello@harmonyyoga.com</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-tan">Instagram</a>
            <a href="#" className="hover:text-tan">Facebook</a>
            <a href="#" className="hover:text-tan">YouTube</a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-ivory/60">
        &copy; {new Date().getFullYear()} Harmony Yoga. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
