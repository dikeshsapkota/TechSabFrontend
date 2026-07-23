import { Navigate, useSearchParams } from "react-router-dom";
import SiteLayout from "../layouts/SiteLayout";
import CheckoutProgress from "../features/booking/components/CheckoutProgress";
import CheckoutSummary from "../features/booking/components/CheckoutSummary";
import PreviousStepLink from "../features/booking/components/PreviousStepLink";
import { findPackage, hasPromoDiscount } from "../features/booking/booking";

export default function Checkout() {
  const [params] = useSearchParams();
  const plan = findPackage(params.get("plan"));
  const hasSavedDiscount = hasPromoDiscount(params.get("discount"));

  if (!plan) return <Navigate to="/website-packages" replace />;

  return (
    <SiteLayout>
      <section className="section-padding">
        <div className="container-max">
          <CheckoutProgress current={2} />
          <PreviousStepLink to="/website-packages">Previous step: choose package</PreviousStepLink>

          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Checkout</span>
              <h1 className="mt-3 text-4xl font-extrabold text-gray-900">Review your package</h1>
              <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
                <p className="mt-2 text-gray-500">One-time website development project</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-600">
                      <i className="fa-solid fa-check mr-2 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <CheckoutSummary plan={plan} initiallyDiscounted={hasSavedDiscount} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
