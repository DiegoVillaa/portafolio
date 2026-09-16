import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QA Test Plan — Shopify Pre-Launch | Diego Villa Duran",
  description:
    "Sample QA test plan for a 10-page Shopify storefront, covering navigation, links, forms, and functionality before launch.",
};

type TestCase = {
  id: string;
  page: string;
  testCase: string;
  expected: string;
};

const pageInventory = [
  { page: "Home", purpose: "First impression, main nav", elements: "Hero banner, nav menu, featured products" },
  { page: "Collection / Category", purpose: "Product browsing", elements: "Filters, sorting, pagination" },
  { page: "Product Detail Page", purpose: "Individual product info", elements: "Add to cart, variant selector, images" },
  { page: "Cart", purpose: "Review selections", elements: "Quantity update, remove item, subtotal" },
  { page: "Checkout", purpose: "Purchase flow", elements: "Form fields, validation, shipping options" },
  { page: "About", purpose: "Brand info", elements: "Static content, images" },
  { page: "Contact", purpose: "Customer inquiries", elements: "Contact form, validation, submission" },
  { page: "FAQ", purpose: "Support content", elements: "Accordion/expand behavior" },
  { page: "Blog / News", purpose: "Content pages", elements: "Article links, pagination" },
  { page: "404 / Search Results", purpose: "Edge cases", elements: "Correct fallback, search functionality" },
];

const testCases: TestCase[] = [
  { id: "TC-01", page: "Home", testCase: "Click each main nav item", expected: "Each link navigates to the correct page without errors" },
  { id: "TC-02", page: "Product Page", testCase: "Select a product variant and add to cart", expected: "Cart updates with correct variant and quantity" },
  { id: "TC-03", page: "Cart", testCase: "Update item quantity to 0", expected: "Item is removed, subtotal updates correctly" },
  { id: "TC-04", page: "Checkout", testCase: "Submit form with an invalid email", expected: "Clear validation error, form does not proceed" },
  { id: "TC-05", page: "Contact", testCase: "Submit form with all required fields filled", expected: "Confirmation message displays; no console errors" },
  { id: "TC-06", page: "Contact", testCase: "Submit form with required fields empty", expected: "Validation errors appear for each missing field" },
  { id: "TC-07", page: "Any page", testCase: "Resize browser to mobile width (375px)", expected: "Layout adapts, no horizontal scroll, nav becomes hamburger" },
  { id: "TC-08", page: "Footer", testCase: "Click all footer links (social, legal, policies)", expected: "Each link resolves correctly; external links open properly" },
  { id: "TC-09", page: "404 handling", testCase: "Visit a non-existent URL", expected: "Proper 404 page shown, not broken/blank page" },
  { id: "TC-10", page: "All pages", testCase: "Check for broken images site-wide", expected: "0 broken images found" },
];

const deliverables = [
  "Full test case list covering all 10 pages",
  "Bug report document organized by severity and page",
  "Cross-browser / responsive summary (Chrome, Safari, mobile)",
  "Final recommendations — must-fix vs. nice-to-have list",
];

const tools = [
  "Manual exploratory testing across Chrome, Safari, and mobile viewport",
  "Browser DevTools — console errors and network/performance checks",
  "Selenium (Python) — automating repetitive checks like broken links/images site-wide",
  "Spreadsheet / Jira-style tracker for organizing test cases and bugs",
];

export default function QATestPlanPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
          QA Test Plan — Case Study
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          Shopify Storefront Pre-Launch Testing
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          A sample test plan demonstrating how I would approach a pre-launch
          QA review for a 10-page Shopify site — covering navigation, links,
          forms, and overall functionality.
        </p>
        <p className="mt-3 max-w-2xl text-xs italic text-slate-400 dark:text-slate-500">
          This is a sample test plan created to demonstrate methodology and
          is not based on an actual client engagement.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          1. Page Inventory
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-300">
              <tr>
                <th className="px-4 py-3 font-medium">Page</th>
                <th className="px-4 py-3 font-medium">Purpose</th>
                <th className="px-4 py-3 font-medium">Key Elements to Test</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {pageInventory.map((row) => (
                <tr key={row.page} className="bg-white dark:bg-slate-950">
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                    {row.page}
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                    {row.purpose}
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                    {row.elements}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          2. Testing Approach
        </h2>
        <ol className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <li>
            <span className="font-medium text-slate-900 dark:text-slate-100">
              Step 1 — Site Map &amp; Page Inventory:
            </span>{" "}
            build an inventory of all pages and their purpose before testing anything.
          </li>
          <li>
            <span className="font-medium text-slate-900 dark:text-slate-100">
              Step 2 — Exploratory Testing per Page:
            </span>{" "}
            check navigation, links, forms, responsive behavior, images, and console errors.
          </li>
          <li>
            <span className="font-medium text-slate-900 dark:text-slate-100">
              Step 3 — Defect Documentation:
            </span>{" "}
            log every issue with steps to reproduce, expected vs. actual result, severity, and screenshot.
          </li>
          <li>
            <span className="font-medium text-slate-900 dark:text-slate-100">
              Step 4 — Report &amp; Recommendations:
            </span>{" "}
            deliver a prioritized summary of what to fix before launch vs. what can wait.
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          3. Sample Test Cases
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {testCases.map((tc) => (
            <div
              key={tc.id}
              className="rounded-lg border border-slate-200 bg-white p-4 text-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="text-xs font-mono text-slate-400 dark:text-slate-500">
                {tc.id} · {tc.page}
              </p>
              <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">
                {tc.testCase}
              </p>
              <p className="mt-1 text-slate-600 dark:text-slate-400">
                Expected: {tc.expected}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
          4. Sample Bug Report Format
        </h2>
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950">
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {[
                ["Bug ID", "BUG-01"],
                ["Page", "Checkout"],
                ["Title", "Shipping cost does not update when changing country"],
                ["Steps to Reproduce", "Add product to cart → Go to Checkout → Change shipping country"],
                ["Expected Result", "Shipping cost recalculates based on the new country"],
                ["Actual Result", "Shipping cost remains the same"],
                ["Severity", "Critical"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="w-40 px-4 py-2 font-medium text-slate-700 dark:text-slate-300">
                    {label}
                  </td>
                  <td className="px-4 py-2 text-slate-600 dark:text-slate-400">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
            5. Deliverables
          </h2>
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-600 dark:text-slate-300">
            {deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
            6. Tools
          </h2>
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-600 dark:text-slate-300">
            {tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
