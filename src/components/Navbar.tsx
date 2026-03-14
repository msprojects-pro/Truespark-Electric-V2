import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { businessData } from "../data/businessData";
import { cn } from "../lib/utils";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Green Energy", path: "/green-energy" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md shadow-lg py-3"
          : "bg-slate-950 py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500 text-slate-950 transition-transform group-hover:scale-105">
              <Zap className="h-6 w-6" fill="currentColor" />
              <div className="absolute inset-0 rounded-lg bg-cyan-400 blur opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold leading-none text-white tracking-tight">
                TrueSpark
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400">
                Electric
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cyan-400",
                  location.pathname === link.path
                    ? "text-cyan-400"
                    : "text-slate-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${businessData.phone.main.replace(/\D/g, "")}`}
              className="hidden lg:flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400 transition-all hover:bg-cyan-500 hover:text-slate-950"
            >
              {businessData.phone.main}
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "block py-2 text-lg font-medium transition-colors",
                    location.pathname === link.path
                      ? "text-cyan-400"
                      : "text-slate-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={`tel:${businessData.phone.main.replace(/\D/g, "")}`}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950"
                >
                  Call Us: {businessData.phone.main}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
