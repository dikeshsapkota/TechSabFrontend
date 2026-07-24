import { Link } from "react-router-dom";
import SiteLayout from "../layouts/SiteLayout";
import About from "../sections/About";

const APPROACH = [
  {
    icon: "fa-solid fa-comments",
    title: "Understand",
    description: "We start with your business, users, challenges, and definition of success—not a pre-selected technology.",
  },
  {
    icon: "fa-solid fa-compass-drafting",
    title: "Plan",
    description: "We turn the discovery into a focused roadmap with clear priorities, milestones, responsibilities, and risks.",
  },
  {
    icon: "fa-solid fa-code",
    title: "Build",
    description: "Our team delivers in visible stages, tests continuously, and keeps you involved as the solution takes shape.",
  },
  {
    icon: "fa-solid fa-arrow-trend-up",
    title: "Grow",
    description: "After launch, we support, measure, and improve the product so it continues creating value as you scale.",
  },
];

export default function AboutPage() {
  return (
    <SiteLayout overlayHeader>
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 px-4 pb-14 pt-28 text-white sm:pb-20 sm:pt-36">
        <div className="container-max max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-200">About Techsab</span>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-5xl">A practical technology partner for ambitious businesses</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-blue-100 sm:mt-6 sm:text-lg sm:leading-8">
            We bring strategy, design, engineering, and long-term support together to help organizations solve real problems and build dependable digital products.
          </p>
        </div>
      </section>

      <About />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">How we work</span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">Clear collaboration from idea to impact</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Good technology is built through shared context and honest communication. Our process keeps decisions transparent and delivery focused on measurable business value.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {APPROACH.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-gray-100 bg-slate-50 p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
                    <i className={step.icon} />
                  </div>
                  <span className="text-sm font-bold text-blue-200">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-gray-900 p-6 text-white sm:mt-14 sm:flex sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="text-2xl font-bold">Let’s build something useful together</h2>
              <p className="mt-2 text-gray-300">Share your goals with us and get a clear recommendation for moving forward.</p>
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 sm:mt-0">
              Start a conversation <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
