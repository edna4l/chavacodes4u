import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VisitPing from "@/components/VisitPing";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "chavacodes4u — AI Content, Prompts & Website Support",
  description:
    "Edna helps creators, small businesses, and purpose-driven projects turn messy ideas into social posts, AI visuals, landing pages, and launch content.",
  metadataBase: new URL("https://chavacodes4u.com"),
  openGraph: {
    title: "chavacodes4u — AI Content, Prompts & Website Support",
    description:
      "AI content, prompting, and website support for small brands with big ideas.",
    url: "https://chavacodes4u.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
        <VisitPing />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
