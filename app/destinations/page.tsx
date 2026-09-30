import type { Metadata } from "next";
import DestinationsPage from "@/src/views/DestinationsPage";
export const metadata: Metadata = { title: "Destinations" };
export default function Page() { return <DestinationsPage />; }
