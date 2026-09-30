import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { packages } from "@/src/data/packages";
import PackageDetailPage from "@/src/views/PackageDetailPage";
type Props = { params: Promise<{ id: string }> };
export function generateStaticParams() { return packages.map(({id}) => ({id})); }
export async function generateMetadata({params}: Props): Promise<Metadata> { const {id} = await params; const item = packages.find(item => item.id === id); return { title: item?.title ?? "Not found" }; }
export default async function Page({params}: Props) { const {id} = await params; const pkg = packages.find(item => item.id === id); if (!pkg) notFound(); return <PackageDetailPage key={id} packageData={pkg} />; }
