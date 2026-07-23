import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const CONTACT_INFO = [
  { icon: "fa-solid fa-envelope",       label: "Email",   value: "info.laxmiprasadrimal@gmail.com"     },
  { icon: "fa-solid fa-phone",          label: "Phone",   value: "+977 9763524963"     },
  { icon: "fa-solid fa-location-dot",   label: "Address", value: "Arjundhara,Jhapa" },
];

const SOCIALS = [
  { icon: "fa-brands fa-twitter",   href: "#", label: "Twitter"  },
  { icon: "fa-brands fa-linkedin",  href: "#", label: "LinkedIn" },
  { icon: "fa-brands fa-github",    href: "#", label: "GitHub"   },
  { icon: "fa-brands fa-instagram", href: "#", label: "Instagram"},
];

const INITIAL = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(fields) {
  const errs = {};
  if (!fields.name.trim())    errs.name    = "Full name is required.";
  if (!fields.email.trim())   errs.email   = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = "Enter a valid email address.";
  if (!fields.subject.trim()) errs.subject = "Subject is required.";
  if (!fields.message.trim()) errs.message = "Message is required.";
  else if (fields.message.trim().length < 20) errs.message = "Message must be at least 20 characters.";
  return errs;
}

export default function Contact() {
  const [fields, setFields]   = useState(INITIAL);
  const [errors, setErrors]   = useState({});
  const [state, submitToFormspree, resetFormspree] = useForm("mvzewoej");

  const update = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    await submitToFormspree(e);
  };

  const startAnotherMessage = () => {
      resetFormspree();
      setFields(INITIAL);
      setErrors({});
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Get In Touch</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">Let's start a conversation</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within one business day.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              {CONTACT_INFO.map((c) => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                    <i className={c.icon}></i>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{c.label}</p>
                    <p className="text-sm font-medium text-gray-800 mt-0.5">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Follow us</p>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    className="h-10 w-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200">
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-blue-600 text-white p-6">
              <i className="fa-solid fa-clock text-2xl mb-3 text-blue-200"></i>
              <p className="font-semibold mb-1">Business Hours</p>
              <p className="text-sm text-blue-100">Monday – Friday: 9 AM – 6 PM PST</p>
              <p className="text-sm text-blue-100">Weekend: Closed (email monitored)</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 rounded-3xl bg-white border border-gray-100 p-8 shadow-sm">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                  <i className="fa-solid fa-circle-check text-green-600 text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Message sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs">Thanks for reaching out. We'll get back to you within one business day.</p>
                <Button variant="ghost" onClick={startAnotherMessage}>Send another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField id="name" label="Full Name" placeholder="Ram prasad upadhaya" value={fields.name} onChange={update("name")} error={errors.name} icon="fa-solid fa-user" required />
                  <InputField id="email" label="Email Address" type="email" placeholder="hairkobuwa@example.com" value={fields.email} onChange={update("email")} error={errors.email} icon="fa-solid fa-envelope" required autoComplete="email" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField id="phone" label="Phone Number" type="tel" placeholder="+977-1000000000" value={fields.phone} onChange={update("phone")} error={errors.phone} icon="fa-solid fa-phone" />
                  <InputField id="subject" label="Subject" placeholder="How can we help?" value={fields.subject} onChange={update("subject")} error={errors.subject} icon="fa-solid fa-tag" required />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={5} placeholder="Tell us about your project or question..."
                    value={fields.message} onChange={update("message")}
                    required minLength={20}
                    aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-800 placeholder-gray-400 resize-none transition focus:outline-none focus:ring-2 focus:ring-blue-500
                      ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 hover:border-gray-300 focus:border-blue-500 focus:bg-white"}`}
                  />
                  {errors.message && <p id="message-error" role="alert" className="flex items-center gap-1 text-xs text-red-600"><i className="fa-solid fa-circle-exclamation"></i> {errors.message}</p>}
                  <ValidationError field="message" errors={state.errors} className="text-xs text-red-600" />
                </div>
                <ValidationError errors={state.errors} className="text-sm text-red-600" />
                <Button type="submit" disabled={state.submitting} className="self-start px-8 py-3.5">
                  {state.submitting ? <><i className="fa-solid fa-spinner animate-spin"></i> Sending…</> : <><i className="fa-solid fa-paper-plane"></i> Send Message</>}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
