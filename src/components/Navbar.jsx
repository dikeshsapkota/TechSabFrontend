import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",     to: "/"         },
  { label: "About",    to: "/about"    },
  { label: "Contact",  to: "/contact"  },
];

const FEATURED_SERVICES = [
  { label: "Website Development", to: "/services/website-development", icon: "fa-globe" },
  { label: "AI Strategy", to: "/services/ai-strategy", icon: "fa-brain" },
  { label: "Product Development", to: "/services/product-development", icon: "fa-mobile-screen" },
  { label: "Cloud Architecture", to: "/services/cloud-architecture", icon: "fa-cloud" },
  { label: "Cybersecurity", to: "/services/cybersecurity", icon: "fa-shield-halved" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const location = useLocation();
  const useLightText = ["/about", "/services"].includes(location.pathname) && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"}`}>
      <nav className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16" aria-label="Main navigation">
        <Link
          to="/"
          className={`text-3xl font-black tracking-tight transition-all duration-300 hover:scale-105 ${
            useLightText ? "text-white" : "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          }`}
        >
          Techsab
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.slice(0, 2).map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                className={({ isActive }) => `text-sm font-medium transition-colors ${
                  useLightText
                    ? isActive ? "text-white" : "text-blue-100 hover:text-white"
                    : isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="group relative">
            <NavLink
              to="/services"
              className={({ isActive }) => `inline-flex items-center gap-1.5 py-5 text-sm font-medium transition-colors ${
                useLightText
                  ? isActive ? "text-white" : "text-blue-100 hover:text-white"
                  : isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Services
              <i className="fa-solid fa-chevron-down text-[10px] transition-transform group-hover:rotate-180" />
            </NavLink>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 rounded-2xl border border-gray-100 bg-white p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {FEATURED_SERVICES.map((service) => (
                <Link
                  key={service.to}
                  to={service.to}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <i className={`fa-solid ${service.icon}`} />
                  </span>
                  {service.label}
                </Link>
              ))}
              <Link to="/services" className="mt-1 flex items-center justify-between border-t border-gray-100 px-3 pt-3 pb-2 text-sm font-semibold text-blue-600 hover:text-blue-800">
                View all services <i className="fa-solid fa-arrow-right text-xs" />
              </Link>
            </div>
          </li>
          {NAV_LINKS.slice(2).map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                className={({ isActive }) => `text-sm font-medium transition-colors ${
                  useLightText
                    ? isActive ? "text-white" : "text-blue-100 hover:text-white"
                    : isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
            useLightText ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          }`}>
            Log in
          </Link>
          <Link to="/register" className={`rounded-xl px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors ${
            useLightText ? "border border-white/30 bg-white/10 hover:bg-white/20" : "bg-blue-600 hover:bg-blue-700"
          }`}>
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className={`md:hidden flex h-10 w-10 items-center justify-center rounded-lg transition ${
            useLightText ? "text-white hover:bg-white/10" : "text-gray-600 hover:bg-gray-100"
          }`}
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
            {NAV_LINKS.slice(0, 2).map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `block w-full px-4 py-3 rounded-xl text-sm font-medium transition ${
                    isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="mx-4 border-l-2 border-blue-100 pl-3">
              <Link
                to="/services"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-2 py-2 text-xs font-bold uppercase tracking-wider text-blue-600"
              >
                Services <i className="fa-solid fa-arrow-right" />
              </Link>
              {FEATURED_SERVICES.map((service) => (
                <Link
                  key={service.to}
                  to={service.to}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  <i className={`fa-solid ${service.icon} w-5 text-center text-blue-500`} />
                  {service.label}
                </Link>
              ))}
            </li>
            {NAV_LINKS.slice(2).map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `block w-full px-4 py-3 rounded-xl text-sm font-medium transition ${
                    isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {l.label}
                </NavLink>
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
