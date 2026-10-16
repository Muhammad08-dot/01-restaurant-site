'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { restaurant } from '@/lib/data';

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

/**
 * Sticky header. Transparent over the hero, solid once scrolled.
 * The reservation CTA is the loudest thing in the bar — everything else defers.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile drawer on navigation
  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open || pathname !== '/';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        solid
          ? 'border-b border-line bg-cream/95 backdrop-blur-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="shell flex h-[68px] items-center justify-between">
        <Link
          href="/"
          className={`font-display text-xl font-semibold tracking-tight ${
            solid ? 'text-ink' : 'text-cream'
          }`}
        >
          Saffron <span className="text-terracotta">&</span> Ash
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const active =
              l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={`text-[0.8125rem] font-medium uppercase tracking-[0.16em] transition-colors duration-200 ${
                  solid
                    ? active
                      ? 'text-terracotta'
                      : 'text-ink-soft hover:text-ink'
                    : active
                      ? 'text-terracotta-light'
                      : 'text-cream/80 hover:text-cream'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={restaurant.phoneHref}
            className={`flex items-center gap-1.5 text-sm ${
              solid ? 'text-ink-soft hover:text-ink' : 'text-cream/80 hover:text-cream'
            } transition-colors`}
          >
            <Phone size={14} strokeWidth={1.75} aria-hidden />
            {restaurant.phone}
          </a>
          <Link href="/reservation" className="btn-primary !py-2.5 !px-5">
            Reserve a table
          </Link>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`lg:hidden ${
            solid ? 'text-ink' : 'text-cream'
          } -my-2 p-2`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden border-t border-line bg-cream transition-[max-height] duration-300 ease-editorial ${
          open ? 'max-h-[420px]' : 'max-h-0 border-t-0'
        }`}
      >
        <nav aria-label="Mobile" className="shell flex flex-col py-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b border-line/60 py-3.5 font-display text-lg text-ink last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/reservation" className="btn-primary mt-4">
            Reserve a table
          </Link>
          <a
            href={restaurant.phoneHref}
            className="mt-3 flex items-center justify-center gap-2 py-2 text-sm text-ink-soft"
          >
            <Phone size={14} aria-hidden /> {restaurant.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
