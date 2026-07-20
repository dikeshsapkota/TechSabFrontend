import { useState } from "react";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import PricingModal from "../components/PricingModal";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">What We Do</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Services built for ambitious teams
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            From strategy to deployment, we cover every layer of the technology stack so you have one trusted partner, not five vendors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              icon={s.icon}
              title={s.title}
              description={s.description}
              showPricingButton={s.title === "Website Development"}
              onPricingClick={handleOpenModal}
            />
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-xl">
          <div>
            <p className="text-xl font-bold">Not sure where to start?</p>
            <p className="text-blue-100 mt-1 text-sm">Let's talk through your challenges and find the right fit.</p>
          </div>
          <a href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-7 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md">
            Book a Free Consultation <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <PricingModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
