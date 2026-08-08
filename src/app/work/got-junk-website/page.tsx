import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Got Junk | chavacodes4u",
  description:
    "A live local junk-removal business site rebuilt from static HTML into a full Next.js app with a working contact-form backend, SEO, and uptime monitoring.",
};

const created = [
  "Rebuilt the site from static HTML/CSS/JS into a Next.js 16 app (App Router, TypeScript, Tailwind CSS v4)",
  "Built a dual-channel contact form backend (email via Resend, SMS via Twilio) with honest failure reporting instead of a false success message",
  "Diagnosed and fixed a production bug where the hero text was permanently clipped on narrower phones",
  "Added LocalBusiness + FAQPage schema.org markup, robots.txt, and a sitemap for search visibility",
  "Connected the site to the business's Google Business Profile (embedded map, reviews link) and social accounts",
  "Found and cleaned up a duplicate, misconfigured Vercel deployment that was silently eating build minutes",
  "Set up a daily automated health check (GitHub Actions) that submits a real test request and alerts on delivery failure",
];

const tools = [
  "Next.js / React",
  "TypeScript",
  "Tailwind CSS",
  "Vercel deployment",
  "Resend + Twilio integration",
  "Google Business Profile / schema.org SEO",
  "Responsive debugging",
  "CI health monitoring",
];

const proofCards = [
  {
    image: "/work/got-junk-hero.png",
    label: "Homepage / Hero",
    text: "Rebuilt the hero section with a real conversion-focused layout — call and text CTAs, trust badges, and a headline that survived a full responsive audit down to 320px-wide phones.",
    skills: ["Next.js", "Responsive design", "Conversion copy"],
  },
  {
    image: "/work/got-junk-services.png",
    label: "Services Grid",
    text: "A six-service grid with real job photos, replacing a flat list from the old static site with something that actually shows the work.",
    skills: ["Component design", "Content structure"],
  },
  {
    image: "/work/got-junk-contact.png",
    label: "Contact + Live Google Map",
    text: "The contact form posts to a real backend that emails and texts the business owner, plus an embedded, interactive Google Map pulled from the business's actual listing.",
    skills: ["Backend integration", "Google Business Profile", "Form UX"],
  },
  {
    image: "/work/got-junk-mobile.png",
    label: "Mobile Experience",
    text: "Fixed a real production bug here: the hero text was getting permanently clipped on narrower phones because of a fixed aspect-ratio container — not just scrolled past, actually cut off. Replaced it with a content-driven min-height.",
    skills: ["Bug diagnosis", "Mobile-first debugging"],
  },
];

export default function GotJunkWebsite() {
  return (
    <CaseStudyLayout
      title="Got Junk"
      label="Full-Stack Website · Next.js Development · SEO · Backend Integration"
      summary="A live junk-removal business in California's Central Valley — rebuilt from a static site into a full Next.js app with a real working backend."
      liveUrl="https://www.gotjunkwehaul.com"
    >
      {/* Problem */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">The Problem</h2>
        <p className="text-gray-600 leading-relaxed">
          The business had a static HTML site with no real way to capture leads — no working
          contact form, no SEO structure, and no way to know if something broke. For a local
          service business, that means missed calls and quote requests that just silently
          disappear.
        </p>
      </section>

      {/* Goal */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">The Goal</h2>
        <p className="text-gray-600 leading-relaxed">
          Rebuild the site as a real, maintainable Next.js app with a contact form that
          actually delivers requests to the business owner, search-engine-friendly structure,
          and a way to know immediately if the form ever stops working — without the owner
          having to test it manually.
        </p>
      </section>

      {/* What I created */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">What I Created</h2>
        <ul className="space-y-2.5">
          {created.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-600">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Project Proof */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900">What I Built</h2>
        <p className="text-gray-600 leading-relaxed">
          Got Junk is a live, in-production site handling real customer requests today — not a
          concept or a mockup. These are actual screenshots of the deployed site.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {proofCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-gray-100 overflow-hidden hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <img src={card.image} alt={card.label} className="w-full object-cover" />
              <div className="p-5 space-y-3">
                <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
                  {card.label}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
                <div className="flex flex-wrap gap-1.5">
                  {card.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Tools & Skills</h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm rounded-full bg-indigo-50 text-indigo-700 font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Label */}
      <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
        Live in production
      </div>

      {/* Learned */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">What I Learned</h2>
        <p className="text-gray-600 leading-relaxed">
          Shipping is different from building. The form worked in every test I ran — but it
          still failed silently in production because of a sender-domain restriction I hadn't
          hit locally, and the site still showed a false success message when it did. That
          taught me to treat &quot;does it work&quot; and &quot;does it tell the truth when it
          doesn&apos;t&quot; as two separate requirements, and to build a way to find out about
          failures automatically instead of waiting for a customer to mention it.
        </p>
      </section>

      {/* What I'd improve */}
      <section className="space-y-3 pb-4">
        <h2 className="text-xl font-bold text-gray-900">What I Would Improve Next</h2>
        <p className="text-gray-600 leading-relaxed">
          Split the single-page site into dedicated pages per service (junk removal, property
          cleanouts, equipment) with more photos and copy on each — more surface area for
          local search terms like &quot;junk removal near me&quot; than one homepage section
          can realistically cover.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
