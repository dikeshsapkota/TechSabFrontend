import { useEffect, useRef } from "react";
import websitePackages from "../data/websitePackages";
import PricingCard from "./PricingCard";

export default function PricingModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-3 py-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pricing-modal-title"
    >
      <div
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-white/20 bg-white/95 p-4 shadow-2xl sm:p-8 lg:p-10"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-50 hover:text-gray-800"
          aria-label="Close pricing modal"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            <i className="fa-solid fa-sparkles"></i>
            Website Development Packages
          </div>
          <h2 id="pricing-modal-title" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the plan that fits your growth
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            From fast-launch landing pages to fully scalable digital platforms, each package is tailored for performance, design, and long-term growth.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {websitePackages.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isHighlighted={plan.featured} />
          ))}
        </div>
      </div>
    </div>
  );
}
