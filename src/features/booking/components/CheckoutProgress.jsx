const steps = [
  { label: "Package", icon: "fa-box-open" },
  { label: "Review", icon: "fa-receipt" },
  { label: "Details", icon: "fa-user-pen" },
  { label: "Confirmed", icon: "fa-circle-check" },
];

export default function CheckoutProgress({ current = 1 }) {
  return (
    <nav aria-label="Checkout progress" className="mx-auto mb-12 max-w-4xl">
      <ol className="grid grid-cols-4">
        {steps.map((step, index) => {
          const number = index + 1;
          const complete = number < current;
          const active = number === current;

          return (
            <li key={step.label} className="relative flex flex-col items-center text-center">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className={`absolute right-1/2 top-5 h-0.5 w-full ${
                    number <= current ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
              )}
              <span
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm ${
                  complete || active
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-200 bg-white text-gray-400"
                } ${active ? "ring-4 ring-blue-100" : ""}`}
              >
                <i className={`fa-solid ${complete ? "fa-check" : step.icon}`} />
              </span>
              <span className={`mt-3 text-xs font-semibold sm:text-sm ${active ? "text-blue-700" : complete ? "text-gray-700" : "text-gray-400"}`}>
                <span className="hidden sm:inline">{number}. </span>{step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
