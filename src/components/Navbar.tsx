import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '@/data';
import { ThemeToggle } from '@/hooks/useTheme';

type Theme = 'light' | 'dark';

export function Navbar({ theme, toggle }: { theme: Theme; toggle: () => void }) {
  const [open, setOpen] = useState(false);

  // Close the menu on resize to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Smooth-scroll with sticky-navbar offset only for in-page hashes.
    if (!href.startsWith('#')) return;
    e.preventDefault();
    setOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur"
      style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 95%, transparent)' }}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between container-px" style={{ height: 64 }}>
        <a
          href="#top"
          onClick={(e) => handleNav(e, '#top')}
          className="text-[15px] font-bold tracking-tight text-text"
          aria-label={`${nav.name} — home`}
        >
          {nav.name}
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden md:flex md:items-center md:gap-1">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="inline-flex min-h-[44px] items-center rounded-md px-3 text-[14px] text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle theme={theme} toggle={toggle} />

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-text md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <ul className="mx-auto max-w-content container-px py-2">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="flex min-h-[44px] items-center rounded-md px-2 text-[15px] text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
