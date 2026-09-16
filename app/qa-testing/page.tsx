import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QA Testing Practice — Saucedemo | Diego Villa Duran",
  description:
    "Exploratory testing practice and bug documentation on saucedemo.com — 10 defects identified and classified.",
};

type Bug = {
  id: string;
  title: string;
  user: string;
  steps: string[];
  expected: string;
  actual: string;
  severity: "Minor" | "Major" | "Critical";
  type: string;
  note?: string;
};

const controlCase: Bug = {
  id: "TC-Login-01",
  title: "Login with a locked-out user",
  user: "locked_out_user",
  steps: ["Enter credentials", "Click Login"],
  expected: "The system should deny access with an error message",
  actual:
    '✅ Matches — "Epic sadface: Sorry, this user has been locked out."',
  severity: "Minor",
  type: "Pass (validation working as intended)",
};

const bugs: Bug[] = [
  {
    id: "Bug 1",
    title: "Incorrect product images",
    user: "problem_user",
    steps: ["Log in with problem_user", "Go to the product catalog"],
    expected: "Each product should display its correct image",
    actual: "Product images are mismatched / incorrect",
    severity: "Minor",
    type: "Visual / UI",
  },
  {
    id: "Bug 2",
    title: "Cannot add all products to the cart",
    user: "problem_user",
    steps: [
      "Log in with problem_user",
      "Try to add all products to the cart",
    ],
    expected: "All products should be addable to the cart",
    actual: "Only 3 products can be added successfully",
    severity: "Critical",
    type: "Functional",
  },
  {
    id: "Bug 3",
    title: '"First Name" field gets overwritten while typing the last name',
    user: "problem_user",
    steps: [
      "Log in with problem_user",
      "Go to checkout",
      "Type in First Name",
      "Type in Last Name",
    ],
    expected: "Each field should retain its own value independently",
    actual:
      'The content of "First Name" is overwritten with the keys typed in "Last Name"',
    severity: "Critical",
    type: "Functional — blocks completing checkout with correct data",
  },
  {
    id: "Bug 4",
    title: '"About" link does not load correctly',
    user: "problem_user",
    steps: ["Log in with problem_user", "Open side menu", 'Click "About"'],
    expected:
      "Should redirect correctly (confirmed working with standard_user)",
    actual: "The page fails to load correctly",
    severity: "Minor",
    type: "Navigation",
    note: "Bug isolated to problem_user — does not occur with standard_user",
  },
  {
    id: "Bug 5",
    title: "General performance slowdown",
    user: "performance_glitch_user",
    steps: [
      "Log in with performance_glitch_user",
      "Navigate between pages",
    ],
    expected:
      "Load times should be similar to standard_user (under 1–2 seconds)",
    actual:
      'The login freezes for ~5 seconds; navigation (e.g. "Back to all products") also shows noticeable delays',
    severity: "Major",
    type: "Performance",
  },
  {
    id: "Bug 6",
    title: "Incorrect redirect after login",
    user: "performance_glitch_user",
    steps: ["Log in with performance_glitch_user"],
    expected: "Should land on the product catalog (inventory page)",
    actual:
      "Redirects directly to a specific product's detail page instead",
    severity: "Major",
    type: "Navigation / Flow",
  },
  {
    id: "Bug 7",
    title: "Cannot add certain products to the cart",
    user: "error_user",
    steps: ["Log in with error_user", "Try to add all products to the cart"],
    expected: "All products should be addable to the cart",
    actual: "3 products cannot be added to the cart",
    severity: "Critical",
    type: "Functional",
  },
  {
    id: "Bug 8",
    title: '"Last Name" field does not accept text input',
    user: "error_user",
    steps: ["Log in with error_user", "Go to checkout", "Type in Last Name"],
    expected: "The field should accept and retain the entered last name",
    actual: "The field does not allow typing / does not save the value",
    severity: "Major",
    type: "Functional",
  },
  {
    id: "Bug 9",
    title: "Missing required-field validation",
    user: "error_user",
    steps: [
      "Log in with error_user",
      'Fill out checkout leaving "Last Name" empty (due to Bug 8)',
      "Click Continue",
    ],
    expected:
      "The system should show a validation error for the required field",
    actual: "The system allows the user to proceed without that data",
    severity: "Major",
    type: "Data validation",
  },
  {
    id: "Bug 10",
    title: '"Finish" button does not complete the order',
    user: "error_user",
    steps: [
      "Log in with error_user",
      "Complete the checkout flow through to the final screen",
      'Click "Finish"',
    ],
    expected: "The order should be completed and show a confirmation screen",
    actual: "The button does not respond / the purchase is not completed",
    severity: "Critical",
    type: "Functional — fully blocks checkout completion",
  },
];

