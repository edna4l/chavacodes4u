import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "MyFormsVault | chavacodes4u",
  description: "Chrome extension concept for saving reusable personal form information locally.",
};

const created = [
  "Product concept, naming, and positioning",
  "Landing page copy and value proposition",
  "Chrome extension flow mapping",
  "Target audience definition and research",
  "Privacy-first messaging strategy",
];

const tools = [
  "Product thinking",
  "Copywriting",
  "Chrome extension research",
  "Landing page messaging",
  "Privacy-first design thinking",
];

export default function MyFormsVault() {
  return (
    <CaseStudyLayout
      title="MyFormsVault"
      label="Full-Stack App · Chrome Extension · Landing Page"
      summary="A live web app and Chrome extension for importing, organizing, and autofilling repeated forms — built with Next.js, Supabase, and a household vault for reusable family data."
      liveUrl="https://www.myformsvault.com"
    >
      {/* Problem */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">The Problem</h2>
        <p className="text-gray-600 leading-relaxed">
          People refill the same forms over and over — name, address, phone number,
          email — across dozens of websites every month. It&apos;s tedious, error-prone,
          and nobody&apos;s solved it in a way that feels safe. Browser autofill is
          unreliable. Password managers aren&apos;t built for this. And most people don&apos;t
          want their personal data stored on someone else&apos;s server.
        </p>
      </section>

      {/* Goal */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">The Goal</h2>
        <p className="text-gray-600 leading-relaxed">
          Create a simple browser extension concept that stores reusable personal
          information locally — never in the cloud — so users can fill forms faster
          without giving their data to a third party. Privacy-first, no account needed,
          no sync.
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

      {/* Screenshots */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Screenshots</h2>
        <div className="grid sm:grid-cols-2 gap-4 items-start">
          <div className="rounded-2xl overflow-hidden border border-indigo-100 shadow-sm">
            <Image
              src="/work/myformsvault-landing.png"
              alt="MyFormsVault landing page hero"
              width={600}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-indigo-100 shadow-sm">
            <Image
              src="/work/myformsvault-extension.png"
              alt="MyFormsVault Chrome extension popup"
              width={600}
              height={480}
              className="w-full h-auto"
            />
          </div>
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
      <div className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
        Prototype / Concept build
      </div>

      {/* Learned */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">What I Learned</h2>
        <p className="text-gray-600 leading-relaxed">
          This project taught me how to define a product clearly even before a single
          line of code is written. I learned how to research an existing problem, position
          a solution for a skeptical audience that cares about privacy, and write copy
          that leads with trust instead of features.
        </p>
      </section>

      {/* What I'd improve */}
      <section className="space-y-3 pb-4">
        <h2 className="text-xl font-bold text-gray-900">What I Would Improve Next</h2>
        <p className="text-gray-600 leading-relaxed">
          Next, I would build a functional MVP, create a waitlist, and test the actual
          extension with 5–10 early users to see which form fields they actually want
          to save most. That feedback would shape v1.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
