import Image from "next/image";
import DonateModal from "@/components/DonateModal";

const focusAreas = [
  {
    title: "Legal Aid",
    body: "Free legal guidance and representation for those who cannot afford counsel, anchored by an Advocate of the High Court of Uttarakhand.",
    icon: "⚖️",
  },
  {
    title: "Education",
    body: "Spaces like the Garur Civil Library at Dilli Darbar Palace, Darshani Garur, give students a quiet, free place to read, study and grow.",
    icon: "📚",
  },
  {
    title: "Public Awareness",
    body: "Workshops, talks and grassroots campaigns on rights, health, addiction-free living and civic responsibility.",
    icon: "📢",
  },
  {
    title: "Health",
    body: "Connecting families in remote hill villages with preventive care, sanitation, maternal-child health resources — through Free Medical Camps held from time to time.",
    icon: "🩺",
  },
  {
    title: "Migrant Connection",
    body: "A bridge for people who have gone out to seek work in other states — keeping them connected to their parents, family and roots in the remote Himalayan hills of Uttarakhand.",
    icon: "🤝",
  },
];

const milestones = [
  { year: "14 April 2016", label: "Garur Civil Society founded and office inaugurated by social worker Radha Behen in Garur, Bageshwar" },
  { year: "Library", label: "Garur Civil Library opened at Dilli Darbar Palace, Darshani Garur" },
  { year: "#Mission21", label: "Convenor of #Mission21 — a Vyasan Mukt (addiction-free) movement for the 21st century" },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-leaf">
        <div className="container-page pt-16 pb-20 sm:pt-24 sm:pb-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold tracking-wide uppercase">
              Garur · Bageshwar · Uttarakhand · Since 2016
            </span>
            <h1 className="heading-display mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-brand-navy leading-[1.05]">
              Garur Civil Society
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-700 max-w-xl leading-relaxed">
              A grassroots non-profit working on{" "}
              <span className="text-brand-orange font-semibold">legal aid</span>,{" "}
              <span className="text-brand-orange font-semibold">education</span>,{" "}
              <span className="text-brand-orange font-semibold">public awareness</span>,{" "}
              <span className="text-brand-orange font-semibold">health</span> and{" "}
              <span className="text-brand-orange font-semibold">migrant connection</span>{" "}
              in the hill district of Uttarakhand.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#donate" className="btn-primary">
                Donate Now
              </a>
              <a href="#about" className="btn-ghost">
                Learn More
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl bg-white shadow-xl border border-black/5 flex items-center justify-center p-6">
              <Image
                src="/logo-horizontal.jpg"
                alt="Garur Civil Society — Connecting Family to Home"
                width={1280}
                height={426}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section bg-white">
        <div className="container-page grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="heading-display text-3xl sm:text-4xl font-bold text-brand-navy">
              About Us
            </h2>
            <div className="mt-3 h-1 w-16 bg-brand-orange rounded-full" />
          </div>
          <div className="md:col-span-2 space-y-5 text-neutral-700 text-lg leading-relaxed">
            <p>
              Garur Civil Society was founded in 2016 to serve the people of the Garur
              valley in Bageshwar, a hill district of Uttarakhand. We work where the
              state reaches late — supporting families, students and workers with the
              resources and rights they are entitled to.
            </p>
            <p>
              Our work is rooted in the belief that{" "}
              <strong>civil society</strong> is the connective tissue of a healthy
              democracy. From a quiet reading room at Dilli Darbar Palace, Darshani
              Garur, to legal-aid clinics for those who cannot afford a lawyer, every
              programme is built with and for the community.
            </p>
            <p>
              Through{" "}
              <span className="font-semibold text-brand-green">#Mission21</span>, our
              founder also convenes a public movement for a Vyasan Mukt
              (addiction-free) Twenty-First Century — because the freedom to learn
              and work begins with the freedom from addiction.
            </p>
          </div>
        </div>
      </section>

      {/* LIBRARY IN ACTION */}
      <section className="section bg-leaf">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-xs font-semibold tracking-wide uppercase text-brand-green">
              Garur Civil Library
            </span>
            <h2 className="heading-display mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">
              A quiet room where hills learn to read
            </h2>
            <div className="mt-3 h-1 w-16 bg-brand-orange rounded-full" />
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              Run by Garur Civil Society at Dilli Darbar Palace, Darshani Garur, the
              library is a free reading and study space for students from the Garur
              valley — open every day, Wi-Fi enabled, and open to all girls and to
              underprivileged boys without charge.
            </p>
            <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
              For many students here, it is the only quiet place to study after
              school — and a doorway to national-level competitive exams.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-black/5 bg-white">
              <Image
                src="/library-kids.jpg"
                alt="Students reading at the Garur Civil Library"
                width={1600}
                height={900}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section id="focus" className="section bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-display text-3xl sm:text-4xl font-bold text-brand-navy">
              What We Do
            </h2>
            <p className="mt-3 text-neutral-700">
              Five pillars of work, grounded in the day-to-day realities of mountain life.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {focusAreas.map((a) => (
              <div key={a.title} className="card hover:-translate-y-1 transition-transform">
                <div className="text-3xl">{a.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-brand-navy">{a.title}</h3>
                <p className="mt-2 text-neutral-600 leading-relaxed text-[15px]">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY / MILESTONES */}
      <section className="section bg-white border-t border-black/5">
        <div className="container-page grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="heading-display text-3xl sm:text-4xl font-bold text-brand-navy">
              Our Journey
            </h2>
            <div className="mt-3 h-1 w-16 bg-brand-orange rounded-full" />
            <ol className="mt-10 border-l-2 border-brand-orange/40 pl-8 space-y-10">
              {milestones.map((m, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-brand-orange border-4 border-white shadow" />
                  <div className="text-sm font-semibold text-brand-orange uppercase tracking-wider">
                    {m.year}
                  </div>
                  <div className="mt-1 text-lg text-neutral-800">{m.label}</div>
                </li>
              ))}
            </ol>
          </div>
          <div className="md:pt-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-black/5 bg-white">
              <Image
                src="/library-inauguration.jpg"
                alt="Inauguration of Garur Civil Society on 14 April 2016 by social worker Radha Behen, with founder D.K. Joshi"
                width={1411}
                height={1411}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-3 text-center text-sm text-neutral-600 italic">
              14 April 2016 — the day Garur Civil Society was inaugurated.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder" className="section bg-leaf">
        <div className="container-page grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-white shadow-xl border border-black/5 flex items-center justify-center">
              <span className="text-6xl">👤</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <span className="text-xs font-semibold tracking-wide uppercase text-brand-green">
              Founder
            </span>
            <h2 className="heading-display mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">
              D.K. Joshi
            </h2>
            <p className="mt-1 text-neutral-500 italic">
              Advocate, High Court of Uttarakhand
            </p>
            <p className="mt-5 text-lg text-neutral-700 leading-relaxed">
              Advocate D.K. Joshi founded Garur Civil Society on 14 April 2016 to
              channel a lifetime of legal practice into direct community service.
              As Convenor of <strong>#Mission21</strong>, he also leads a public
              movement for a Vyasan Mukt (addiction-free) Twenty-First Century in
              the region.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/dkjoshi21"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Facebook
              </a>
              <a
                href="https://www.facebook.com/dkjoshiadv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Facebook (Adv)
              </a>
              <a
                href="https://in.linkedin.com/in/d-k-joshi-007304a3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Library inauguration photo — quiet visual proof */}
        <div className="container-page mt-16">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-xl border border-black/5 bg-white max-w-4xl mx-auto">
            <Image
              src="/student-medals.jpg"
              alt="D.K. Joshi with a Garur Civil Library student who won national medals"
              width={1200}
              height={1600}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-4 text-center text-sm text-neutral-600 italic max-w-2xl mx-auto">
            From a quiet reading room in Dilli Darbar Palace to national-level
            medals — the library's reach, one student at a time.
          </p>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="section bg-brand-navy text-white">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-display text-3xl sm:text-4xl font-bold">
              Support Our Work
            </h2>
            <p className="mt-4 text-white/85 text-lg leading-relaxed">
              Every contribution helps us run the library, offer free legal aid and reach more
              families in the hills. Scan the QR with any UPI app or tap the button to donate
              directly.
            </p>
            <div className="mt-7">
              <DonateModal />
            </div>
            <p className="mt-4 text-white/60 text-sm">
              UPI ID: <code className="text-white/90">QR919319805337-6623@unionbankofindia</code>
              <br />
              Payee: <span className="text-white/90">Garur Civil Society</span>
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white p-5 rounded-2xl shadow-2xl">
              <Image
                src="/donation-qr.jpeg"
                alt="Garur Civil Society UPI donation QR code"
                width={280}
                height={280}
                className="rounded-lg"
              />
              <p className="mt-3 text-center text-neutral-700 text-sm font-medium">
                Scan to donate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-black/5">
        <div className="container-page py-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Garur Civil Society"
              width={48}
              height={48}
              className="rounded-md"
            />
            <div>
              <div className="font-semibold text-brand-navy">Garur Civil Society</div>
              <div className="text-xs text-neutral-500">
                Garur, Bageshwar, Uttarakhand · #Mission21 · Since 2016
              </div>
            </div>
          </div>
          <div className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Garur Civil Society. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}