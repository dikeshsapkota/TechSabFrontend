import { Navigate, useSearchParams } from "react-router-dom";
import SiteLayout from "../layouts/SiteLayout";
import CheckoutProgress from "../features/booking/components/CheckoutProgress";
import OrderFormField from "../features/booking/components/OrderFormField";
import PreviousStepLink from "../features/booking/components/PreviousStepLink";
import {
  PROMO_CODE,
  findPackage,
  formatPrice,
  getCheckoutUrl,
  getDiscountedPrice,
  hasPromoDiscount,
} from "../features/booking/booking";

export default function PlaceOrder() {
  const [params] = useSearchParams();
  const plan = findPackage(params.get("plan"));
  if (!plan) return <Navigate to="/website-packages" replace />;
  const discounted = hasPromoDiscount(params.get("discount"));
  const total = discounted ? getDiscountedPrice(plan.amount) : plan.amount;
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/your-form-id";

  return (
    <SiteLayout>
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <CheckoutProgress current={3} />
          <PreviousStepLink to={getCheckoutUrl(plan.id, discounted)}>
            Previous step: review order
          </PreviousStepLink>
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Final step</span>
            <h1 className="mt-3 text-4xl font-extrabold text-gray-900">Place your order</h1>
            <p className="mt-3 text-gray-600">Send your project details and our team will contact you to confirm the booking.</p>
          </div>
          <form action={endpoint} method="POST" className="mt-10 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
            <input type="hidden" name="package" value={plan.name} />
            <input type="hidden" name="promo_code" value={discounted ? PROMO_CODE : "None"} />
            <input type="hidden" name="final_price" value={formatPrice(total)} />
            <input type="hidden" name="_subject" value={`New Techsab booking: ${plan.name}`} />
            <div className="mb-8 flex items-center justify-between rounded-2xl bg-blue-50 p-5">
              <div>
                <p className="font-bold text-gray-900">{plan.name}</p>
                <p className="text-sm text-gray-500">{discounted ? `${PROMO_CODE} applied` : "Standard price"}</p>
              </div>
              <p className="text-xl font-bold text-blue-700">{formatPrice(total)}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <OrderFormField label="Full name" required name="name" />
              <OrderFormField label="Email address" required type="email" name="email" />
              <OrderFormField label="Phone number" required type="tel" name="phone" />
              <OrderFormField label="Business name" name="business" />
            </div>
            <OrderFormField
              textarea
              label="Project details"
              required
              name="project_details"
              rows="5"
              placeholder="Tell us about your website, goals, and preferred timeline..."
            />
            <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700">
              Place order <i className="fa-solid fa-paper-plane" />
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
