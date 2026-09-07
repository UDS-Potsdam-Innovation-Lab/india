import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-container py-24 text-center">
      <p className="section-kicker">404</p>
      <h1 className="section-title">We could not find that page.</h1>
      <p className="mt-4 text-gray-600">Try the programme catalogue or return home.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-cta">Home</Link>
        <Link href="/study" className="btn-secondary">Study</Link>
      </div>
    </section>
  );
}
