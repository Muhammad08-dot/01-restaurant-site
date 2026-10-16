import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { photos, restaurant, unsplash } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'How a kitchen in Antakya and a grill in Portland became Saffron & Ash — chef Elif Doğan, the hearth, and the room built around it.',
};

/* A short, specific history — real restaurants have one */
const timeline = [
  {
    year: '2016',
    title: 'A wedding in Antakya',
    text: 'Theo Marsh, home cook and chronic wedding guest, watches twelve people work a single mangal for four hundred. He writes Elif a very bad poem about it.',
  },
  {
    year: '2018',
    title: 'The brick firebox',
    text: 'Elif returns from Kayseri with a mantı rolling pin and a refusal to compromise on tail-fat ratios. The firebox is built in a rented garage on Division Street, mostly wrong, then mostly right.',
  },
  {
    year: '2019',
    title: 'Twenty-eight seats on Ash Street',
    text: 'A former print shop with good bones and better north light. The lease signed the week the room was poured. Opening night: forty covers, no reservations system, one very long list on paper.',
  },
  {
    year: '2022',
    title: 'Sunday serpme begins',
    text: 'During a slow January, the kitchen starts laying out brunch family-style the way Elif’s grandmother did — everything at once, no courses. It never left the schedule.',
  },
  {
    year: '2024',
    title: 'The olive wood contract',
    text: 'A two-year negotiation ends: a sustained-yield orchard near Nizip ships a container of pruned olive wood a year. Half of it burns at Saffron & Ash.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story · Hikâyemiz"
        title="Two kitchens, one fire, and a print shop with good north light."
        intro={restaurant.tagline}
      />

      {/* Chef split */}
      <section className="shell py-section">
        <div className="grid items-start gap-12 lg:grid-cols-[5fr_4fr] lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-card border border-line">
              <Image
                src={unsplash(photos.kofte, 1000, 75)}
                alt="Freshly grilled köfte spoons being plated on charred greens in the Saffron & Ash test kitchen"
                width={1000}
                height={1250}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="w-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs italic text-ink-faint">
              The test kitchen, 2019 — the first batch of Adana the room ever threw.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-display font-display font-medium">
              Elif Doğan, chef
            </h2>
            <div className="prose-editorial mt-5">
              <p>
                Elif learned to cook standing on a step in her grandmother’s
                kitchen in Antakya, where the pepper was pulled from the ceiling
                and the argument about pistachios was permanent. She trained
                through Ankara hotel kitchens, quit, cooked on a boat for a
                season, and came back to the fire.
              </p>
              <p>
                Her rule for this kitchen is simple: nothing meets the grill
                that doesn’t need it, and nothing that does gets rushed. The
                Adana is worked by hand at 4 am. The aubergines go into the
                ash, not the oven. The menu is hers, and she defends it like
                family.
              </p>
              <p>
                Theo Marsh runs the cold side and the list — Anatolian grapes
                first, Willamette when the weather agrees. They are not married.
                The restaurant is the relationship.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-terracotta pl-5">
              <p className="font-display text-lg italic leading-snug text-ink">
                “Smoke is a seasoning, not a stunt. If you leave here smelling
                like the fire, we did it right.”
              </p>
              <cite className="mt-2 block text-sm not-italic text-ink-faint">
                — Elif Doğan, to the Portland Monthly food desk, 2023
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Timeline band */}
      <section className="border-y border-line bg-parchment">
        <div className="shell py-section">
          <Reveal>
            <p className="eyebrow">How we got here</p>
            <h2 className="mt-3 text-display font-display font-medium">
              Eight years, five honest milestones
            </h2>
          </Reveal>
          <ol className="mt-12 space-y-0">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 60}>
                <div className="grid gap-2 border-t border-line py-8 md:grid-cols-[7rem_1fr] md:gap-10">
                  <span className="font-display text-xl font-medium text-terracotta tabular-nums">
                    {t.year}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium">{t.title}</h3>
                    <p className="mt-2 max-w-prose text-[0.9375rem] leading-relaxed text-ink-soft">
                      {t.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Room + CTA */}
      <section className="shell py-section">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-card border border-line">
              <Image
                src={unsplash(photos.diningRoom, 1200, 75)}
                alt="The dining room at dusk — dark timber tables, brass pendants and the hearth glowing at the far wall"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-display font-display font-medium">
              The room seats twenty-eight. It feels like more.
            </h2>
            <p className="mt-5 max-w-prose text-lead text-ink-soft">
              Long tables, low light, the hearth at the far end doing what it
              sounds like it’s doing. The private print room upstairs takes
              twelve and keeps its own door — for birthdays, wakefuls, and at
              least one divorce settlement we know about.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/reservation" className="btn-primary">
                Reserve <ArrowRight size={15} aria-hidden />
              </Link>
              <Link href="/gallery" className="btn-ghost">
                See the gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
