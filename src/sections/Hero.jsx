import { Link } from "react-router-dom";
import Button from "../components/Button";

const STATS = [
  { value: "50+", label: "Clients Served" },
  { value: "98%",  label: "Satisfaction Rate" },
  { value: "2+",  label: "Years Experience" },
];

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.25),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] pt-16">
      {/* Decorative geometry */}
      <div className="absolute top-1/4 -left-24 h-72 w-72 rounded-full border border-cyan-400/20 bg-cyan-400/10 blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 -right-20 h-80 w-80 rounded-full border border-blue-400/20 bg-blue-400/10 blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute left-10 top-20 h-24 w-24 rotate-12 border border-cyan-400/40"></div>
        <div className="absolute right-16 top-24 h-16 w-16 rotate-45 border border-blue-400/40"></div>
        <div className="absolute bottom-24 left-1/3 h-20 w-20 rotate-6 border border-cyan-400/30"></div>
      </div>

      <div className="container-max section-padding w-full pb-24 sm:pb-24 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.2)] sm:px-4 sm:text-xs sm:tracking-[0.25em]">
              <i className="fa-solid fa-circle-dot text-cyan-400 animate-pulse"></i>
              Now serving 50+ global clients
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.18)] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
              Build Smarter.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-500">
                Scale Faster.
              </span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
              Techsab partners with ambitious teams to design, build, and deploy technology that moves the business forward — from first prototype to production scale.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link to="/register" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full px-6 py-3.5 text-base shadow-[0_0_25px_rgba(59,130,246,0.35)] sm:w-auto sm:px-8">
                  Start Your Project <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </Link>
              <Button variant="secondary" onClick={scrollToServices} className="w-full border border-white/20 bg-transparent px-6 py-3.5 text-base text-black shadow-none hover:border-cyan-300 hover:bg-cyan-400/15 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] sm:w-auto sm:px-8">
                See What We Do
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-2 grid grid-cols-3 gap-3 border-t border-white/10 pt-4 sm:flex sm:flex-wrap sm:gap-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-slate-400 sm:text-xs sm:tracking-[0.3em]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="flex h-80 w-80 items-center justify-center rounded-[2rem] border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 via-slate-900/60 to-blue-600/20 shadow-[0_0_50px_rgba(34,211,238,0.2)] backdrop-blur-sm">
                <div className="hero-tech-grid" aria-label="Technology services">
                  {[
                    { icon: "fa-brain", label: "AI" },
                    { icon: "fa-cloud", label: "Cloud" },
                    { icon: "fa-shield-halved", label: "Security" },
                    { icon: "fa-chart-line", label: "Analytics" },
                  ].map((item) => (
                    <div key={item.label} className="hero-tech-card flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 p-5 hover:bg-cyan-400/15">
                      <i className={`fa-solid ${item.icon} text-2xl text-cyan-300`}></i>
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-slate-900/80 p-4 shadow-[0_0_25px_rgba(16,185,129,0.2)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Project Delivered</p>
                  <p className="text-xs text-slate-400">3 days ahead of schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-cyan-300"
        aria-label="Scroll to services"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em]">Scroll</span>
        <i className="fa-solid fa-chevron-down animate-bounce"></i>
      </button>
    </section>
  );
}
