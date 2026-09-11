import { stack } from "@/data/cv";

const groups: { label: string; items: string[] }[] = [
  { label: "lenguajes", items: stack.languages },
  { label: "integracion", items: stack.integration },
  { label: "frameworks", items: stack.frameworks },
  { label: "datos", items: stack.data },
  { label: "herramientas", items: stack.tools },
];

export default function Stack() {
  return (
    <section id="stack" className="px-6 py-14">
      <div className="mx-auto max-w-content pl-8 trace">
        <span className="trace-node" style={{ top: "0.5rem" }} />
        <h2 className="font-display text-2xl text-paper">Stack</h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {groups.map((g) => (
            <div key={g.label} className="rounded-md border border-line bg-surface/60 p-4">
              <p className="font-mono text-xs text-signal">{g.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line bg-surfaceHigh px-2.5 py-1 text-[0.8rem] text-paper/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
