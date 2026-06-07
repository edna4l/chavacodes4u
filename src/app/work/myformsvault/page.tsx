import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "MyFormsVault | chavacodes4u",
  description: "Full-stack web app and Chrome extension for importing, organizing, and autofilling repeated forms.",
};

const created = [
  "Full-stack web app built with Next.js, Supabase, and Prisma",
  "Chrome extension with household-aware autofill",
  "Landing page copy, positioning, and visual design",
  "OCR-backed form import pipeline",
  "API key system for secure extension authentication",
  "Household vault for storing reusable family data",
];

const tools = [
  "Next.js / React",
  "Supabase (auth + database)",
  "Prisma ORM",
  "Chrome Extension (MV3)",
  "TypeScript",
  "Vercel deployment",
  "Copywriting & product messaging",
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
          Families, school offices, and care teams fill out the same forms over and over —
          name, address, medical details, emergency contacts — every season, every year.
          There was no good way to import outside forms, store reusable household records,
          and autofill the next one without starting from scratch every time.
        </p>
      </section>

      {/* Goal */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">The Goal</h2>
        <p className="text-gray-600 leading-relaxed">
          Build a live product that lets users import any form, store reusable household
          profiles in a family vault, publish public forms with household-aware autofill,
          and extend that workflow into the browser through a Chrome extension — all from
          one dashboard.
        </p>
      </section>

      {/* What I created */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">What I Built</h2>
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
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-indigo-100 shadow-sm h-80">
            <Image
              src="/work/myformsvault-landing.png"
              alt="MyFormsVault landing page hero"
              width={600}
              height={900}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-indigo-100 shadow-sm h-80 bg-slate-100 flex items-center justify-center p-6">
            <Image
              src="/work/myformsvault-extension.png"
              alt="MyFormsVault Chrome extension popup"
              width={500}
              height={380}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 text-xs text-gray-400 text-center">
          <span>Live landing page — myformsvault.com</span>
          <span>Chrome extension popup — household autofill</span>
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
        Live Product
      </div>

      {/* Learned */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">What I Learned</h2>
        <p className="text-gray-600 leading-relaxed">
          This project taught me how to ship a real product end-to-end — from database
          design and server-side auth to Chrome extension APIs and live deployment on
          Vercel. I learned how to navigate real technical constraints like DNS resolution
          differences between local and production, Supabase schema permissions, and
          building a secure API key system from scratch.
        </p>
      </section>

      {/* What I'd improve */}
      <section className="space-y-3 pb-4">
        <h2 className="text-xl font-bold text-gray-900">What I Would Improve Next</h2>
        <p className="text-gray-600 leading-relaxed">
          Next, I would add end-to-end autofill testing with real school and clinic forms,
          build out the submission review dashboard, and expand the template library with
          more pre-built household and care workflows. Publishing to the Chrome Web Store
          is also on the roadmap.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
