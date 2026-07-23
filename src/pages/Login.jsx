import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const INITIAL = { email: "", password: "" };

function validate(fields) {
  const errs = {};
  if (!fields.email.trim())    errs.email    = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = "Enter a valid email address.";
  if (!fields.password)        errs.password = "Password is required.";
  return errs;
}

export default function Login() {
  const [fields, setFields]     = useState(INITIAL);
  const [errors, setErrors]     = useState({});
  const [remember, setRemember] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState(false);

  const update = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }));

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
        <div className="absolute top-1/3 -left-16 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" aria-hidden="true"></div>
        <div className="relative z-10 max-w-sm text-center">
          <Link to="/" className="flex items-center justify-center gap-2 font-bold text-2xl mb-12">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <i className="fa-solid fa-bolt"></i>
            </span>
            Techsab
          </Link>
          <h2 className="text-3xl font-extrabold mb-4">Welcome back</h2>
          <p className="text-gray-400 leading-relaxed">
            Log in to access your dashboard, manage projects, and track your team's progress in real time.
          </p>
          <div className="mt-12 flex flex-col gap-4">
            {["50+ businesses trust Techsab", "Enterprise-grade security", "24/7 dedicated support"].map((t) => (
              <div key={t} className="flex items-center gap-3 text-sm text-gray-300">
                <i className="fa-solid fa-check text-blue-400"></i> {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        {/* Mobile logo */}
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
              <h2 className="text-2xl font-bold text-gray-900">Logged in!</h2>
              <p className="text-gray-500 text-sm">Redirecting to your dashboard…</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h1 className="text-2xl font-extrabold text-gray-900">Log in to your account</h1>
                <p className="text-gray-500 text-sm mt-1">Enter your credentials to continue</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <InputField id="login-email" label="Email Address" type="email" placeholder="you@example.com"
                  value={fields.email} onChange={update("email")} error={errors.email}
                  icon="fa-solid fa-envelope" required autoComplete="email" />
                <InputField id="login-password" label="Password" type="password" placeholder="Enter your password"
                  value={fields.password} onChange={update("password")} error={errors.password}
                  icon="fa-solid fa-lock" required autoComplete="current-password" />

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" disabled={loading} className="w-full py-3.5 text-base">
                  {loading ? <><i className="fa-solid fa-spinner animate-spin"></i> Signing in…</> : <><i className="fa-solid fa-right-to-bracket"></i> Log In</>}
                </Button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  Create one free
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
