"use client";

import { useForm, ValidationError } from "@formspree/react";

const budgetOptions = [
  "Under $50",
  "$50–$100",
  "$100–$250",
  "$250+",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP (within 1 week)",
  "2–4 weeks",
  "1–2 months",
  "Flexible",
];

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnjrkjll");

  const fieldClass =
    "w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition bg-white";

  if (state.succeeded) {
    return (
      <div className="text-center py-12 space-y-3">
        <p className="text-2xl font-bold text-gray-900">Message sent!</p>
        <p className="text-gray-500 text-sm">I&apos;ll get back to you within 1–2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input id="name" name="name" type="text" required placeholder="Your name" className={fieldClass} />
        <ValidationError field="name" prefix="Name" errors={state.errors} className="text-xs text-red-500 mt-1" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" className={fieldClass} />
        <ValidationError field="email" prefix="Email" errors={state.errors} className="text-xs text-red-500 mt-1" />
      </div>

      <div>
        <label htmlFor="need" className="block text-sm font-medium text-gray-700 mb-1">
          What do you need help with?
        </label>
        <textarea
          id="need"
          name="need"
          rows={4}
          required
          placeholder="Tell me about your project, idea, or what you're trying to create..."
          className={`${fieldClass} resize-none`}
        />
        <ValidationError field="need" prefix="Message" errors={state.errors} className="text-xs text-red-500 mt-1" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Budget range
          </label>
          <select id="budget" name="budget" className={fieldClass}>
            <option value="">Select a range</option>
            {budgetOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
            Timeline
          </label>
          <select id="timeline" name="timeline" className={fieldClass}>
            <option value="">Select a timeline</option>
            {timelineOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
