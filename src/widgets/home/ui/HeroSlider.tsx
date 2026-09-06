'use client'

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface Slide {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

const SLIDES: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1758448511322-8bfc73daf606?fm=jpg&q=80&w=2000&auto=format&fit=crop",
    eyebrow: "Нова колекція 2026",
    title: "Меблі, які створюють затишок",
    description: "Якісні матеріали, продумана ергономіка та дизайн, що триватиме роками.",
    ctaLabel: "Перейти до каталогу",
    ctaHref: "/catalog",
  },
  {
    image: "https://images.unsplash.com/photo-1757344454333-cc666252e596?fm=jpg&q=80&w=2000&auto=format&fit=crop",
    eyebrow: "Спальня",
    title: "Простір для справжнього відпочинку",
    description: "Ліжка, тумби та шафи, які перетворять спальню на місце сили.",
    ctaLabel: "Дивитись спальні",
    ctaHref: "/catalog?category=bedroom",
  },
  {
    image: "https://images.unsplash.com/photo-1758448511322-8bfc73daf606?fm=jpg&q=80&w=2000&auto=format&fit=crop",
    eyebrow: "Розпродаж",
    title: "Знижки до 30% на обрані меблі",
    description: "Встигніть обрати улюблені моделі за вигідною ціною, поки товар в наявності.",
    ctaLabel: "Переглянути знижки",
    ctaHref: "/catalog?label=sale",
  },
];

export const HeroSlider = () => (
  <section className="relative rounded-2xl overflow-hidden mb-12 -mx-4 h-[420px] md:h-[560px]">
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className="hero-swiper h-full"
    >
      {SLIDES.map((slide, i) => (
        <SwiperSlide key={i} className="relative">
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-gray-900/20" />

          <div className="relative z-10 h-full flex flex-col justify-center max-w-xl px-8 md:px-12">
            <p className="text-amber-400 font-bold mb-3 animate-fade-up">{slide.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-up">
              {slide.title}
            </h1>
            <p className="text-gray-200 mb-8 italic animate-fade-up">{slide.description}</p>
            <Link
              href={slide.ctaHref}
              className="inline-block w-fit bg-amber-600 hover:bg-amber-700 transition-colors px-6 py-3 rounded-lg font-bold text-white text-lg shadow-md shadow-amber-600/30 animate-fade-up"
            >
              {slide.ctaLabel}
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);