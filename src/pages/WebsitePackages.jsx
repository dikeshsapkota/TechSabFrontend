import SiteLayout from "../layouts/SiteLayout";
import CheckoutProgress from "../features/booking/components/CheckoutProgress";
import PackageCard from "../features/booking/components/PackageCard";
import packages from "../features/booking/data/packages";

export default function WebsitePackages() {
  return (
    <SiteLayout>
      <section className="section-padding">
        <div className="container-max">
          <CheckoutProgress current={1} />
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Website development</span>
            <h1 className="mt-3 text-4xl font-extrabold text-gray-900">Packages for every stage of growth</h1>
            <p className="mt-4 text-gray-600">Choose a clear starting point. We’ll confirm your requirements before development begins.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((plan) => <PackageCard key={plan.id} plan={plan} />)}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
