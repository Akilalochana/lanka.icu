import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogs } from "@/src/data/blogs";
import BlogDetailPage from "@/src/views/BlogDetailPage";
type Props = { params: Promise<{ id: string }> };
export function generateStaticParams() { return blogs.map(({id}) => ({id})); }
export async function generateMetadata({params}: Props): Promise<Metadata> { const {id} = await params; const item = blogs.find(item => item.id === id); return { title: item?.title ?? "Not found" }; }
export default async function Page({params}: Props) { const {id} = await params; const post = blogs.find(item => item.id === id); if (!post) notFound(); return <BlogDetailPage key={id} blog={post} />; }
