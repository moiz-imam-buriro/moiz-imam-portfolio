
import { ArrowUpRight } from 'lucide-react';
import { contact, social, EMAIL } from '@/data';
import { EmailActions } from '@/components/EmailActions';

export function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-content container-px py-16 sm:py-24">
        <div className="reveal max-w-[65ch]">
          <h2
            className="font-semibold tracking-tight text-text"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.15 }}
          >
            {contact.title}
          </h2>

          <p className="mt-4 text-[16px] leading-[1.65] text-muted sm:text-[17px]">
            {contact.text}
          </p>

          <p className="mt-8 select-text break-words text-[20px] font-medium tracking-tight text-text sm:text-[24px]">
            {EMAIL}
          </p>

          <div className="mt-6">
            <EmailActions
              mailto={`mailto:${social.email}`}
              gmailSubject="Project inquiry"
            />
          </div>

          <div className="mt-3 flex flex-wrap gap-3">
            {contact.buttons
              .filter((button) => button.kind === 'link')
              .map((button) => (
                <a
                  key={button.label}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-border px-6 text-[15px] font-medium text-text transition-colors hover:border-accent hover:text-accent"
                >
                  {button.label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
