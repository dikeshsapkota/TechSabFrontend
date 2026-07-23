import { Link, Navigate, useParams } from "react-router-dom";
import SiteLayout from "../layouts/SiteLayout";
import services from "../data/services";

const outcomes = [
  "A practical roadmap built around your goals",
  "Clear milestones, ownership, and delivery updates",
  "Secure, scalable work designed for long-term value",
  "Ongoing guidance from a dedicated Techsab team",
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  if (!service) return <Navigate to="/" replace />;
  const isWebsite = service.slug === "website-development";

  return (
    <SiteLayout>
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 px-4 py-20 text-white">
        <div className="container-max">
          <Link to="/services" className="text-sm font-semibold text-blue-200 hover:text-white">
            <i className="fa-solid fa-arrow-left mr-2" />All services
          </Link>
          <div className="mt-10 max-w-3xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl">
              <i className={service.icon} />
            </div>
            <h1 className="text-4xl font-extrabold sm:text-5xl">{service.title}</h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">{service.description}</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-max grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">How we help</span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">From first conversation to measurable results</h2>
            <p className="mt-5 leading-7 text-gray-600">
              We begin by understanding your business, users, and current challenges. Then we shape a focused solution, deliver it in visible stages, and help your team get lasting value from it.
            </p>
            <p className="mt-4 leading-7 text-gray-600">
              Every engagement is tailored—no unnecessary features, unclear handoffs, or one-size-fits-all recommendations.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900">What you can expect</h3>
            <ul className="mt-6 space-y-5">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-gray-600">
                  <i className="fa-solid fa-circle-check mt-1 text-emerald-500" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container-max mt-12 rounded-3xl bg-blue-600 p-8 text-white sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">{isWebsite ? "Find the right website package" : `Ready to discuss ${service.title}?`}</h2>
            <p className="mt-2 text-blue-100">{isWebsite ? "Compare deliverables and choose a plan for your project." : "Tell us what you need and we’ll recommend the best next step."}</p>
          </div>
          <Link to={isWebsite ? "/website-packages" : "/contact"} className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 sm:mt-0">
            {isWebsite ? "View packages" : "Book a consultation"}
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
