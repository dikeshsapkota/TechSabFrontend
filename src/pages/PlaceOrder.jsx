import { Navigate, useSearchParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import websitePackages from "../data/websitePackages";
import CheckoutSteps from "../components/CheckoutSteps";

const money = (value) => `Rs. ${value.toLocaleString("en-IN")}`;

export default function PlaceOrder() {
  const [params] = useSearchParams();
  const plan = websitePackages.find((item) => String(item.id) === params.get("plan"));
  if (!plan) return <Navigate to="/website-packages" replace />;
  const discounted = params.get("discount") === "TEEJ10";
  const total = discounted ? Math.round(plan.amount * 0.9) : plan.amount;
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/your-form-id";

  return (
    <PageShell>
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <CheckoutSteps current={3} />
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Final step</span>
            <h1 className="mt-3 text-4xl font-extrabold text-gray-900">Place your order</h1>
            <p className="mt-3 text-gray-600">Send your project details and our team will contact you to confirm the booking.</p>
          </div>
          <form action={endpoint} method="POST" className="mt-10 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
            <input type="hidden" name="package" value={plan.name} />
            <input type="hidden" name="promo_code" value={discounted ? "TEEJ10" : "None"} />
            <input type="hidden" name="final_price" value={money(total)} />
            <input type="hidden" name="_subject" value={`New Techsab booking: ${plan.name}`} />
            <div className="mb-8 flex items-center justify-between rounded-2xl bg-blue-50 p-5">
              <div><p className="font-bold text-gray-900">{plan.name}</p><p className="text-sm text-gray-500">{discounted ? "TEEJ10 applied" : "Standard price"}</p></div>
              <p className="text-xl font-bold text-blue-700">{money(total)}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-gray-700">Full name<input required name="name" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-blue-500" /></label>
              <label className="text-sm font-semibold text-gray-700">Email address<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-blue-500" /></label>
              <label className="text-sm font-semibold text-gray-700">Phone number<input required type="tel" name="phone" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-blue-500" /></label>
              <label className="text-sm font-semibold text-gray-700">Business name<input name="business" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-blue-500" /></label>
            </div>
            <label className="mt-5 block text-sm font-semibold text-gray-700">Project details<textarea required name="project_details" rows="5" placeholder="Tell us about your website, goals, and preferred timeline..." className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-blue-500" /></label>
            <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700">
              Place order <i className="fa-solid fa-paper-plane" />
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
