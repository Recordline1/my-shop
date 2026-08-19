import { Brand } from "@shared/types/brand";

export const BrandMarquee = ({ brands }: { brands: Brand[]}) => {
  if (brands.length === 0) return null;

  const renderBrands = (hidden: boolean) =>
    brands.map((brand) => (
      <span
        key={brand.slug}
        aria-hidden={hidden || undefined}
        className="shrink-0 text-3xl font-bold tracking-wide text-gray-300 hover:text-amber-600 transition-colors select-none"
      >
        {brand.name}
      </span>
    ));

  return (
    <section className="mb-12">

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <div className="flex shrink-0 items-center gap-16 pr-16">
            {renderBrands(false)}
          </div>
          <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden="true">
            {renderBrands(true)}
          </div>
        </div>
      </div>
    </section>
  );
};