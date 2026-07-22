import { useState } from "react";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import PricingModal from "../components/PricingModal";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const renderServiceCards = (isDuplicate = false) =>
    services.map((service) => (
      <div
        key={`${isDuplicate ? "duplicate" : "original"}-${service.id}`}
        className="w-[280px] flex-shrink-0 sm:w-[320px]"
        aria-hidden={isDuplicate ? "true" : undefined}
      >
        <ServiceCard
          icon={service.icon}
          title={service.title}
          description={service.description}
          showPricingButton={
            !isDuplicate && service.title === "Website Development"
          }
          onPricingClick={isDuplicate ? undefined : handleOpenModal}
        />
      </div>
    ));

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

      {/* Infinite services loop */}
      <div className="services-marquee">
        <div className="services-marquee-track">
          {/* Original cards */}
          <div className="flex flex-shrink-0 gap-6">
            {renderServiceCards(false)}
          </div>

          {/* Duplicate cards for seamless looping */}
          <div className="flex flex-shrink-0 gap-6" aria-hidden="true">
            {renderServiceCards(true)}
          </div>
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

      <PricingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}