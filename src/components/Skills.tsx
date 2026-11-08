import { skills } from '@/data';

export function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-content container-px py-16 sm:py-24">
        <h2
          className="reveal font-semibold tracking-tight text-text"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.15 }}
        >
          {skills.title}
        </h2>

        <div className="mt-10 flex flex-col gap-8">
          {skills.groups.map((group) => (
            <div key={group.label} className="reveal">
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
                {group.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border px-3 py-1.5 text-[13px] font-medium text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
