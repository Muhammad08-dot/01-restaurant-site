import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-[68px] text-center">
      <p className="eyebrow">404 — gone to the counter</p>
      <h1 className="mt-4 text-display font-display font-medium">
        This page walked in without a reservation.
      </h1>
      <p className="mt-4 max-w-md text-lead text-ink-soft">
        The link is broken or the page has moved. The kitchen, however, is
        exactly where it always was.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Back to the front <ArrowRight size={15} aria-hidden />
        </Link>
        <Link href="/menu" className="btn-ghost">
          See the menu
        </Link>
      </div>
    </section>
  );
}
