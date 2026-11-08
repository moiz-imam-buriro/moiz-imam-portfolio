import { useEffect } from 'react';
import { X } from 'lucide-react';

type Props = {
  embedUrl: string;
  onClose: () => void;
};

export function VideoModal({ embedUrl, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video demo"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 text-white transition-colors hover:bg-white/10"
      >
        <X size={20} />
      </button>

      <div
        className="relative w-[80%] max-w-[1000px]"
        onClick={(e) => e.stopPropagation()}
        style={{ aspectRatio: '16 / 9' }}
      >
        <iframe
          src={`${embedUrl}?autoplay=1&rel=0`}
          title="Demo video"
          className="h-full w-full rounded-lg border border-white/20"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
