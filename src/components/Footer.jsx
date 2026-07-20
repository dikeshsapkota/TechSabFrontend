import { Link } from "react-router-dom";

const SOCIALS = [
  { icon: "fa-brands fa-twitter",   href: "#", label: "Twitter"  },
  { icon: "fa-brands fa-linkedin",  href: "#", label: "LinkedIn" },
  { icon: "fa-brands fa-github",    href: "#", label: "GitHub"   },
  { icon: "fa-brands fa-instagram", href: "#", label: "Instagram"},
];

const FOOTER_LINKS = {
  Company:  ["About", "Services", "Blog", "Careers"],
  Support:  ["Contact", "Documentation", "FAQ", "Status"],
  Legal:    ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-sm">
                <i className="fa-solid fa-bolt"></i>
              </span>
              Techsab
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              We help modern businesses build smarter, scale faster, and compete in a world driven by technology.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-200">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold text-white mb-4">{group}</h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© {new Date().getFullYear()} Techsab Inc. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
