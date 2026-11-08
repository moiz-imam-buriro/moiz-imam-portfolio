import { useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { projects, gmailUrl } from '@/data';
import { VideoModal } from '@/components/VideoModal';
import { CopyEmailButton } from '@/components/CopyEmailButton';

export function Projects() {
  const [video, setVideo] = useState<string | null>(null);

  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-content container-px py-16 sm:py-24">
        <div className="reveal">
          <h2
            className="font-semibold tracking-tight text-text"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.15 }}
          >
            {projects.title}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-muted sm:text-[17px]" style={{ maxWidth: '65ch' }}>
            {projects.intro}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8">
          {projects.items.map((project) => (
            <article
              key={project.number}
              className="reveal overflow-hidden rounded-lg border-l-2 border-l-accent border-y border-r border-border bg-surface transition-shadow hover:shadow-[0_1px_8px_rgba(0,0,0,0.06)]"
            >
              <div className="p-6 sm:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[13px] text-muted">{project.number}</span>
                  <h3 className="text-[20px] font-semibold tracking-tight text-text sm:text-[24px]">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className="inline-flex items-center rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                      {project.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-[16px] leading-[1.6] text-text sm:text-[17px]" style={{ maxWidth: '65ch' }}>
                  {project.summary}
                </p>

                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
                      The problem
                    </h4>
                    <p className="mt-2 text-[15px] leading-[1.65] text-muted" style={{ maxWidth: '50ch' }}>
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
                      What it does
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {project.whatItDoes.map((item, i) => (
                        <li key={i} className="flex gap-2 text-[15px] leading-[1.6] text-muted" style={{ maxWidth: '50ch' }}>
                          <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-accent-soft px-2.5 py-1 text-[12px] font-medium text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.buttons.map((btn) => {
                    if (btn.kind === 'video') {
                      return (
                        <button
                          key={btn.label}
                          type="button"
                          onClick={() => setVideo(btn.embedUrl)}
                          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-accent px-5 text-[14px] font-medium text-white transition-colors hover:bg-accent-hover"
                        >
                          <Play size={15} />
                          {btn.label}
                        </button>
                      );
                    }
                    if (btn.kind === 'mailto') {
                      const subject = 'Demo access request: Website Monitor Agent';
                      const body =
                        'Hi Moiz, I would like demo access to the Website Monitor Agent. My name: ';
                      return (
                        <div
                          key={btn.label}
                          className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap"
                        >
                          <a
                            href={btn.href}
                            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg border border-border px-5 text-[14px] font-medium text-text transition-colors hover:border-accent hover:text-accent sm:w-auto"
                          >
                            {btn.label}
                          </a>
                          <a
                            href={gmailUrl(subject, body)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg border border-border px-5 text-[14px] font-medium text-text transition-colors hover:border-accent hover:text-accent sm:w-auto"
                          >
                            Open in Gmail
                          </a>
                          <CopyEmailButton />
                        </div>
                      );
                    }
                    return (
                      <a
                        key={btn.label}
                        href={btn.href}
                        target={btn.external ? '_blank' : undefined}
                        rel={btn.external ? 'noopener noreferrer' : undefined}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-border px-5 text-[14px] font-medium text-text transition-colors hover:border-accent hover:text-accent"
                      >
                        {btn.label}
                        {btn.external && <ArrowUpRight size={15} />}
                      </a>
                    );
                  })}
                </div>

                {project.note && (
                  <p className="mt-4 text-[13px] leading-[1.5] text-muted">{project.note}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {video && <VideoModal embedUrl={video} onClose={() => setVideo(null)} />}
    </section>
  );
}
