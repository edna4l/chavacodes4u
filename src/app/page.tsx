import Link from "next/link";
import { work } from "@/data/work";

const services = [
  {
    title: "AI Content Creation",
    body: "Hooks, captions, short-form scripts, and content calendars built around your brand voice.",
  },
  {
    title: "Prompt Writing",
    body: "AI image prompts, video prompts, brand prompt packs, and ChatGPT workflows.",
  },
  {
    title: "Website & Landing Page Support",
    body: "Homepage copy, waitlist pages, product descriptions, and user flow feedback.",
  },
  {
    title: "Brand Launch Materials",
    body: "Social post ideas, ad concepts, founder stories, and launch campaigns.",
  },
];

const servicesPricing = [
  { name: "Content Starter Pack", price: "$35–$75", blurb: "Walk away with 10 post ideas, 5 captions, and 3 AI image prompts you can use this week." },
  { name: "Landing Page Review", price: "$50–$100", blurb: "Clearer copy, better headlines, and a stronger CTA." },
  { name: "AI Visual Prompt Pack", price: "$35–$75", blurb: "10 detailed image prompts with style direction." },
  { name: "Launch Mini-Kit", price: "$100–$250", blurb: "Everything you need to launch: message, hooks, captions, and a 7-day plan." },
];

const featured = work.filter((w) => w.featured);

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-indigo-50 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight">
              AI Content, Prompting &amp; Website Support for{" "}
              <span className="text-indigo-600">Small Brands with Big Ideas</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              I help creators, small businesses, and purpose-driven projects turn messy ideas
              into social posts, AI visuals, landing pages, scripts, and simple launch content.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/work"
                className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors"
              >
                Work With Me
              </Link>
            </div>
            <div className="pt-2 pl-5 border-l-4 border-indigo-200">
              <p className="text-gray-600 leading-relaxed">
                Hi, I&apos;m <strong className="text-gray-900">Edna</strong> — founder of Violets &amp; Vibes
                and creator of MyFormsVault. I use AI tools, prompts, design thinking, and
                beginner-friendly web strategy to help ideas become content people can actually
                understand, click, and care about.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        {/* ── What I help with ─────────────────────────────── */}
        <section className="py-20 space-y-10">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
              What I can help with
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-indigo-100 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="inline-flex text-sm font-medium text-indigo-600 hover:underline"
          >
            See pricing & packages →
          </Link>
        </section>

        {/* ── Featured Work ─────────────────────────────────── */}
        <section className="py-10 space-y-10 border-t border-gray-100">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
                Featured Work
              </p>
              <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
            </div>
            <Link
              href="/work"
              className="text-sm font-medium text-indigo-600 hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {featured.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="group block p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all"
              >
                <p className="text-[10px] font-semibold tracking-wider text-indigo-400 uppercase mb-3 leading-tight">
                  {item.label}
                </p>
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.summary}</p>
                <span className="mt-4 inline-block text-xs font-medium text-indigo-600 group-hover:underline">
                  View Case Study →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Proof / positioning ───────────────────────────── */}
        <section className="py-16 border-t border-gray-100">
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl px-8 py-12 text-center space-y-6">
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 max-w-2xl mx-auto leading-snug">
              I turn ideas into content, prompts, websites, and launch materials that
              people can actually understand.
            </p>
            <div className="flex justify-center gap-8 text-sm font-semibold text-indigo-700">
              <span>I can think.</span>
              <span>I can create.</span>
              <span>I can finish.</span>
            </div>
          </div>
        </section>

        {/* ── Services preview ──────────────────────────────── */}
        <section className="py-10 space-y-10 border-t border-gray-100">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
              Starter Offers
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Tell Me What You&apos;re Building</h2>
            <p className="text-gray-600 leading-relaxed max-w-xl">
              Need launch content, a landing page review, better prompts, or help turning a messy idea into something clear?{" "}
              <Link href="/contact" className="text-indigo-600 font-medium hover:underline">
                Start here.
              </Link>
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicesPricing.map((s) => (
              <div
                key={s.name}
                className="p-5 rounded-2xl border border-gray-100 bg-white space-y-2"
              >
                <p className="font-semibold text-gray-900 text-sm">{s.name}</p>
                <p className="text-indigo-600 font-bold">{s.price}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{s.blurb}</p>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="inline-flex text-sm font-medium text-indigo-600 hover:underline"
          >
            See full details →
          </Link>
        </section>

        {/* ── About preview ─────────────────────────────────── */}
        <section className="py-10 border-t border-gray-100">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
              About Me
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              I&apos;m Edna, a builder, creator, and hopeful founder learning how to turn ideas
              into useful digital projects. I care about helping people explain their ideas
              clearly — especially people who feel overwhelmed by tech, content, or getting
              started online.
            </p>
            <Link href="/about" className="inline-flex text-sm font-medium text-indigo-600 hover:underline">
              More about me →
            </Link>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────── */}
        <section className="py-16 border-t border-gray-100 text-center space-y-6">
          <p className="text-2xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
            Have an idea but don&apos;t know how to explain it, promote it, or make it look
            real?
          </p>
          <p className="text-gray-500">I can help turn it into something usable.</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Contact Me
          </Link>
        </section>
      </div>
    </div>
  );
}
