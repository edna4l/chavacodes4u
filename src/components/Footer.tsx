import Link from "next/link";

const socials = [
  { label: "TikTok", href: "#" },
  { label: "Instagram", href: "https://www.instagram.com/chavacodes4u/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590537547235" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/edna-chavarria-chavacodes4u/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <Link
              href="/"
              className="font-bold text-gray-900 hover:text-indigo-600 transition-colors"
            >
              chava<span className="text-indigo-600">codes4u</span>
            </Link>
            <p className="text-sm text-gray-400">
              AI content, prompts & website support for small brands.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-indigo-600 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-400">
          © {new Date().getFullYear()} chavacodes4u. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
