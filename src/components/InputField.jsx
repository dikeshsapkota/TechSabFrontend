import { useState } from "react";

export default function InputField({
  label, id, type = "text", placeholder, value, onChange, error,
  icon, required = false, autoComplete,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <i className={icon}></i>
          </span>
        )}
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-800 placeholder-gray-400 transition focus:outline-none focus:ring-2 focus:ring-blue-500
            ${icon ? "pl-10" : ""}
            ${isPassword ? "pr-12" : ""}
            ${error ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 hover:border-gray-300 focus:border-blue-500 focus:bg-white"}`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <i className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}></i>
          </button>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-1 text-xs text-red-600">
          <i className="fa-solid fa-circle-exclamation"></i> {error}
        </p>
      )}
    </div>
  );
}
