import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "AI Prompt Samples | chavacodes4u",
  description: "AI image prompt examples showing the thinking behind the output.",
};

const samples = [
  {
    goal: "Realistic coastal van-life lifestyle photo",
    approach:
      "Cinematic photography, vintage VW camper van at golden hour on the Pacific Coast Highway, couple watching the sunset in camping chairs, 35mm film grain, warm amber light, shallow depth of field, editorial travel magazine style, ultra realistic.",
    label: "Result: van-life lifestyle photo",
  },
  {
    goal: "Brand-aligned lifestyle visual for Violets & Vibes",
    approach:
      "Soft editorial photography, two women laughing over coffee at an outdoor cafe, warm afternoon light, natural bokeh, floral arrangements on table, feminine and modern lifestyle brand aesthetic, inclusive, safe-feeling community vibe, high fashion editorial.",
    label: "Result: community lifestyle visual",
  },
  {
    goal: "Emotional animal rescue appeal image",
    approach:
      "Photorealistic image of a scrappy terrier mix sitting alone on a city sidewalk, golden hour backlight creating a halo effect, soft focus background, soulful eyes looking directly at camera, documentary photography style, cinematic composition, heartwarming yet urgent.",
    label: "Result: rescue emotional appeal photo",
  },
];

export default function AiPromptSamples() {
  return (
    <CaseStudyLayout
      title="AI Content & Visual Prompt Samples"
      label="Prompt Engineering · AI Visual Direction"
      summary="Short-form hooks, image prompts, video scripts, and carousel concepts — with the thinking shown beside every output."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">The Skill</h2>
        <p className="text-gray-600 leading-relaxed">
          Anyone can generate an AI image. What matters is knowing how to direct it —
          choosing the right camera style, lighting, mood, detail level, and brand
          alignment so the output actually serves a purpose. These samples show the
          prompt thinking alongside the result.
        </p>
      </section>

      {/* Prompt samples */}
      <section className="space-y-8">
        <h2 className="text-xl font-bold text-gray-900">Image Prompt Samples</h2>
        {samples.map((s, i) => (
          <div key={i} className="rounded-2xl border border-gray-100 overflow-hidden">
            <div className="p-6 space-y-3">
              <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
                Sample {i + 1}
              </p>
              <div className="space-y-1.5">
                <p className="text-sm font-semibold text-gray-700">Goal</p>
                <p className="text-gray-600 text-sm">{s.goal}</p>
              </div>
              <div className="space-y-1.5">
                <p className="text-sm font-semibold text-gray-700">Prompt approach</p>
                <p className="text-gray-500 text-sm leading-relaxed italic">&ldquo;{s.approach}&rdquo;</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <ImagePlaceholder label={s.label} />
            </div>
          </div>
        ))}
      </section>

      <section className="space-y-3 pb-4">
        <h2 className="text-xl font-bold text-gray-900">What This Shows</h2>
        <p className="text-gray-600 leading-relaxed">
          Good AI visual direction isn&apos;t just typing words and hoping. It&apos;s
          understanding your brand&apos;s visual language, knowing which cues create
          realism vs. stylization, and being able to reproduce a consistent look
          across multiple images. That&apos;s what I build for clients.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
