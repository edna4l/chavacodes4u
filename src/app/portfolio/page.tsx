import type { Metadata } from "next";
import projects from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Portfolio | chavacodes4u",
  description: "A collection of projects I've built.",
};

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="space-y-3 mb-16">
        <h1 className="text-4xl font-bold text-gray-900">Portfolio</h1>
        <p className="text-gray-500 text-lg">A collection of things I've built.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.slug}
            href={p.url}
            target={p.url !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all"
          >
            <h2 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
              {p.name}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
