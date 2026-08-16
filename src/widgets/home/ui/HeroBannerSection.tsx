// widgets/home/ui/HeroBanner.tsx
import Image from "next/image";
import Link from "next/link";

export const HeroBannerSection = () => (
  <section className="relative rounded-2xl overflow-hidden px-8 py-16 md:py-28 mb-12">
    <Image
      src="https://images.unsplash.com/photo-1758448511322-8bfc73daf606?fm=jpg&q=80&w=2000&auto=format&fit=crop"
      alt=""
      fill
      priority
      className="object-cover"
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-gray-900/20" />

    <div className="relative z-10 max-w-xl">
      <p className="text-amber-400 font-medium mb-3">Нова колекція 2026</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Меблі, які створюють затишок
      </h1>
      <p className="text-gray-200 mb-8">
        Якісні матеріали, продумана ергономіка та дизайн, що триватиме роками.
      </p>
      <Link
        href="/catalog"
        className="inline-block bg-amber-600 hover:bg-amber-700 transition-colors px-6 py-3 rounded-lg font-medium"
      >
        Перейти до каталогу
      </Link>
    </div>
  </section>
);