import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | chavacodes4u",
  description: "Get in touch — let's talk about your project.",
};

const socials = [
  { label: "TikTok", href: "https://www.tiktok.com/@chavacodes4u" },
  { label: "Instagram", href: "https://www.instagram.com/chavacodes4u/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590537547235" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/edna-chavarria-chavacodes4u/" },
];

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: text */}
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
              Let&apos;s Talk
            </p>
            <h1 className="text-4xl font-bold text-gray-900">Tell Me What You&apos;re Building</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Need help with content, prompts, launch messaging, or making your idea look
              real? Tell me what you&apos;re working on and I&apos;ll get back to you.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-700">Find me on</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-indigo-50 space-y-1">
            <p className="text-sm font-semibold text-indigo-800">Response time</p>
            <p className="text-sm text-indigo-700">
              I typically reply within 1–2 business days.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
