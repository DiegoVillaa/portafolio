import { profile } from "@/data/cv";

export default function Contact() {
  return (
    <section id="contacto" className="px-6 pb-24 pt-14">
      <div className="mx-auto max-w-content pl-8 trace">
        <span className="trace-node" style={{ top: "0.5rem" }} />
        <h2 className="font-display text-2xl text-paper">Hablemos</h2>
        <p className="mt-4 max-w-[52ch] text-[1.05rem] leading-relaxed text-paper/80">
          Buscando sumarme a un equipo como Full-Stack Engineer junior/mid, con
          foco en integracion de sistemas y backend. Escribeme directamente.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-7 inline-flex items-center gap-2 rounded-md border border-signal/40 bg-signal/10 px-5 py-3 font-mono text-sm text-signal transition-colors hover:bg-signal/20"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-signal">
            {profile.github}
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-signal">
            {profile.linkedin}
          </a>
          <span>{profile.phone}</span>
        </div>
      </div>

      <p className="mx-auto mt-20 max-w-content pl-8 font-mono text-[0.7rem] text-muted/60">
        {profile.name} — actualizado {new Date().getFullYear()}
      </p>
    </section>
  );
}
