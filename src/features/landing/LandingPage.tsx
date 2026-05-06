import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Categories } from './components/Categories';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-[Inter,sans-serif] text-slate-900 antialiased selection:bg-blue-100">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Categories />
        <Testimonials />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
