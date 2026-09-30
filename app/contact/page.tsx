import type { Metadata } from "next";
import ContactPage from "@/src/views/ContactPage";
export const metadata: Metadata = { title: "Contact" };
export default function Page() { return <ContactPage />; }
