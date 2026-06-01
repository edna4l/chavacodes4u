import Link from "next/link";

interface Props {
  title: string;
  label: string;
  summary: string;
  liveUrl?: string;
  children: React.ReactNode;
}

export default function CaseStudyLayout({
  title,
  label,
  summary,
  liveUrl,
  children,
}: Props) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Link
        href="/work"
        className="text-sm text-indigo-600 font-medium hover:underline mb-12 inline-block"
      >
        ← Back to Work
      </Link>

      <div className="mt-6 mb-14 space-y-3">
        <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
          {label}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">{summary}</p>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm text-gray-500 hover:text-indigo-600 transition-colors"
          >
            View live site →
          </a>
        )}
      </div>

      <div className="space-y-14">{children}</div>
    </div>
  );
}
