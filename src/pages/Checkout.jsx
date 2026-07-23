import { useMemo, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import websitePackages from "../data/websitePackages";
import CheckoutSteps from "../components/CheckoutSteps";

const money = (value) => `Rs. ${value.toLocaleString("en-IN")}`;

export default function Checkout() {
  const [params] = useSearchParams();
  const plan = websitePackages.find((item) => String(item.id) === params.get("plan"));
  const [promo, setPromo] = useState("");
  const [applied, setApplied] = useState(false);
  const [message, setMessage] = useState("");
  const discounted = useMemo(() => Math.round((plan?.amount || 0) * 0.9), [plan]);
  if (!plan) return <Navigate to="/website-packages" replace />;

  const applyPromo = () => {
    if (promo === "TEEJ10") {
      setApplied(true);
      setMessage("TEEJ10 applied — you saved 10%.");
    } else {
      setApplied(false);
      setMessage("That promo code is not valid.");
    }
  };

  return (
    <PageShell>
      <section className="section-padding">
        <div className="container-max">
          <CheckoutSteps current={2} />
          <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Checkout</span>
            <h1 className="mt-3 text-4xl font-extrabold text-gray-900">Review your package</h1>
            <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
              <p className="mt-2 text-gray-500">One-time website development project</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {plan.features.map((feature) => <li key={feature} className="text-sm text-gray-600"><i className="fa-solid fa-check mr-2 text-emerald-500" />{feature}</li>)}
              </ul>
            </div>
          </div>
          <aside className="h-fit rounded-3xl bg-slate-900 p-7 text-white lg:col-span-2">
            <h2 className="text-xl font-bold">Order summary</h2>
            <div className="mt-6 flex justify-between text-slate-300"><span>Package price</span><span>{money(plan.amount)}</span></div>
            {applied && <div className="mt-3 flex justify-between text-emerald-400"><span>TEEJ10 (10%)</span><span>− {money(plan.amount - discounted)}</span></div>}
            <div className="my-6 border-t border-slate-700" />
            <div className="flex justify-between text-xl font-bold"><span>Total</span><span>{money(applied ? discounted : plan.amount)}</span></div>
            <label htmlFor="promo" className="mt-8 block text-sm font-semibold">Promo code</label>
            <div className="mt-2 flex gap-2">
              <input id="promo" value={promo} onChange={(event) => { setPromo(event.target.value.toUpperCase()); setApplied(false); setMessage(""); }} placeholder="ENTER CODE" className="min-w-0 flex-1 rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 uppercase text-white outline-none focus:border-blue-400" />
              <button onClick={applyPromo} className="rounded-xl bg-white px-4 font-semibold text-slate-900">Apply</button>
            </div>
            {message && <p className={`mt-2 text-xs ${applied ? "text-emerald-400" : "text-rose-400"}`}>{message}</p>}
            <Link to={`/place-order?plan=${plan.id}&discount=${applied ? "TEEJ10" : "none"}`} className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3.5 font-semibold hover:bg-blue-500">
              Continue to place order
            </Link>
          </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
