import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | chavacodes4u`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <Link
        href="/blog"
        className="text-sm text-indigo-600 font-medium hover:underline mb-10 block"
      >
        ← Back to Blog
      </Link>
      <p className="text-sm text-gray-400 font-medium mb-3">{post.date}</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-10">{post.title}</h1>
      <article
        className="prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
