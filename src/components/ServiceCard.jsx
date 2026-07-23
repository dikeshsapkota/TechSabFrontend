import { Link } from "react-router-dom";

export default function ServiceCard({ icon, title, description, slug }) {
  const isWebsiteDevelopment = slug === "website-development";

  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-100">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 text-2xl transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <i className={icon}></i>
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

      <Link
        to={isWebsiteDevelopment ? "/website-packages" : `/services/${slug}`}
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
      >
        {isWebsiteDevelopment ? "Book packages" : "Learn more"} <i className="fa-solid fa-arrow-right text-xs"></i>
      </Link>
    </div>
  );
}
