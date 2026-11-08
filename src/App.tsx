import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Skills } from '@/components/Skills';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/hooks/useTheme';
import { useReveal } from '@/hooks/useReveal';

export default function App() {
  const { theme, toggle } = useTheme();
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
