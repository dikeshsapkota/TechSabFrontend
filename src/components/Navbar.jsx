import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"}`}>
      <nav className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16" aria-label="Main navigation">
<Link
  to="/"
  className="text-3xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
>
  Techsab
</Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => handleNavClick(l.href)}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-xl hover:bg-blue-50">
            Log in
          </Link>
          <Link to="/register" className="text-sm font-semibold bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg text-gray-600 hover:bg-gray-100 transition"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => handleNavClick(l.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="border-t border-gray-100 mt-2 pt-2 flex flex-col gap-2">
              <Link to="/login" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-semibold text-blue-600 hover:bg-blue-50 transition">
                Log in
              </Link>
              <Link to="/register" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-semibold bg-blue-600 text-white text-center hover:bg-blue-700 transition">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
