import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | chavacodes4u",
  description: "Writing about web development, design, and what I'm learning.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <div className="space-y-3 mb-16">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <p className="text-gray-500 text-lg">
          Writing about web development, design, and what I'm learning.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-400">No posts yet — check back soon.</p>
      ) : (
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block space-y-1.5">
                <p className="text-xs text-gray-400 font-medium">{post.date}</p>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-gray-500 leading-relaxed">{post.excerpt}</p>
                )}
                <span className="text-sm text-indigo-600 font-medium group-hover:underline">
                  Read more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
