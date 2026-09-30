import Link from "next/link";
export default function NotFound() {
  return <section className="min-h-[65vh] bg-neutral-900 text-white pt-40 pb-20 text-center"><div className="container"><h1 className="text-4xl font-bold mb-4">Page not found</h1><p className="mb-8">The page you requested does not exist.</p><Link href="/" className="btn btn-primary">Back to Home</Link></div></section>;
}
