'use client';

import { useState } from 'react';
import { menu } from '@/lib/data';
import MenuList from './MenuList';

/**
 * Category tabs for the menu page. Tabs (not accordion) so guests can jump
 * straight to the fire section; an "All" view keeps printing/scrolling honest.
 */
export default function MenuTabs() {
  const [active, setActive] = useState<string>('all');
  const shown = active === 'all' ? menu : menu.filter((c) => c.id === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Menu categories"
        className="scrollbar-none -mx-5 flex gap-1 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0"
      >
        {[{ id: 'all', label: 'All' }, ...menu].map((c) => {
          const selected = active === c.id;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(c.id)}
              className={`shrink-0 rounded-card border px-4 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors duration-200 ${
                selected
                  ? 'border-terracotta bg-terracotta text-cream'
                  : 'border-line bg-paper text-ink-soft hover:border-terracotta-light hover:text-ink'
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 space-y-16">
        {shown.map((cat) => (
          <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
            <header className="flex flex-wrap items-baseline justify-between gap-x-6 border-b-2 border-ink pb-3">
              <h2 id={`cat-${cat.id}`} className="text-title font-display font-medium">
                {cat.label}
                <span className="ml-3 font-body text-sm font-normal italic text-ink-faint">
                  {cat.turkish}
                </span>
              </h2>
              <p className="max-w-sm text-[0.8125rem] italic leading-relaxed text-ink-soft">
                {cat.note}
              </p>
            </header>
            <div className="mt-2 md:grid md:grid-cols-2 md:gap-x-14">
              {/* Split long lists across two columns only when showing all */}
              <MenuList items={cat.items} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
