import Link from 'next/link';
import { Clock, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { restaurant } from '@/lib/data';

/**
 * Three-column footer: identity + address, hours, and navigation.
 * Kept typographic — no card, no shadow, just a rule and breathing room.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-parchment/60">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-8">
        {/* Identity */}
        <div>
          <p className="font-display text-2xl font-semibold">
            Saffron <span className="text-terracotta">&</span> Ash
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
            A wood-fire Anatolian kitchen on SE Ash Street. Dinner Tuesday to
            Sunday; serpme brunch on Sunday mornings.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-ink-soft">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-terracotta" aria-hidden />
              <span>
                {restaurant.address.street}
                <br />
                {restaurant.address.city}
              </span>
            </li>
            <li>
              <a href={restaurant.phoneHref} className="flex items-center gap-2.5 hover:text-ink">
                <Phone size={15} className="shrink-0 text-terracotta" aria-hidden />
                {restaurant.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${restaurant.email}`} className="flex items-center gap-2.5 hover:text-ink">
                <Mail size={15} className="shrink-0 text-terracotta" aria-hidden />
                {restaurant.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <nav aria-label="Opening hours">
          <h2 className="eyebrow">Hours</h2>
          <dl className="mt-5 space-y-3 text-sm">
            {restaurant.hours.map((h) => (
              <div key={h.days} className="flex items-start gap-3">
                <dt className="w-36 shrink-0 text-ink">{h.days}</dt>
                <dd className={h.time === 'Closed' ? 'text-ink-faint' : 'text-ink-soft'}>
                  {h.time}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 flex items-center gap-2 text-xs text-ink-faint">
            <Clock size={13} aria-hidden />
            Kitchen takes its last order 45 minutes before close.
          </p>
        </nav>

        {/* Links */}
        <div>
          <h2 className="eyebrow">Visit</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { href: '/menu', label: 'The menu' },
              { href: '/reservation', label: 'Reservations' },
              { href: '/about', label: 'Our story' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/contact', label: 'Contact & directions' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink-soft transition-colors hover:text-terracotta">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-terracotta"
              >
                <Instagram size={14} aria-hidden /> @saffronandash
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col items-start justify-between gap-2 py-5 text-xs text-ink-faint sm:flex-row sm:items-center">
          <p>© {year} Saffron & Ash Restaurant Group. All rights reserved.</p>
          <p>
            Walk-ins welcome at the six-seat counter. No phones on the patio after 8.
          </p>
        </div>
      </div>
    </footer>
  );
}
