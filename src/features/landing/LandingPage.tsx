import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Categories } from './components/Categories';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-[Inter,sans-serif] text-slate-900 antialiased selection:bg-pink-100">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <HowItWorks />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
