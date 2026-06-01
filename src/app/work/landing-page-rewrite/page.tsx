import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Landing Page Rewrite Sample | chavacodes4u",
  description: "Before-and-after landing page copy rewrites showing how to turn weak messaging into something that converts.",
};

const rewrites = [
  {
    context: "Generic small business homepage",
    before: "Welcome to our business. We provide quality services.",
    after: "Your brand has 3 seconds to make people care. I help make those 3 seconds count.",
    note: "The original leads with the business. The rewrite leads with the reader's problem.",
  },
  {
    context: "Animal rescue donation page",
    before: "Please donate to help animals in need. Every dollar counts.",
    after: "Right now, 47 animals at this shelter are one week away from running out of options. Your $20 changes that.",
    note: "Specificity creates urgency. Vague appeals don't move people — real numbers do.",
  },
  {
    context: "Freelancer / service provider",
    before: "I offer web design, branding, and social media services for businesses.",
    after: "You built something real. I help people see it, understand it, and actually want it.",
    note: "The rewrite shifts from listing skills to articulating the value of those skills.",
  },
  {
    context: "Community app waitlist page",
    before: "Join our waitlist to be notified when we launch.",
    after: "Tired of apps that feel unsafe, overwhelming, or built for everyone except you? You're exactly who we built this for. Get early access.",
    note: "The rewrite speaks directly to the pain before asking for anything.",
  },
];

export default function LandingPageRewrite() {
  return (
    <CaseStudyLayout
      title="Landing Page Rewrite Sample"
      label="Copywriting · Website Messaging"
      summary="A before-and-after series showing how to turn weak, forgettable website copy into messaging that makes people stop, read, and act."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">The Skill</h2>
        <p className="text-gray-600 leading-relaxed">
          Most people write about themselves when they should be writing about their
          reader. Good landing page copy leads with the problem, earns attention
          before asking for anything, and gives someone a clear reason to take the
          next step. These before-and-afters show that transformation.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-xl font-bold text-gray-900">Before & After</h2>
        {rewrites.map((r, i) => (
          <div key={i} className="space-y-4">
            <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
              Example {i + 1} — {r.context}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-red-50 border border-red-100 space-y-2">
                <p className="text-xs font-semibold text-red-400 uppercase tracking-wider">Before</p>
                <p className="text-gray-700 leading-relaxed">&ldquo;{r.before}&rdquo;</p>
              </div>
              <div className="p-5 rounded-2xl bg-green-50 border border-green-100 space-y-2">
                <p className="text-xs font-semibold text-green-500 uppercase tracking-wider">After</p>
                <p className="text-gray-700 leading-relaxed font-medium">&ldquo;{r.after}&rdquo;</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic pl-1">{r.note}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3 pb-4">
        <h2 className="text-xl font-bold text-gray-900">What This Shows</h2>
        <p className="text-gray-600 leading-relaxed">
          I can audit existing copy, identify what&apos;s not working, and rewrite it in
          a voice that fits the brand while actually earning attention. This works for
          homepages, product descriptions, waitlist pages, social bios, email subject
          lines — anywhere words have to do a job.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
