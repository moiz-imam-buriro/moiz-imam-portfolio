import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { EMAIL } from '@/data';

export function CopyEmailButton() {
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

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-label="Copy email"
      className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-border px-5 text-[14px] font-medium text-text transition-colors hover:border-accent hover:text-accent sm:w-auto"
    >
      {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
      {copied ? 'Copied' : 'Copy email'}
    </button>
  );
}
