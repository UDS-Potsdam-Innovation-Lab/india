import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Accessibility" };

export default function AccessibilityPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Accessibility statement" />
      <article className="site-container max-w-3xl space-y-6 py-12 text-gray-700">
        <p>
          We aim to meet WCAG 2.2 Level AA: semantic headings, keyboard-operable menus and forms,
          visible focus, colour contrast in the German UDS navy/orange palette, and language set to
          en-IN.
        </p>
        <p>
          Known limits: some programme media on german-uds.de may not be fully captioned; those assets
          are linked rather than re-hosted. If you need an alternative format, email office@german-uds.de.
        </p>
      </article>
    </>
  );
}
