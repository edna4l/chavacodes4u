export interface WorkItem {
  slug: string;
  title: string;
  label: string;
  summary: string;
  featured: boolean;
  tags: string[];
}

export const work: WorkItem[] = [
  {
    slug: "violets-and-vibes",
    title: "Violets & Vibes",
    label: "Founder Project · Website · Brand Strategy · AI Content",
    summary:
      "Women-centered connection platform for friendship, dating, and community.",
    featured: true,
    tags: ["Brand Strategy", "Website", "AI Content", "Product"],
  },
  {
    slug: "myformsvault",
    title: "MyFormsVault",
    label: "Chrome Extension · Product Concept · Landing Page Copy",
    summary:
      "Chrome extension concept for saving reusable personal form information locally.",
    featured: true,
    tags: ["Product Concept", "Copywriting", "Chrome Extension"],
  },
  {
    slug: "ai-prompt-samples",
    title: "AI Content & Visual Prompt Samples",
    label: "Prompt Engineering · AI Visual Direction",
    summary:
      "Short-form hooks, image prompts, video scripts, and carousel concepts.",
    featured: true,
    tags: ["Prompt Engineering", "AI Visuals", "Content"],
  },
  {
    slug: "social-hooks",
    title: "Social Media Hook Samples",
    label: "Short-Form Content Strategy",
    summary:
      "Hook writing for animal rescues, lifestyle brands, and community platforms.",
    featured: false,
    tags: ["Content Strategy", "Copywriting", "Social Media"],
  },
  {
    slug: "landing-page-rewrite",
    title: "Landing Page Rewrite Sample",
    label: "Copywriting · Website Messaging",
    summary:
      "A before-and-after showing how to turn weak website copy into something that converts.",
    featured: false,
    tags: ["Copywriting", "Website Messaging", "Conversion"],
  },
];
