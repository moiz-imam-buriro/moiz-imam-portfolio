import { nav } from '@/data';

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-content flex-col gap-2 container-px py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-muted">{nav.name} | AI Engineer</p>
        <p className="text-[13px] text-muted">Pakistan</p>
      </div>
    </footer>
  );
}
