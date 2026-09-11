import { projects } from "@/data/cv";

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-14">
      <div className="mx-auto max-w-content pl-8 trace">
        <span className="trace-node" style={{ top: "0.5rem" }} />
        <h2 className="font-display text-2xl text-paper">Proyectos</h2>

        <div className="mt-8 flex flex-col gap-10">
          {projects.map((p) => (
            <article key={p.id} className="pl-8 trace">
              <span
                className="trace-node"
                style={{ top: "0.4rem", borderColor: p.status === "active" ? "#F2A649" : "#5EEAD4" }}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl text-paper">{p.title}</h3>
                <span className="font-mono text-xs text-muted">{p.period}</span>
              </div>

              <p className="mt-1 text-sm text-muted">{p.role}</p>

              <ul className="mt-4 flex flex-col gap-2">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-paper/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.72rem] text-signal/90">
                {p.stack.map((s, i) => (
                  <span key={s} className="flex items-center gap-2">
                    {s}
                    {i < p.stack.length - 1 && <span className="text-line">·</span>}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
