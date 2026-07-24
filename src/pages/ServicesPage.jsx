import { Link } from "react-router-dom";
import SiteLayout from "../layouts/SiteLayout";
import ServiceCard from "../components/ServiceCard";
import services from "../data/services";

export default function ServicesPage() {
  return (
    <SiteLayout overlayHeader>
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 px-4 pb-14 pt-28 text-white sm:pb-20 sm:pt-36">
        <div className="container-max text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-200">What we do</span>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-5xl">Services built around your goals</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Strategy, design, engineering, finance, and ongoing support—all structured clearly so you can find the right expertise for your next step.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-blue-600 p-6 text-white shadow-xl sm:mt-14 sm:flex sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="text-2xl font-bold">Need help choosing a service?</h2>
              <p className="mt-2 text-blue-100">Tell us about your challenge and we’ll recommend a practical next step.</p>
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 sm:mt-0">
              Book a free consultation <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
