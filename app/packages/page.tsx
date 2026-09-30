import type { Metadata } from "next";
import PackagesPage from "@/src/views/PackagesPage";
export const metadata: Metadata = { title: "Packages" };
export default function Page() { return <PackagesPage />; }
