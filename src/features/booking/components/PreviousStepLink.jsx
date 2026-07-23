import { Link } from "react-router-dom";

export default function PreviousStepLink({ to, children }) {
  return (
    <Link
      to={to}
      className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-700"
    >
      <i className="fa-solid fa-arrow-left" />
      {children}
    </Link>
  );
}
