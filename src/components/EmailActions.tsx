import { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';
import { EMAIL, gmailUrl } from '@/data';

type Props = {
  mailto: string;
  gmailSubject?: string;
  gmailBody?: string;
  copyLabel?: string;
  copiedLabel?: string;
  gmailLabel?: string;
  mailtoLabel?: string;
};

export function EmailActions({
  mailto,
  gmailSubject,
  gmailBody,
  copyLabel = 'Copy email',
  copiedLabel = 'Copied',
  gmailLabel = 'Open in Gmail',
  mailtoLabel = 'Email app',
}: Props) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const el = document.createElement('textarea');
      el.value = EMAIL;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand('copy');
      } finally {
        document.body.removeChild(el);
      }
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const btn =
    'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-border px-5 text-[14px] font-medium text-text transition-colors hover:border-accent hover:text-accent w-full sm:w-auto';

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <button type="button" onClick={copyEmail} className={btn} aria-label={copyLabel}>
        {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
        {copied ? copiedLabel : copyLabel}
      </button>
      <a
        href={gmailUrl(gmailSubject, gmailBody)}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
      >
        {gmailLabel}
      </a>
      <a href={mailto} className={btn}>
        <Mail size={15} />
        {mailtoLabel}
      </a>
    </div>
  );
}
