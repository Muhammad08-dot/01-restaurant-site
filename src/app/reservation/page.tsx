import type { Metadata } from 'next';
import Image from 'next/image';
import { CalendarDays, Phone, UtensilsCrossed } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import ReservationForm from '@/components/ReservationForm';
import { photos, restaurant, unsplash } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Reservations',
  description:
    'Book a table at Saffron & Ash. Dinner Tuesday through Sunday on SE Ash Street, Portland — or take the six-seat hearth counter, walk-in only.',
};

const houseRules = [
  {
    icon: CalendarDays,
    title: 'The book opens weekly',
    text: 'Every Tuesday at 9 am we release next week’s seatings. Friday and Saturday go fast; the 7:00 table usually dies in eleven minutes.',
  },
  {
    icon: Phone,
    title: 'Nine or more, call the room',
    text: `Large tables are handled by a person, not a form. ${restaurant.phone}, Tuesday to Sunday afternoons.`,
  },
  {
    icon: UtensilsCrossed,
    title: 'Fifteen minutes, then the counter',
    text: 'Holdings lapse at :15 past. Late is fine — we’ll seat you at the hearth counter and bring your order to you.',
  },
];

export default function ReservationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reservations · Rezervasyon"
        title="Twenty-eight seats. Here’s how to get one."
        intro="Everything below goes straight to the host stand. If you’d rather talk to a person, we answer the phone between 2 and 4 pm, which is when the kitchen is actually quiet enough to."
      />

      <section className="shell py-14 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
          {/* Form column */}
          <Reveal>
            <h2 className="text-title font-display font-medium">
              Request a table
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              Fields marked by nothing are still required. We’re not lawyers.
            </p>
            <div className="mt-8">
              <ReservationForm />
            </div>
          </Reveal>

          {/* Side column: room photo + house rules */}
          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-card border border-line">
              <Image
                src={unsplash(photos.sharedTable, 900, 72)}
                alt="Overhead view of four people sharing several plates at a long table"
                width={900}
                height={640}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="w-full object-cover"
              />
            </div>
            <ul className="mt-8 space-y-7">
              {houseRules.map((r) => (
                <li key={r.title} className="flex gap-4">
                  <r.icon
                    size={18}
                    className="mt-0.5 shrink-0 text-terracotta"
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-display text-[1.0625rem] font-medium">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {r.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-card border border-terracotta-light bg-terracotta-wash/50 p-5 text-sm leading-relaxed text-ink">
              <strong className="font-medium">Feeding a crowd tonight?</strong>{' '}
              The hearth counter (six seats, first come) opens at 5 pm. Sunday
              serpme brunch needs no reservation at all — come at ten, leave
              when the last börek is gone.
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
