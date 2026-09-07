import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ApplyForm } from "@/components/ApplyForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact German UDS: office email, Potsdam headquarters, Student Affairs, and an enquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact" title="Talk to German UDS" body="Headquarters in Potsdam. Student Affairs supports you from enquiry to graduation." />
      <section className="site-container grid gap-10 py-14 lg:grid-cols-2">
        <div>
          <h2 className="section-title">CloudHouse</h2>
          <p className="mt-4 text-gray-700">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
            <br />
            {SITE.address.city}
            <br />
            {SITE.address.country}
          </p>
          <p className="mt-4 text-gray-700">
            <a className="text-orange" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <br />
            {SITE.phone}
          </p>
          <p className="mt-6 text-sm text-gray-500">
            Complaints: {SITE.presidiumEmail}. We are neither obliged nor willing to participate in
            consumer arbitration (VSBG).
          </p>
        </div>
        <ApplyForm />
      </section>
    </>
  );
}
