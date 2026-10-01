import type { Metadata } from "next";
import { galleryImages } from "@/lib/gallery";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Garur Civil Society — library, events, public programmes and community work in the hills of Bageshwar, Uttarakhand.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="bg-leaf border-b border-black/5">
        <div className="container-page py-10 sm:py-14">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-brand-green hover:text-brand-navy transition-colors"
          >
            <span aria-hidden>←</span>
            <span>Back to home</span>
          </a>
          <h1 className="heading-display mt-4 text-4xl sm:text-5xl font-bold text-brand-navy">
            Gallery
          </h1>
          <div className="mt-3 h-1 w-16 bg-brand-orange rounded-full" />
          <p className="mt-5 text-lg text-neutral-700 max-w-2xl leading-relaxed">
            Moments from the hills — the Garur Civil Library, public programmes,
            community events and the people who make the work possible.
          </p>
          <p className="mt-3 text-sm text-neutral-500">
            {galleryImages.length} photos
          </p>
        </div>
      </header>

      {/* GRID */}
      <section className="bg-white">
        <div className="container-page py-10 sm:py-14">
          <GalleryGrid images={galleryImages as unknown as { src: string; w: number; h: number }[]} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-black/5">
        <div className="container-page py-8 text-sm text-neutral-500 text-center">
          © {new Date().getFullYear()} Garur Civil Society · Garur, Bageshwar, Uttarakhand
        </div>
      </footer>
    </main>
  );
}
