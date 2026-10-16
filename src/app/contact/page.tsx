import type { Metadata } from 'next';
import { Mail, MapPin, Phone, CalendarClock, Megaphone, Briefcase } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { restaurant } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact & Directions',
  description:
    'Find Saffron & Ash at 214 SE Ash Street in Portland. Phone, email, transit directions, private dining and press enquiries.',
};

const contacts = [
  {
    icon: Phone,
    label: 'The room',
    value: restaurant.phone,
    href: restaurant.phoneHref,
    note: 'Answered 2–4 pm, Tuesday to Sunday. Voicemail otherwise — we return it the same day.',
  },
  {
    icon: Mail,
    label: 'General',
    value: restaurant.email,
    href: `mailto:${restaurant.email}`,
    note: 'Lost a scarf, found a spouse, want the baklava recipe — all fine here.',
  },
  {
    icon: Briefcase,
    label: 'Private dining',
    value: 'printroom@saffronandash.com',
    href: 'mailto:printroom@saffronandash.com',
    note: 'The upstairs print room seats 12. Events from $85 a head, two weeks’ notice.',
  },
  {
    icon: Megaphone,
    label: 'Press',
    value: 'press@saffronandash.com',
    href: 'mailto:press@saffronandash.com',
    note: 'Chef Elif is available for interviews on Mondays, which is our only closed day. On purpose.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact · Bize ulaşın"
        title="Behind the blue awning, two blocks east of 11th."
        intro="If you can smell olive wood from the sidewalk, you’ve arrived. The rest of the details are below."
      />

      {/* Contact methods */}
      <section className="shell py-14 md:py-20">
        <div className="grid gap-x-14 gap-y-10 md:grid-cols-2">
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 60}>
              <div className="flex gap-4 border-b border-line pb-8">
                <c.icon size={19} className="mt-1 shrink-0 text-terracotta" aria-hidden />
                <div>
                  <h2 className="eyebrow">{c.label}</h2>
                  <a
                    href={c.href}
                    className="mt-2 block font-display text-xl font-medium text-ink transition-colors hover:text-terracotta"
                  >
                    {c.value}
                  </a>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{c.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Hours + getting here */}
      <section className="border-y border-line bg-parchment">
        <div className="shell grid gap-12 py-16 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h2 className="flex items-center gap-2.5 text-title font-display font-medium">
              <CalendarClock size={20} className="text-terracotta" aria-hidden />
              Opening hours
            </h2>
            <dl className="mt-6 divide-y divide-line text-sm">
              {restaurant.hours.map((h) => (
                <div key={h.days} className="flex items-baseline justify-between gap-6 py-3">
                  <dt className="font-medium text-ink">{h.days}</dt>
                  <dd className={h.time === 'Closed' ? 'text-ink-faint' : 'text-ink-soft'}>
                    {h.time}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-ink-faint">
              Last kitchen order 45 minutes before close. Bar keeps pouring
              while anyone is still arguing pleasantly.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="flex items-center gap-2.5 text-title font-display font-medium">
              <MapPin size={20} className="text-terracotta" aria-hidden />
              Getting here
            </h2>
            <div className="prose-editorial mt-6 text-sm">
              <p>
                <strong className="font-medium text-ink">By street:</strong>{' '}
                {restaurant.address.full}. Two blocks east of SE 11th, the
                converted print shop with the blue awning and the chimney that
                shouldn’t be there.
              </p>
              <p>
                <strong className="font-medium text-ink">By transit:</strong>{' '}
                Line 15 Ash/Stark stops at 11th &amp; Ash — two minutes’ walk,
                down the hill and back.
              </p>
              <p>
                <strong className="font-medium text-ink">By car:</strong> Free
                street parking after 6 pm; the SmartLot on Ash (between 10th
                and 11th) is a flat $4 for the evening. Bike racks on the north
                wall, next to the fire escape nobody admits to.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map embed */}
      <section className="shell py-14 md:py-20" aria-label="Map">
        <div className="overflow-hidden rounded-card border border-line">
          <iframe
            title={`Map showing Saffron & Ash at ${restaurant.address.full}`}
            src={restaurant.mapEmbedUrl}
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-xs text-ink-faint">
          Map data © OpenStreetMap contributors ·{' '}
          <a
            href={restaurant.mapLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta underline decoration-terracotta/40 underline-offset-2 hover:decoration-terracotta"
          >
            Open this location in Google Maps
          </a>
        </p>
      </section>
    </>
  );
}
