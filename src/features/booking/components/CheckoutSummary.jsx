import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DISCOUNT_RATE,
  PROMO_CODE,
  formatPrice,
  getDiscountedPrice,
  getPlaceOrderUrl,
  hasPromoDiscount,
} from "../booking";

export default function CheckoutSummary({ plan, initiallyDiscounted = false }) {
  const [promo, setPromo] = useState(initiallyDiscounted ? PROMO_CODE : "");
  const [applied, setApplied] = useState(initiallyDiscounted);
  const [message, setMessage] = useState(
    initiallyDiscounted ? `${PROMO_CODE} applied — you saved 10%.` : "",
  );
  const discountedPrice = getDiscountedPrice(plan.amount);

  const updatePromo = (event) => {
    setPromo(event.target.value.toUpperCase());
    setApplied(false);
    setMessage("");
  };

  const applyPromo = () => {
    const valid = hasPromoDiscount(promo);
    setApplied(valid);
    setMessage(valid ? `${PROMO_CODE} applied — you saved 10%.` : "That promo code is not valid.");
  };

  return (
    <aside className="h-fit rounded-3xl bg-slate-900 p-7 text-white lg:col-span-2">
      <h2 className="text-xl font-bold">Order summary</h2>
      <div className="mt-6 flex justify-between text-slate-300">
        <span>Package price</span>
        <span>{formatPrice(plan.amount)}</span>
      </div>

      {applied && (
        <div className="mt-3 flex justify-between text-emerald-400">
          <span>{PROMO_CODE} ({DISCOUNT_RATE * 100}%)</span>
          <span>− {formatPrice(plan.amount - discountedPrice)}</span>
        </div>
      )}

      <div className="my-6 border-t border-slate-700" />
      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>
        <span>{formatPrice(applied ? discountedPrice : plan.amount)}</span>
      </div>

      <label htmlFor="promo" className="mt-8 block text-sm font-semibold">
        Promo code
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="promo"
          value={promo}
          onChange={updatePromo}
          placeholder="ENTER CODE"
          className="min-w-0 flex-1 rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 uppercase text-white outline-none focus:border-blue-400"
        />
        <button type="button" onClick={applyPromo} className="rounded-xl bg-white px-4 font-semibold text-slate-900">
          Apply
        </button>
      </div>

      {message && (
        <p className={`mt-2 text-xs ${applied ? "text-emerald-400" : "text-rose-400"}`}>
          {message}
        </p>
      )}

      <Link
        to={getPlaceOrderUrl(plan.id, applied)}
        className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3.5 font-semibold hover:bg-blue-500"
      >
        Continue to place order
      </Link>
    </aside>
  );
}
