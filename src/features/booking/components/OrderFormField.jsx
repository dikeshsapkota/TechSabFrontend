export default function OrderFormField({ label, textarea = false, ...inputProps }) {
  const fieldClassName =
    "mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-blue-500";

  return (
    <label className={`text-sm font-semibold text-gray-700 ${textarea ? "mt-5 block" : ""}`}>
      {label}
      {textarea ? (
        <textarea {...inputProps} className={`${fieldClassName} resize-none`} />
      ) : (
        <input {...inputProps} className={fieldClassName} />
      )}
    </label>
  );
}
