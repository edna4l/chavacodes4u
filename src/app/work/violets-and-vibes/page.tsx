import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Violets & Vibes | chavacodes4u",
  description: "Women-centered connection platform for friendship, dating, and community.",
};

const created = [
  "Website concept, brand identity, and visual direction",
  "Brand messaging and positioning strategy",
  "Social content ideas and launch hooks",
  "AI visual concepts for brand imagery",
  "Community feature planning and user flow",
  "Waitlist launch strategy and email flow",
  "Safety-first positioning and audience research",
];

const tools = [
  "AI prompting",
  "Website planning",
  "Product strategy",
  "Copywriting",
  "User experience thinking",
  "Social media content",
  "Visual direction",
];

export default function VioletsAndVibes() {
  return (
    <CaseStudyLayout
      title="Violets & Vibes"
      label="Founder Project · Website · Brand Strategy · AI Content"
      summary="A women-centered connection platform built for friendship, dating, community, and safer connection."
      liveUrl="https://violetsandvibes.com"
    >
      {/* Problem */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">The Problem</h2>
        <p className="text-gray-600 leading-relaxed">
          Many social and dating platforms feel overwhelming, unsafe, or too focused on
          swiping instead of real connection. Women and gender-expansive users often report
          feeling unseen, unheard, or unsafe on existing platforms — and there&apos;s very
          little designed with them as the primary audience.
        </p>
      </section>

      {/* Goal */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">The Goal</h2>
        <p className="text-gray-600 leading-relaxed">
          Create a softer, safer, more inclusive experience where women-centered users can
          connect for friendship, dating, support, and community — without the pressure,
          noise, or discomfort of traditional apps.
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
        <div className="grid sm:grid-cols-2 gap-4">
          <ImagePlaceholder label="Homepage screenshot" />
          <ImagePlaceholder label="Waitlist page screenshot" />
          <ImagePlaceholder label="Brand visual / AI concept" />
          <ImagePlaceholder label="Social content sample" />
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

      {/* Learned */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">What I Learned</h2>
        <p className="text-gray-600 leading-relaxed">
          This project taught me how to move from an idea to a real product structure —
          including audience research, user flow thinking, safety feature planning, landing
          page messaging, and launch content. I learned that the positioning of a product
          is just as important as the product itself.
        </p>
      </section>

      {/* What I'd improve */}
      <section className="space-y-3 pb-4">
        <h2 className="text-xl font-bold text-gray-900">What I Would Improve Next</h2>
        <p className="text-gray-600 leading-relaxed">
          Next, I would test the landing page with 10 target users, simplify the signup
          flow, and create a stronger first-week onboarding experience that shows new
          members exactly what to do and why the community is worth staying in.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
