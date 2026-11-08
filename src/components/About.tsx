import { about } from '@/data';

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-content container-px py-16 sm:py-24">
        <div className="reveal max-w-[65ch]">
          <h2
            className="font-semibold tracking-tight text-text"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.15 }}
          >
            {about.title}
          </h2>
          <div className="mt-6 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.65] text-muted sm:text-[17px]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
