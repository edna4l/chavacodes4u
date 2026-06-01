import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

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

const proofCards = [
  {
    image: "/work/violets-and-vibes-homepage.png",
    label: "Homepage / Brand Positioning",
    text: "Designed the first impression of the brand with soft, inclusive messaging around safer connection, friendship, dating, and community.",
    skills: ["Website planning", "Brand messaging", "Copywriting"],
  },
  {
    image: "/work/violets-and-vibes-waitlist.png",
    label: "Signup / Early Access Flow",
    text: "Created a clear path for early users to enter the community, with copy focused on trust, belonging, and low-pressure connection.",
    skills: ["User flow", "Launch strategy", "Conversion copy"],
  },
  {
    image: "/work/violets-and-vibes-app-ui.png",
    label: "Community Feature Design",
    text: "Built and planned product areas for profiles, social discovery, chats, alerts, and connection-based community interactions.",
    skills: ["UX thinking", "Product strategy", "Feature planning"],
  },
  {
    image: "/work/violets-and-vibes-brand-kit.png",
    label: "AI Visual Direction / Launch Content",
    text: "Created AI-assisted visual concepts and social content ideas to communicate the emotional purpose of the brand before launch.",
    skills: ["AI prompting", "Visual direction", "Social media content"],
  },
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

      {/* Project Proof */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900">What I Built</h2>
        <p className="text-gray-600 leading-relaxed">
          Violets &amp; Vibes is a founder-built community platform designed to help
          women-centered users connect through friendship, dating, social posts, chats,
          and safer community features. This project shows my ability to move from idea
          to product structure, brand messaging, AI-assisted visuals, and launch content.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {proofCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-gray-100 overflow-hidden hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <img
                src={card.image}
                alt={card.label}
                className="w-full object-cover"
              />
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

      {/* Learned */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">What I Learned</h2>
        <p className="text-gray-600 leading-relaxed">
          This project taught me how to turn a broad idea into a real product experience.
          I learned how to think through audience needs, safety features, onboarding, page
          structure, social content, and brand positioning. I also learned that building the
          product is only one part of the work — explaining the value clearly is just as
          important.
        </p>
      </section>

      {/* Improve */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">What I Would Improve Next</h2>
        <p className="text-gray-600 leading-relaxed">
          Next, I would test the site with a small group of target users, simplify the
          signup flow, strengthen the first-week onboarding experience, and create clearer
          calls to action for joining the waitlist or community.
        </p>
      </section>

      {/* Why This Project Matters */}
      <section className="space-y-3 pb-4">
        <h2 className="text-xl font-bold text-gray-900">Why This Project Matters</h2>
        <div className="pl-5 border-l-4 border-indigo-200">
          <p className="text-gray-600 leading-relaxed">
            Violets &amp; Vibes shows that I can take an idea from concept to something real:
            a working brand, product direction, website experience, social content strategy,
            and community-focused launch plan. It also reflects the kind of work I want to
            do for others — helping people turn meaningful ideas into clear digital
            experiences.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
