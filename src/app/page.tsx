import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Flame, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { menu, photos, restaurant, testimonials, unsplash } from '@/lib/data';

/**
 * Home — opens on the room and the fire, not a centered marketing hero.
 * Layout rhythm: full-bleed image → editorial split → pull-quote band →
 * asymmetric feature → hours strip → CTA.
 */
export default function HomePage() {
  const fireItems = menu.find((c) => c.id === 'ates')!.items.slice(0, 4);
  const mezeItems = menu.find((c) => c.id === 'meze')!.items.slice(0, 4);

  return (
    <>
      {/* ============ HERO — image left, type right, full viewport ============ */}
      <section className="relative min-h-[100svh] bg-ink" aria-label="Welcome">
        <Image
          src={unsplash(photos.heroDish, 1800, 72)}
          alt="A candlelit table at Saffron & Ash with a plated meze course being set down"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-shell flex-col justify-end px-5 pb-16 pt-[68px] sm:px-8 lg:px-10 lg:pb-24">
          <p className="eyebrow !text-terracotta-light">
            Anatolian wood-fire kitchen · SE Ash Street, Portland
          </p>
          <h1 className="mt-4 max-w-3xl text-hero font-display font-medium text-cream">
            Dinner starts
            <span className="italic text-terracotta-light"> when the fire </span>
            says so.
          </h1>
          <p className="mt-6 max-w-md text-lead text-cream/80">
            {restaurant.tagline}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/reservation" className="btn-primary">
              Reserve a table <ArrowRight size={15} aria-hidden />
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-card border border-cream/30 px-6 py-3 text-sm font-medium tracking-wide text-cream transition-colors duration-200 hover:border-cream"
            >
              See the menu
            </Link>
          </div>
        </div>
      </section>

      {/* ============ INTRO — typographic band on parchment ============ */}
      <section className="border-b border-line bg-parchment">
        <div className="shell grid gap-10 py-section md:grid-cols-[auto_1fr] md:gap-16">
          <Reveal className="flex items-start gap-3 md:w-56 md:flex-col">
            <Flame size={22} className="text-terracotta" aria-hidden />
            <p className="eyebrow pt-1">Since {restaurant.founded}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="max-w-2xl text-display font-display font-medium">
              One hearth, two cooks, and a dining room built around the smell of
              olive wood.
            </h2>
            <div className="prose-editorial mt-6 max-w-prose">
              <p>
                Elif Doğan grew up between Antakya and Ankara; her sous chef,
                Theo Marsh, between here and the coast. Saffron &amp; Ash is
                what happens when those two kitchens share one fire — meze you
                pass to each other, köfte worked by hand, and Oregon produce
                treated like it belongs at an Anatolian table. Because it does.
              </p>
              <p>
                There are twenty-eight seats and a six-counter at the hearth.
                The rest is up to the fire and the season.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FEATURE — big image, overlapping menu card ============ */}
      <section className="shell py-section">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-0">
          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-card border border-line">
              <Image
                src={unsplash(photos.grillRibs, 1200, 75)}
                alt="Wood-grilled lamb ribs on a board with sumac onions and burnt peppers"
                width={1200}
                height={880}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5 lg:-ml-16">
            <div className="relative rounded-card border border-line bg-paper p-8 shadow-raised md:p-10">
              <p className="eyebrow">From the fire · Ateşten</p>
              <h2 className="mt-3 text-title font-display font-medium">
                The section the regulars order from memory
              </h2>
              <ul className="mt-6 divide-y divide-line/70 text-sm">
                {fireItems.map((item) => (
                  <li key={item.name} className="flex items-baseline py-3">
                    <span className="font-display text-[1.0625rem] font-medium text-ink">
                      {item.name}
                    </span>
                    <span className="leader" aria-hidden />
                    <span className="tabular-nums text-ink">${item.price}</span>
                  </li>
                ))}
              </ul>
              <Link href="/menu" className="btn-ghost mt-7 w-full">
                Full menu <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PULL QUOTE ============ */}
      <section className="bg-ink">
        <div className="shell py-20 md:py-24">
          <Reveal>
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="font-display text-2xl font-light italic leading-snug text-cream md:text-[1.75rem]">
                “{testimonials[0].quote}”
              </p>
              <footer className="mt-6 text-sm text-cream/60">
                <span className="text-terracotta-light">{testimonials[0].name}</span>
                {' · '}
                {testimonials[0].role}
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============ MEZE SPLIT — image right, list left ============ */}
      <section className="shell py-section">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Meze · Başlangıçlar</p>
            <h2 className="mt-3 text-display font-display font-medium">
              Start like everyone is related.
            </h2>
            <p className="mt-5 max-w-prose text-lead text-ink-soft">
              Meze isn’t appetizers — it’s the part of the meal where the
              talking happens. Plates go to the middle, hands cross, nobody
              says “is that the last one?” out loud.
            </p>
            <ul className="mt-8 max-w-md divide-y divide-line/70 text-sm">
              {mezeItems.map((item) => (
                <li key={item.name} className="flex items-baseline py-3">
                  <span className="font-display text-[1.0625rem] font-medium">
                    {item.name}
                  </span>
                  <span className="leader" aria-hidden />
                  <span className="tabular-nums text-ink">${item.price}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-card border border-line">
              <Image
                src={unsplash(photos.winterSalad, 1000, 75)}
                alt="A dark plate of charred kale salad with sumac onion and pomegranate"
                width={1000}
                height={1250}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="w-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs italic text-ink-faint">
              Acılı ezme and the winter kale — both fire-blistered, both arrive
              before you think you need them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ HOURS / VISIT STRIP ============ */}
      <section className="border-y border-line bg-parchment">
        <div className="shell grid gap-10 py-16 md:grid-cols-3 md:gap-8">
          <Reveal>
            <h2 className="flex items-center gap-2.5 font-display text-lg font-medium">
              <Clock size={17} className="text-terracotta" aria-hidden /> When
            </h2>
            <dl className="mt-4 space-y-2 text-sm">
              {restaurant.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt className="text-ink-soft">{h.days}</dt>
                  <dd className={h.time === 'Closed' ? 'text-ink-faint' : 'text-ink'}>
                    {h.time}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="flex items-center gap-2.5 font-display text-lg font-medium">
              <MapPin size={17} className="text-terracotta" aria-hidden /> Where
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {restaurant.address.street}, {restaurant.address.city}
              <br />
              Two blocks east of 11th, behind the blue awning. The street
              parking is free after 6; the SmartLot on Ash is $4 flat at night.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-terracotta hover:text-terracotta-dark"
            >
              Directions &amp; map <ArrowRight size={14} aria-hidden />
            </Link>
          </Reveal>
          <Reveal delay={160}>
            <h2 className="flex items-center gap-2.5 font-display text-lg font-medium">
              <Flame size={17} className="text-terracotta" aria-hidden /> How
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Reservations open every Tuesday for the following week. The
              six-seat hearth counter is walk-in only — arrive before five if
              you want it on a Friday.
            </p>
            <Link href="/reservation" className="btn-primary mt-5">
              Reserve a table
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
