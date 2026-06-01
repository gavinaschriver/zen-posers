import ContactForm from "./contact-form";
import Nav from "./nav";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=DRKMTTR+Collective+1111+Dickerson+Pike+Nashville+TN+37207";
const GOOGLE_MEET_URL = "https://meet.google.com/nho-iacm-kxw";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* ─── HERO: 50/50 SPLIT ─── */}
      <section
        id="top"
        className="min-h-screen flex flex-col md:flex-row pt-[60px]"
      >
        {/* Left: Hero image */}
        <div className="flex-1 min-h-[50vh] bg-gradient-to-br from-warm to-[#b0a392] flex items-center justify-center relative overflow-hidden">
          {/* Replace this div with an <Image> tag pointing to your hero image in /public */}
          <svg
            viewBox="0 0 200 200"
            className="w-56 h-56 opacity-25"
            aria-hidden="true"
          >
            <path
              d="M100 20 C 145 20, 180 55, 180 100 C 180 145, 145 180, 100 180 C 55 180, 20 145, 20 100 C 20 60, 48 28, 85 22"
              fill="none"
              stroke="#292524"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute bottom-6 left-6 text-xs italic text-stone tracking-wide">
            replace with your hero image
          </span>
        </div>

        {/* Right: Intro text */}
        <div className="flex-1 flex items-center justify-center p-12 md:p-16 md:border-l border-sand/30">
          <div className="max-w-md">
            <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed text-ink">
              Zen Posers is a community meditation practice group based in
              Nashville, TN.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 mt-7 text-sm text-stone border-b border-sand pb-0.5 hover:text-ink hover:border-ink transition-colors tracking-wide"
            >
              Learn more
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M8 3v10M4 9l4 4 4-4" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / CONTACT: 50/50 SPLIT ─── */}
      <section className="flex flex-col md:flex-row border-t border-sand/30">
        {/* Left: About / Schedule */}
        <div
          id="about"
          className="flex-1 p-12 md:p-16 flex items-start justify-center scroll-mt-16"
        >
          <div className="max-w-md">
            <h2 className="font-serif text-sm font-medium tracking-[0.12em] uppercase text-stone mb-8">
              When &amp; Where
            </h2>
            <p className="font-serif text-xl md:text-2xl font-light leading-relaxed text-ink">
              We sit regularly on Saturday mornings at 9AM CST, in person at{" "}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="zen-link"
              >
                DRKMTTR Collective
              </a>{" "}
              and{" "}
              <a
                href={GOOGLE_MEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="zen-link"
              >
                online
              </a>
              .
            </p>
          </div>
        </div>

        {/* Right: Contact */}
        <div
          id="contact"
          className="flex-1 p-12 md:p-16 flex items-start justify-center md:border-l border-sand/30 scroll-mt-16"
        >
          <div className="max-w-md w-full">
            <h2 className="font-serif text-sm font-medium tracking-[0.12em] uppercase text-stone mb-3">
              Get in Touch
            </h2>
            <p className="text-sm leading-relaxed text-stone mb-8">
              Reach out to join our WhatsApp group to stay informed about
              practice details or with any questions.
            </p>

            <ContactForm />

            <p className="mt-8 text-[13px] italic leading-relaxed text-sand">
              We&apos;re a small group so while we do our best to show up every
              week, there may be some weeks when no facilitator is available; our
              WhatsApp group is the best way to confirm we&apos;ll be present.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PROGRAMMING: FULL WIDTH ─── */}
      <section
        id="programming"
        className="border-t border-sand/30 p-12 md:p-16 flex justify-center scroll-mt-16"
      >
        <div className="max-w-2xl">
          <h2 className="font-serif text-sm font-medium tracking-[0.12em] uppercase text-stone mb-8">
            Programming
          </h2>
          <p className="font-serif text-lg md:text-xl font-light leading-relaxed text-ink">
            Our usual program consists of two sits of approximately 30 minutes
            and auxiliary practices such as kinhin (walking meditation), okyo
            (chanting service based in Zen traditions), tea ceremony, and open
            sangha discussion.
          </p>
          <p className="font-serif text-lg md:text-xl font-light leading-relaxed text-ink mt-6">
            Attendance is always free. If you wish to donate, you can find us{" "}
            <a
              href="https://venmo.com/zenposers"
              target="_blank"
              rel="noopener noreferrer"
              className="zen-link"
            >
              @zenposers on Venmo
            </a>
            . All proceeds go directly to our hosts DRKMTTR, who let us hold our
            meets without charge and contribute vital resources for the Nashville
            community at large.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-sand/30 px-12 py-8 flex justify-between items-center">
        <span className="font-serif text-sm text-sand tracking-wide">
          zen posers · nashville, tn
        </span>
        <a
          href="https://instagram.com/zenposers"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone hover:text-ink transition-colors"
          aria-label="Instagram"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle
              cx="17.5"
              cy="6.5"
              r="1.5"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </a>
      </footer>
    </div>
  );
}
