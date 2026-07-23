import { useRef } from "react";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const sliderRef = useRef(null);
  const slide = (direction) => {
    sliderRef.current?.scrollBy({ left: direction * 344, behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding overflow-hidden bg-white">
      <div className="container-max">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            What We Do
          </span>

          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Services built for ambitious teams
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-500">
            From strategy to deployment, we cover every layer of the technology
            stack so you have one trusted partner, not five vendors.
          </p>
        </div>
      </div>

      <div className="container-max">
        <div className="mb-5 flex justify-end gap-3">
          <button onClick={() => slide(-1)} aria-label="Previous services" className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm hover:border-blue-500 hover:text-blue-600">
            <i className="fa-solid fa-arrow-left" />
          </button>
          <button onClick={() => slide(1)} aria-label="Next services" className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm hover:bg-blue-700">
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
        <div ref={sliderRef} className="services-slider flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
          {services.map((service) => (
            <div key={service.id} className="w-[280px] flex-none snap-start sm:w-[320px]">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>

      <div className="container-max">
        {/* CTA strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-10 text-white shadow-xl md:flex-row">
          <div>
            <p className="text-xl font-bold">Not sure where to start?</p>

            <p className="mt-1 text-sm text-blue-100">
              Let's talk through your challenges and find the right fit.
            </p>
          </div>

          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();

              document.querySelector("#contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-blue-600 shadow-md transition-colors hover:bg-blue-50"
          >
            Book a Free Consultation
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
