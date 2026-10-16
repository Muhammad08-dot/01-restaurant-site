import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import MenuTabs from '@/components/MenuTabs';
import { Leaf, Sprout, WheatOff, Flame } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Meze, wood-grilled köfte and kebabs, hearth-baked desserts and Anatolian wine on our seasonal menu — served Tuesday through Sunday in Portland.',
};

const legend = [
  { icon: Leaf, label: 'Vegetarian' },
  { icon: Sprout, label: 'Vegan' },
  { icon: WheatOff, label: 'Gluten-free' },
  { icon: Flame, label: 'From the wood fire' },
];

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="The menu · Menü"
        title="Everything on this list was written for the fire we actually have."
        intro="The menu turns with the seasons and the coals — if a dish below has been gone for a week, it was the chef’s choice, not the supplier’s. Prices include the room, the bread and the butter; service is not."
      />

      <section className="shell py-14 md:py-20">
        {/* Dietary legend */}
        <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2 border-y border-line py-4">
          {legend.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-faint"
            >
              <Icon size={13} strokeWidth={1.75} aria-hidden /> {label}
            </span>
          ))}
        </div>

        <MenuTabs />

        <aside className="mt-16 rounded-card border border-line bg-paper p-6 md:p-8">
          <h2 className="font-display text-lg font-medium">Good to know</h2>
          <ul className="mt-4 grid gap-x-10 gap-y-2 text-sm leading-relaxed text-ink-soft md:grid-cols-2">
            <li>· The kitchen can adapt most meze for allergies — tell us when you book, not when you arrive.</li>
            <li>· Bread, olives and whipped lor come to every table — $6, and you will finish them.</li>
            <li>· Künefe takes twenty minutes. It is worth twenty minutes.</li>
            <li>· Sunday serpme brunch is one price, $34 a head, served until the kitchen runs out — usually 1:30.</li>
          </ul>
        </aside>
      </section>
    </>
  );
}
