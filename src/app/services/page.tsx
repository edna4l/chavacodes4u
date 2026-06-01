import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | chavacodes4u",
  description: "Starter offers for AI content, prompts, landing pages, and brand launch materials.",
};

const services = [
  {
    name: "Content Starter Pack",
    price: "$35–$75",
    best: "Creators, local businesses, nonprofits, animal rescues, small brands.",
    includes: [
      "15 hooks written for your niche",
      "5 captions ready to post",
      "3 AI image prompts",
      "3 content ideas to build on",
    ],
  },
  {
    name: "Landing Page Review",
    price: "$50–$100",
    best: "Anyone with a homepage, product page, or waitlist that isn't converting.",
    includes: [
      "Full homepage feedback",
      "Clearer headline options",
      "Call-to-action suggestions",
      "5 specific improvement notes",
    ],
  },
  {
    name: "AI Visual Prompt Pack",
    price: "$35–$75",
    best: "Brands, creators, and founders who want strong visuals without a photographer.",
    includes: [
      "10 detailed AI image prompts",
      "3 style directions",
      "Caption ideas for each concept",
    ],
  },
  {
    name: "Launch Mini-Kit",
    price: "$100–$250",
    best: "Anyone getting ready to launch a product, brand, or service.",
    includes: [
      "Brand message and positioning",
      "20 hooks for your audience",
      "10 captions ready to schedule",
      "5 AI image prompts",
      "Simple 7-day posting plan",
    ],
  },
];

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="space-y-3 mb-16">
        <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
          Starter Offers
        </p>
        <h1 className="text-4xl font-bold text-gray-900">Services</h1>
        <p className="text-gray-500 text-lg max-w-xl">
          Simple, affordable packages for small brands, creators, and purpose-driven projects.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {services.map((s) => (
          <div
            key={s.name}
            className="p-8 rounded-2xl border border-gray-100 bg-white space-y-5 hover:border-indigo-200 hover:shadow-sm transition-all"
          >
            <div className="space-y-1">
              <h2 className="font-bold text-gray-900 text-xl">{s.name}</h2>
              <p className="text-2xl font-bold text-indigo-600">{s.price}</p>
            </div>
            <ul className="space-y-2">
              {s.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-400">
                <strong className="text-gray-500">Best for:</strong> {s.best}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 p-8 text-center space-y-4">
        <p className="font-semibold text-gray-900 text-lg">
          Not sure which one fits?
        </p>
        <p className="text-gray-600 text-sm">
          Tell me what you&apos;re working on and I&apos;ll recommend the best starting point.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
