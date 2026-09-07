import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ApplyForm } from "@/components/ApplyForm";
import { SITE } from "@/lib/site";
import { canonicalToMain, MAIN_PATHS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Start a German UDS application, or email Student Affairs first. Master's and MBA applications are completed on german-uds.de.",
  ...canonicalToMain(MAIN_PATHS.apply),
};

type Props = { searchParams: Promise<{ program?: string }> };

export default async function ApplyPage({ searchParams }: Props) {
  const { program } = await searchParams;
  return (
    <>
      <PageHero
        kicker="Apply"
        title="Start your application."
        body="Use this form to brief Student Affairs. Master's and MBA applications are completed on the German UDS portal. Micro-Degrees can be booked immediately."
      />
      <section className="site-container grid gap-10 py-14 lg:grid-cols-2">
        <div>
          <h2 className="section-title">Two doors</h2>
          <ol className="mt-6 space-y-4 text-gray-700">
            <li>
              <strong>Degree application.</strong> Register at{" "}
              <a className="text-orange underline" href={SITE.applyUrl}>
                german-uds.de/study
              </a>
              , verify email, then start the application.
            </li>
            <li>
              <strong>Student Affairs first.</strong> Send the form so Student Affairs can check documents,
              Fast Track eligibility or Founder&apos;s MBA interest before you pay an application fee or tuition.
            </li>
          </ol>
          <a href={SITE.applyUrl} className="btn-cta mt-8" target="_blank" rel="noreferrer">
            Open official application
          </a>
        </div>
        <ApplyForm preset={program} />
      </section>
    </>
  );
}