const severityStyles: Record<Bug["severity"], string> = {
  Minor: "bg-slate-100 text-slate-700 border-slate-300",
  Major: "bg-amber-100 text-amber-800 border-amber-300",
  Critical: "bg-red-100 text-red-800 border-red-300",
};

function BugCard({ bug }: { bug: Bug }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-mono text-slate-400 dark:text-slate-500">
            {bug.id}
          </p>
          <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">
            {bug.title}
          </h3>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
            severityStyles[bug.severity]
          }`}
        >
          {bug.severity}
        </span>
      </div>

      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        User:{" "}
        <code className="rounded bg-slate-100 px-1 py-0.5 dark:bg-slate-800">
          {bug.user}
        </code>{" "}
        · {bug.type}
      </p>

      <div className="mt-4 space-y-3 text-sm">
        <div>
          <p className="font-medium text-slate-700 dark:text-slate-300">
            Steps to reproduce
          </p>
          <ol className="mt-1 list-decimal space-y-0.5 pl-5 text-slate-600 dark:text-slate-400">
            {bug.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>
        <div>
          <p className="font-medium text-slate-700 dark:text-slate-300">
            Expected
          </p>
          <p className="text-slate-600 dark:text-slate-400">{bug.expected}</p>
        </div>
        <div>
          <p className="font-medium text-slate-700 dark:text-slate-300">
            Actual
          </p>
          <p className="text-slate-600 dark:text-slate-400">{bug.actual}</p>
        </div>
        {bug.note && (
          <p className="rounded-md bg-blue-50 px-3 py-2 text-xs text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            {bug.note}
          </p>
        )}
      </div>
    </div>
  );
}

export default function QATestingPracticePage() {
  const summary = [
    { label: "Functional", count: 5 },
    { label: "Visual / UI", count: 1 },
    { label: "Performance", count: 1 },
    { label: "Navigation / Flow", count: 2 },
    { label: "Data validation", count: 1 },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
          QA / Testing Case Study
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          Exploratory Testing Practice — saucedemo.com
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          A self-directed exercise practicing exploratory testing and defect
          documentation across saucedemo.com&apos;s different test users,
          identifying and classifying 10 defects by type and severity.
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {summary.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-center dark:border-slate-700 dark:bg-slate-900"
            >
              <dt className="text-xs text-slate-500 dark:text-slate-400">
                {s.label}
              </dt>
              <dd className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                {s.count}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          Control Case — expected behavior
        </h2>
        <BugCard bug={controlCase} />
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          Defects Found
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {bugs.map((bug) => (
            <BugCard key={bug.id} bug={bug} />
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
          Takeaways
        </h2>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-600 dark:text-slate-300">
          <li>
            Performed systematic exploratory testing, comparing 5 different
            users against a standard_user baseline.
          </li>
          <li>
            Classified defects by type (functional, visual, performance,
            navigation, validation) and severity (Minor, Major, Critical).
          </li>
          <li>
            Isolated variables to confirm whether a bug was user-specific or
            a general site behavior.
          </li>
          <li>
            Distinguished related but distinct root causes within the same
            flow.
          </li>
        </ul>
      </section>
    </main>
  );
}
