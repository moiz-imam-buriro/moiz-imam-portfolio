import { hero } from '@/data';

function scrollTo(href: string, e: React.MouseEvent<HTMLAnchorElement>) {
  if (!href.startsWith('#')) return;
  e.preventDefault();
  const el = document.getElementById(href.slice(1));
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-content container-px py-16 sm:py-24 md:py-32">
        <div className="reveal max-w-[65ch]">
          <p className="mb-5 text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
            {hero.label}
          </p>
          <h1
            className="font-semibold tracking-tight text-text"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              lineHeight: 1.1,
            }}
          >
            {hero.heading}
          </h1>
          <p className="mt-6 text-[16px] leading-[1.65] text-muted sm:text-[17px]" style={{ maxWidth: '60ch' }}>
            {hero.subtext}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={hero.buttons[0].href}
              onClick={(e) => scrollTo(hero.buttons[0].href, e)}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-accent px-6 text-[15px] font-medium text-white transition-colors hover:bg-accent-hover"
            >
              {hero.buttons[0].label}
            </a>
            <a
              href={hero.buttons[1].href}
              onClick={(e) => scrollTo(hero.buttons[1].href, e)}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-border px-6 text-[15px] font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              {hero.buttons[1].label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
