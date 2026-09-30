import type { Metadata } from "next";
import BlogPage from "@/src/views/BlogPage";
export const metadata: Metadata = { title: "Blog" };
export default async function Page({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const initialCategory = category && ['jungle', 'temple', 'waterfall'].includes(category) ? category : 'all';
  return <BlogPage key={initialCategory} initialCategory={initialCategory} />;
}
