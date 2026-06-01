import type { Metadata } from "next";
import Link from "next/link";
import { work } from "@/data/work";

export const metadata: Metadata = {
  title: "Work | chavacodes4u",
  description: "Projects, case studies, and content samples.",
};

export default function Work() {
  const featured = work.filter((w) => w.featured);
  const more = work.filter((w) => !w.featured);

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="space-y-3 mb-16">
        <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">Portfolio</p>
        <h1 className="text-4xl font-bold text-gray-900">Work</h1>
        <p className="text-gray-500 text-lg max-w-xl">
          Projects, case studies, and content samples that show how I think, create, and finish.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featured.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="group block p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all"
          >
            <p className="text-[10px] font-semibold tracking-wider text-indigo-400 uppercase mb-3 leading-tight">
              {item.label}
            </p>
            <h2 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.summary}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="text-xs font-medium text-indigo-600 group-hover:underline">
              View Case Study →
            </span>
          </Link>
        ))}
      </div>

      {more.length > 0 && (
        <>
          <h2 className="text-lg font-semibold text-gray-900 mb-6">More Samples</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {more.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all"
              >
                <div className="flex-1">
                  <p className="text-[10px] font-semibold tracking-wider text-indigo-400 uppercase mb-1">
                    {item.label}
                  </p>
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.summary}</p>
                </div>
                <span className="text-indigo-400 group-hover:text-indigo-600 transition-colors mt-1 shrink-0">
                  →
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
