import Link from "next/link";
import {  MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import {FacebookIcon} from "@shared/icons/FacebookIcon";
import {InstagramIcon} from "@shared/icons/InstagramIcon";

const FOOTER_LINKS = {
  catalog: [
    { label: "Спальня", href: "/catalog?category=bedroom" },
    { label: "Кухня", href: "/catalog?category=kitchen" },
    { label: "Дивани", href: "/catalog?category=sofa" },
    { label: "Крісла", href: "/catalog?category=chair" },
    { label: "Столи", href: "/catalog?category=table" },
  ],
  company: [
    { label: "Про нас", href: "/about" },
    { label: "Контакти", href: "/contacts" },
    { label: "Доставка і оплата", href: "/delivery" },
    { label: "Повернення товару", href: "/returns" },
    { label: "Гарантія", href: "/warranty" },
  ],
  account: [
    { label: "Мій профіль", href: "/profile" },
    { label: "Історія замовлень", href: "/profile/orders" },
    { label: "Кошик", href: "/cart" },
  ],
};

export const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 mt-20">
    <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
      <div className="col-span-2 md:col-span-1">
        <span className="text-2xl font-bold text-white tracking-wide">FURNI</span>
        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
          Меблі, які створюють затишок у вашому домі. Якісні матеріали та дизайн, що триватиме роками.
        </p>
        <div className="flex gap-3 mt-5">
          <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-amber-600 transition-colors">
            <FacebookIcon size={16} />
          </a>
          <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-amber-600 transition-colors">
            <InstagramIcon size={16} />
          </a>
          <a href="#" aria-label="Telegram" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-amber-600 transition-colors">
            <MessageCircle size={16} />
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Каталог</h3>
        <ul className="space-y-2.5 text-sm">
          {FOOTER_LINKS.catalog.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-amber-500 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Компанія</h3>
        <ul className="space-y-2.5 text-sm">
          {FOOTER_LINKS.company.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-amber-500 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Контакти</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <Phone size={16} className="mt-0.5 shrink-0 text-amber-500" />
            <a href="tel:+380000000000" className="hover:text-amber-500 transition-colors">
              +380 (00) 000-00-00
            </a>
          </li>
          <li className="flex items-start gap-2">
            <Mail size={16} className="mt-0.5 shrink-0 text-amber-500" />
            <a href="mailto:info@portfoliothe.pics" className="hover:text-amber-500 transition-colors">
              info@portfoliothe.pics
            </a>
          </li>
          <li className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-amber-500" />
            <span>Київ, Україна</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <span>© {new Date().getFullYear()} FURNI. Всі права захищені.</span>
        <div className="flex items-center gap-4">
          <span>Оплата: Картка · Готівка · Nova Poshta</span>
        </div>
      </div>
    </div>
  </footer>
);