import { Leaf, WheatOff, Flame, Sprout } from 'lucide-react';
import type { MenuItem } from '@/lib/data';

const tagMeta: Record<string, { icon: typeof Leaf; label: string }> = {
  v: { icon: Leaf, label: 'Vegetarian' },
  vg: { icon: Sprout, label: 'Vegan' },
  gf: { icon: WheatOff, label: 'Gluten-free' },
  fire: { icon: Flame, label: 'From the wood fire' },
};

/**
 * One menu line: name, dotted leader, price. Editorial print-menu layout —
 * the description sits under the dish, not in a card.
 */
export default function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <ul className="divide-y divide-line/70">
      {items.map((item) => (
        <li key={item.name} className="py-6 first:pt-2">
          {/* Name + leader + price on one baseline */}
          <div className="flex items-baseline">
            <h3 className="font-display text-lg font-medium text-ink">
              {item.name}
              {item.sub && (
                <span className="ml-2 font-body text-sm font-normal italic text-ink-faint">
                  {item.sub}
                </span>
              )}
            </h3>
            <span className="leader" aria-hidden />
            <span className="font-display text-lg font-medium tabular-nums text-ink">
              ${item.price}
            </span>
          </div>

          <p className="mt-2 max-w-prose text-[0.9375rem] leading-relaxed text-ink-soft">
            {item.description}
          </p>

          {item.tags && item.tags.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
              {item.tags.map((t) => {
                const meta = tagMeta[t];
                if (!meta) return null;
                const Icon = meta.icon;
                return (
                  <li
                    key={t}
                    title={meta.label}
                    className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-[0.14em] text-ink-faint"
                  >
                    <Icon size={12} strokeWidth={1.75} aria-hidden />
                    {meta.label}
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
