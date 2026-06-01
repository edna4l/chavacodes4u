import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About | chavacodes4u",
  description: "About Edna — builder, creator, and hopeful founder.",
};

const credentials = [
  "AI Mastery Certificate Program",
  "Founder of Violets & Vibes",
  "Creator of MyFormsVault",
  "AI prompts, content planning, and visual direction",
  "Website copy, product messaging, and launch strategy",
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="space-y-2 mb-16">
        <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
          About Me
        </p>
        <h1 className="text-4xl font-bold text-gray-900">Hi, I&apos;m Edna.</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-semibold text-gray-900">Who I am</h2>
            <p className="text-gray-600 leading-relaxed">
              I&apos;m a builder, creator, and hopeful founder learning how to turn ideas
              into useful digital projects. I believe good ideas deserve to be understood
              — and I&apos;ve built my skills around making that happen.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-gray-900">What I do</h2>
            <p className="text-gray-600 leading-relaxed">
              I create AI-assisted content, prompts, website messaging, and launch
              materials for small brands, creators, and purpose-driven projects.
              Everything I make is designed to be clear, honest, and actually usable.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-gray-900">Why this matters to me</h2>
            <p className="text-gray-600 leading-relaxed">
              I care about helping people explain their ideas clearly — especially
              people who feel overwhelmed by tech, content, or getting started online.
              The internet doesn&apos;t need more noise. It needs better explanations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-gray-900">Credibility</h2>
            <ul className="space-y-2.5">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: photo placeholder */}
        <div className="space-y-4">
          <ImagePlaceholder label="Your photo here" />
          <p className="text-xs text-center text-gray-400">Replace with your headshot</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 pt-12 border-t border-gray-100 text-center space-y-4">
        <p className="text-xl font-semibold text-gray-900">
          Want to work together?
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
