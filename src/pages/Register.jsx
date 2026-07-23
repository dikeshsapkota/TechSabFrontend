import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const INITIAL = { name: "", email: "", phone: "", password: "", confirmPassword: "", terms: false };

function getStrength(pw) {
  let score = 0;
  if (pw.length >= 8)         score++;
  if (/[A-Z]/.test(pw))       score++;
  if (/[0-9]/.test(pw))       score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

const STRENGTH_LABELS = ["", "Weak", "Fair", "Good", "Strong"];
const STRENGTH_COLORS = ["", "bg-red-500", "bg-yellow-400", "bg-blue-500", "bg-green-500"];

function validate(fields) {
  const errs = {};
  if (!fields.name.trim())          errs.name    = "Full name is required.";
  if (!fields.email.trim())         errs.email   = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = "Enter a valid email address.";
  if (!fields.phone.trim())         errs.phone   = "Phone number is required.";
  if (!fields.password)             errs.password = "Password is required.";
  else if (fields.password.length < 8) errs.password = "Password must be at least 8 characters.";
  else if (getStrength(fields.password) < 2) errs.password = "Password is too weak. Add uppercase letters, numbers, or symbols.";
  if (!fields.confirmPassword)      errs.confirmPassword = "Please confirm your password.";
  else if (fields.confirmPassword !== fields.password) errs.confirmPassword = "Passwords do not match.";
  if (!fields.terms)                errs.terms   = "You must agree to the terms and conditions.";
  return errs;
}

export default function Register() {
  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (key) => (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFields((f) => ({ ...f, [key]: val }));
  };

  const strength = getStrength(fields.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1200);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex bg-gray-50 pt-16">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex-col items-center justify-center p-16 text-white relative overflow-hidden">
        <div className="absolute bottom-1/3 -right-16 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" aria-hidden="true"></div>
        <div className="relative z-10 max-w-sm text-center">
          <Link to="/" className="flex items-center justify-center gap-2 font-bold text-2xl mb-12">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <i className="fa-solid fa-bolt"></i>
            </span>
            Techsab
          </Link>
          <h2 className="text-3xl font-extrabold mb-4">Start building today</h2>
          <p className="text-gray-400 leading-relaxed">
            Join 50+ companies that use Techsab to build faster and scale with confidence.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4">
            {[
              { icon: "fa-solid fa-bolt",         label: "Fast Setup"     },
              { icon: "fa-solid fa-shield-halved", label: "Secure"        },
              { icon: "fa-solid fa-headset",       label: "24/7 Support"  },
              { icon: "fa-solid fa-chart-line",    label: "Scalable"      },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 p-4">
                <i className={`${f.icon} text-blue-300 text-xl`}></i>
                <span className="text-xs font-medium text-gray-300">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 overflow-y-auto">
        <Link to="/" className="flex lg:hidden items-center gap-2 font-bold text-xl text-blue-600 mb-8">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-sm">
            <i className="fa-solid fa-bolt"></i>
          </span>
          Techsab
        </Link>

        <div className="w-full max-w-md">
          {success ? (
            <div className="text-center flex flex-col items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <i className="fa-solid fa-circle-check text-green-600 text-3xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Account created!</h2>
              <p className="text-gray-500 text-sm">Welcome to Techsab. Check your email to verify your account.</p>
              <Link to="/login">
                <Button variant="primary">Go to Login</Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h1 className="text-2xl font-extrabold text-gray-900">Create your account</h1>
                <p className="text-gray-500 text-sm mt-1">Free forever. No credit card required.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <InputField id="reg-name" label="Full Name" placeholder="Jane Smith" value={fields.name}
                  onChange={update("name")} error={errors.name} icon="fa-solid fa-user" required autoComplete="name" />
                <InputField id="reg-email" label="Email Address" type="email" placeholder="you@example.com"
                  value={fields.email} onChange={update("email")} error={errors.email}
                  icon="fa-solid fa-envelope" required autoComplete="email" />
                <InputField id="reg-phone" label="Phone Number" type="tel" placeholder="+1 (555) 000-0000"
                  value={fields.phone} onChange={update("phone")} error={errors.phone}
                  icon="fa-solid fa-phone" required autoComplete="tel" />

                {/* Password + strength */}
                <div className="flex flex-col gap-1">
                  <InputField id="reg-password" label="Password" type="password" placeholder="Min. 8 characters"
                    value={fields.password} onChange={update("password")} error={errors.password}
                    icon="fa-solid fa-lock" required autoComplete="new-password" />
                  {fields.password && (
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-1 flex-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i <= strength ? STRENGTH_COLORS[strength] : "bg-gray-200"}`}></div>
                        ))}
                      </div>
                      <span className="text-xs font-medium text-gray-500">{STRENGTH_LABELS[strength]}</span>
                    </div>
                  )}
                </div>

                <InputField id="reg-confirm" label="Confirm Password" type="password" placeholder="Repeat your password"
                  value={fields.confirmPassword} onChange={update("confirmPassword")} error={errors.confirmPassword}
                  icon="fa-solid fa-lock-open" required autoComplete="new-password" />

                {/* Terms */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={fields.terms} onChange={update("terms")}
                      className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:underline font-medium">Terms of Service</a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>
                    </span>
                  </label>
                  {errors.terms && (
                    <p role="alert" className="flex items-center gap-1 text-xs text-red-600 mt-1">
                      <i className="fa-solid fa-circle-exclamation"></i> {errors.terms}
                    </p>
                  )}
                </div>

                <Button type="submit" disabled={loading} className="w-full py-3.5 text-base">
                  {loading ? <><i className="fa-solid fa-spinner animate-spin"></i> Creating account…</> : <><i className="fa-solid fa-user-plus"></i> Create Account</>}
                </Button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  Log in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
      </div>
    </>
  );
}
