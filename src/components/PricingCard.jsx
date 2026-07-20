export default function PricingCard({ plan, isHighlighted = false }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        isHighlighted ? "border-blue-500 ring-2 ring-blue-100" : "border-gray-200"
      }`}
    >
      {plan.badge && (
        <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm">
          {plan.badge}
        </div>
      )}

      <div className="space-y-5">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
          <div className="mt-4 flex items-end gap-1">
            <span className="text-4xl font-bold tracking-tight text-blue-600">{plan.price}</span>
            <span className="pb-1 text-sm font-medium text-gray-500">/ project</span>
          </div>
        </div>

        <ul className="space-y-3 text-sm text-gray-600">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <i className="fa-solid fa-circle-check mt-1 text-emerald-500"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
