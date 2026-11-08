import { services } from '@/data';

export function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-content container-px py-16 sm:py-24">
        <div className="reveal">
          <h2
            className="font-semibold tracking-tight text-text"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.15 }}
          >
            {services.title}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-muted sm:text-[17px]" style={{ maxWidth: '65ch' }}>
            {services.intro}
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          {services.items.map((service, i) => (
            <div
              key={service.title}
              className="reveal flex flex-col gap-2 border-t border-border py-7 sm:flex-row sm:gap-10 sm:py-8"
              style={i === services.items.length - 1 ? { borderBottom: '1px solid var(--border)' } : undefined}
            >
              <h3 className="shrink-0 text-[17px] font-semibold text-text sm:w-[260px]">{service.title}</h3>
              <p className="text-[15px] leading-[1.65] text-muted" style={{ maxWidth: '52ch' }}>
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
