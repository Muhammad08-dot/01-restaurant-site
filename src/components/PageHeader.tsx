import Reveal from './Reveal';

/**
 * Interior-page header. Carries the fixed-navbar offset (pt-[68px]) and a
 * typographic intro band used by every page except the home hero.
 */
export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-line bg-cream pt-[68px]">
      <div className="shell py-16 md:py-20">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 max-w-2xl text-display font-display font-medium">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-prose text-lead text-ink-soft">{intro}</p>
          )}
        </Reveal>
      </div>
    </div>
  );
}
