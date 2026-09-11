import { experience, education, languages } from "@/data/cv";

export default function Experience() {
  return (
    <section id="experiencia" className="px-6 py-14">
      <div className="mx-auto max-w-content pl-8 trace">
        <span className="trace-node" style={{ top: "0.5rem" }} />
        <h2 className="font-display text-2xl text-paper">Experiencia &amp; educacion</h2>

        <div className="mt-8 flex flex-col gap-8">
          {experience.map((e) => (
            <div key={e.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg text-paper">
                  {e.role} <span className="text-muted">— {e.org}</span>
                </h3>
                <span className="font-mono text-xs text-muted">{e.period}</span>
              </div>
              <ul className="mt-3 flex flex-col gap-2">
                {e.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-paper/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="rounded-md border border-line bg-surface/60 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-lg text-paper">{education.degree}</h3>
              <span className="font-mono text-xs text-muted">{education.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted">
              {education.school} — {education.location}
            </p>
          </div>

          <div className="flex gap-8 font-mono text-sm text-muted">
            {languages.map((l) => (
              <div key={l.name}>
                <span className="text-paper">{l.name}</span>
                <span className="mx-2 text-line">/</span>
                {l.level}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
