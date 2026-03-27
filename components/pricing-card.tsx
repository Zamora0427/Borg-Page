type PricingCardProps = {
  name: string;
  price: string;
  featured?: boolean;
};

export function PricingCard({ name, price, featured = false }: PricingCardProps) {
  return (
    <article className={`card p-6 ${featured ? "border-brand-500 bg-brand-500/10 shadow-glow" : ""}`}>
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="mt-2 text-3xl font-bold text-white">{price}</p>
      <a
        href="/contact-us"
        className={`mt-6 block rounded-lg px-4 py-3 text-center font-semibold ${
          featured ? "bg-brand-500 text-white" : "border border-white/20 text-white hover:bg-white/10"
        }`}
      >
        Book a Demo
      </a>
    </article>
  );
}
