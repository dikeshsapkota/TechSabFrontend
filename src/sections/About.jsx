const ACHIEVEMENTS = [
  { icon: "fa-solid fa-trophy",      value: "50+",  label: "Projects Completed" },
  { icon: "fa-solid fa-users",       value: "5+",  label: "Team Members"       },
  { icon: "fa-solid fa-globe",       value: "2+",   label: "Countries Reached"  },
  { icon: "fa-solid fa-star",        value: "4.9/5", label: "Average Rating"     },
];

const VALUES = [
  { icon: "fa-solid fa-lightbulb", title: "Innovation First",    desc: "We push beyond conventional thinking to find solutions that actually matter." },
  { icon: "fa-solid fa-handshake", title: "Client Partnership",  desc: "Your goals become our goals. We work as an extension of your team, not a vendor." },
  { icon: "fa-solid fa-lock",      title: "Security by Design",  desc: "Every system we build is designed with security and privacy at its core." },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Who We Are</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Technology that works as hard as you do
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Founded in 2024, Techsab has helped over 50 companies across Nepal build technology that scales. We combine deep engineering expertise with a genuine commitment to each client's success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Visual */}
          <div className="scale-card-wrap relative z-10 lg:aspect-[4/3]">
            <div
              className="scale-flip-card min-h-[500px] sm:min-h-[440px] lg:h-full lg:min-h-0"
              tabIndex={0}
              aria-label="Built to Scale. Hover or focus to learn more."
            >
              <div className="scale-flip-content">
                <div className="scale-flip-face scale-flip-front">
                  <div className="scale-flip-glow scale-flip-glow-one"></div>
                  <div className="scale-flip-glow scale-flip-glow-two"></div>
                  <div className="relative z-10 text-center text-white p-8">
                    <i className="fa-solid fa-rocket text-6xl mb-4 opacity-90"></i>
                    <p className="text-xl font-bold">Built to Scale</p>
                    <p className="text-sm text-blue-100 mt-2">Enterprise-grade from day one</p>
                  </div>
                </div>
                <div className="scale-flip-face scale-flip-back">
                  <div className="scale-flip-border" aria-hidden="true"></div>
                  <div className="scale-flip-back-content">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/15 text-2xl text-cyan-300">
                      <i className="fa-solid fa-code"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Built to Scale</h3>
                    <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                      From startup MVPs to enterprise platforms, we develop flexible, maintainable, and high-performance applications that grow alongside your business.
                    </p>
                    <div className="grid w-full max-w-4xl gap-3 text-left sm:grid-cols-2">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <h3 className="mb-1 font-bold text-cyan-300">Our Mission</h3>
                        <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                          To democratise access to world-class technology by building products that are reliable, intuitive, and built to last — regardless of a company's size or stage.
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <h3 className="mb-1 font-bold text-blue-300">Our Vision</h3>
                        <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                          A world where every business, from a startup in Kathmandu to an enterprise in New York, has access to technology that genuinely moves them forward.
                        </p>
                      </div>
                    </div>
                    <div className="grid w-full max-w-4xl gap-2 text-left sm:grid-cols-3">
                      {VALUES.map((value) => (
                        <div key={value.title} className="rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-3">
                          <div className="mb-1 flex items-center gap-2">
                            <i className={`${value.icon} text-xs text-cyan-300`}></i>
                            <h4 className="text-xs font-semibold text-white sm:text-sm">{value.title}</h4>
                          </div>
                          <p className="text-[11px] leading-relaxed text-slate-400 sm:text-xs">{value.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating card */}
            <div className="scale-cert-badge absolute -right-6 top-8 rounded-2xl bg-white p-4 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <i className="fa-solid fa-shield-halved text-blue-600"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">ISO 27001 Certified</p>
                  <p className="text-xs text-gray-400">Security standard</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To democratise access to world-class technology by building products that are reliable, intuitive, and built to last — regardless of a company's size or stage.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                A world where every business, from a startup in Kathmandu to an enterprise in New York, has access to technology that genuinely moves them forward.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {VALUES.map((v) => (
                <div key={v.title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <i className={v.icon}></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{v.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.label} className="flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-100 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-xl">
                <i className={a.icon}></i>
              </div>
              <p className="text-3xl font-extrabold text-gray-900">{a.value}</p>
              <p className="text-sm text-gray-500">{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
