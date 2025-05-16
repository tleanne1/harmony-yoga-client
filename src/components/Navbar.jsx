import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Classes", path: "/classes" },
  { name: "Instructors", path: "/instructors" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-ivory shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        <Link to="/" className="text-2xl font-bold text-dark tracking-tight">
          Harmony Yoga
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive
                    ? "bg-tan text-dark px-4 py-1 rounded-full"
                    : "text-dark hover:text-brown"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-dark"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-ivory px-6 pb-4 space-y-3 shadow-md">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium ${
                  isActive
                    ? "bg-tan text-dark px-4 py-2 rounded-full"
                    : "text-dark hover:text-brown"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
