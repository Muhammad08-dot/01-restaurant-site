import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'The room, the fire and the plates — photographs from service at Saffron & Ash on SE Ash Street.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Nine frames from an ordinary week."
        intro="Shot between tables by our lead server, on a phone older than the dining room. Nothing styled, nothing retouched — the light in here does most of the work."
      />
      <section className="shell py-14 md:py-20">
        <GalleryGrid />
      </section>
    </>
  );
}
