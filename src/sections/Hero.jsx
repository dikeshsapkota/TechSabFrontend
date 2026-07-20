import { Link } from "react-router-dom";
import Button from "../components/Button";

const STATS = [
  { value: "500+", label: "Clients Served" },
  { value: "98%",  label: "Satisfaction Rate" },
  { value: "2+",  label: "Years Experience" },
];

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="container-max section-padding w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-blue-600/20 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold text-blue-300 uppercase tracking-wider">
              <i className="fa-solid fa-circle-dot text-blue-400 animate-pulse"></i>
              Now serving 50+ global clients
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Build Smarter.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Scale Faster.
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Techsab partners with ambitious teams to design, build, and deploy technology that moves the business forward — from first prototype to production scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button variant="primary" className="text-base px-8 py-3.5">
                  Start Your Project <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </Link>
              <Button variant="secondary" onClick={scrollToServices} className="text-base px-8 py-3.5 bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                See What We Do
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10 mt-2">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="h-80 w-80 rounded-3xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-white/10 flex items-center justify-center shadow-2xl">
                <div className="grid grid-cols-2 gap-4 p-8">
                  {[
                    { icon: "fa-brain", label: "AI" },
                    { icon: "fa-cloud", label: "Cloud" },
                    { icon: "fa-shield-halved", label: "Security" },
                    { icon: "fa-chart-line", label: "Analytics" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 p-5 hover:bg-white/20 transition-colors">
                      <i className={`fa-solid ${item.icon} text-2xl text-blue-300`}></i>
                      <span className="text-xs text-gray-300 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <i className="fa-solid fa-check text-green-600"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Project Delivered</p>
                  <p className="text-xs text-gray-500">3 days ahead of schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors"
        aria-label="Scroll to services"
      >
        <span className="text-xs font-medium">Scroll</span>
        <i className="fa-solid fa-chevron-down animate-bounce"></i>
      </button>
    </section>
  );
}
