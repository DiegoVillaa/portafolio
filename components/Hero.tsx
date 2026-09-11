import { profile } from "@/data/cv";

export default function Hero() {
  return (
    <header className="relative px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-xs text-signal">
          {profile.location} · disponible para roles junior / mid
        </p>

        <h1 className="mt-5 font-display text-[2.6rem] leading-[1.05] tracking-tight text-balance sm:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-3 font-display text-xl text-muted sm:text-2xl">
          {profile.role}
        </p>

        <p className="mt-7 max-w-[58ch] text-[1.05rem] leading-relaxed text-paper/80">
          {profile.summary}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm text-muted">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-signal">
            {profile.email}
          </a>
          <span className="text-line">/</span>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-signal">
            {profile.github}
          </a>
          <span className="text-line">/</span>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-signal">
            {profile.linkedin}
          </a>
          <span className="text-line">/</span>
          <span>{profile.phone}</span>
        </div>
      </div>
    </header>
  );
}
