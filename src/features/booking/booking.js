import packages from "./data/packages";

export const PROMO_CODE = "TEEJ10";
export const DISCOUNT_RATE = 0.1;

export function findPackage(id) {
  return packages.find((item) => String(item.id) === String(id));
}

export function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString("en-IN")}`;
}

export function hasPromoDiscount(code) {
  return code === PROMO_CODE;
}

export function getDiscountedPrice(amount) {
  return Math.round(amount * (1 - DISCOUNT_RATE));
}

export function getCheckoutUrl(planId, discounted = false) {
  const params = new URLSearchParams({ plan: planId });
  if (discounted) params.set("discount", PROMO_CODE);
  return `/checkout?${params}`;
}

export function getPlaceOrderUrl(planId, discounted = false) {
  const params = new URLSearchParams({
    plan: planId,
    discount: discounted ? PROMO_CODE : "none",
  });
  return `/place-order?${params}`;
}
