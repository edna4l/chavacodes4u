import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Social Media Hook Samples | chavacodes4u",
  description: "Short-form hook writing samples for animal rescues, lifestyle brands, and community platforms.",
};

const hookSets = [
  {
    label: "Animal Rescue",
    context:
      "Hooks written to stop the scroll and create emotional connection — without being manipulative.",
    hooks: [
      "Before you ignore that stray, watch this.",
      "Three signs an animal is asking for help.",
      "That 'dirty stray' might be someone's whole heart.",
      "What happens to a dog that never gets rescued?",
      "This dog waited 47 days. Here's what changed.",
    ],
  },
  {
    label: "Violets & Vibes",
    context:
      "Hooks written to reframe what a women-centered connection app can feel like.",
    hooks: [
      "Dating apps forgot women need friendship too.",
      "What if connection felt safe again?",
      "Not every match has to be romantic.",
      "You don't need more followers. You need your people.",
      "The app that finally asks: what kind of connection do you actually want?",
    ],
  },
  {
    label: "Small Business / Creator",
    context:
      "General-purpose hooks that work across niches for local businesses and solo creators.",
    hooks: [
      "Nobody is talking about this, and that's your opportunity.",
      "The reason your content isn't converting (it's not the algorithm).",
      "3 things I stopped doing that doubled my engagement.",
      "You have 3 seconds. Make them count.",
      "Your audience doesn't want more content. They want to feel seen.",
    ],
  },
];

export default function SocialHooks() {
  return (
    <CaseStudyLayout
      title="Social Media Hook Samples"
      label="Short-Form Content Strategy"
      summary="Hook writing samples for animal rescues, lifestyle brands, and community platforms — built to stop the scroll and earn the click."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">The Skill</h2>
        <p className="text-gray-600 leading-relaxed">
          A hook is the first line — the sentence that decides whether someone keeps
          scrolling or stops. Writing good hooks means understanding the audience,
          the platform, and the emotional trigger that makes something feel worth
          clicking. These samples show range across different niches.
        </p>
      </section>

      <section className="space-y-10">
        <h2 className="text-xl font-bold text-gray-900">Hook Sets</h2>
        {hookSets.map((set) => (
          <div key={set.label} className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">{set.label}</h3>
              <p className="text-sm text-gray-500">{set.context}</p>
            </div>
            <ul className="space-y-3">
              {set.hooks.map((hook) => (
                <li
                  key={hook}
                  className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 text-sm leading-relaxed"
                >
                  &ldquo;{hook}&rdquo;
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="space-y-3 pb-4">
        <h2 className="text-xl font-bold text-gray-900">What This Shows</h2>
        <p className="text-gray-600 leading-relaxed">
          I can write hooks across niches, tones, and platforms — from urgent rescue
          content to soft community invitations to business growth content. The pattern
          is always the same: understand who you&apos;re talking to, what they fear or
          want, and give them a reason to stop.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
