import PageShell from "../components/PageShell";
import PricingCard from "../components/PricingCard";
import websitePackages from "../data/websitePackages";
import CheckoutSteps from "../components/CheckoutSteps";

export default function WebsitePackages() {
  return (
    <PageShell>
      <section className="section-padding">
        <div className="container-max">
          <CheckoutSteps current={1} />
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Website development</span>
            <h1 className="mt-3 text-4xl font-extrabold text-gray-900">Packages for every stage of growth</h1>
            <p className="mt-4 text-gray-600">Choose a clear starting point. We’ll confirm your requirements before development begins.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {websitePackages.map((plan) => <PricingCard key={plan.id} plan={plan} isHighlighted={plan.featured} />)}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
