import { Search, CalendarCheck, PartyPopper } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { type ReactNode } from 'react';

interface Step {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    icon: <Search className="w-6 h-6" />,
    title: 'Browse & Discover',
    description: 'Explore hundreds of verified vendors across 50+ event categories. Filter by location, budget, and ratings.',
  },
  {
    number: '02',
    icon: <CalendarCheck className="w-6 h-6" />,
    title: 'Compare & Book',
    description: 'View portfolios, read reviews, compare pricing — then book instantly with secure payment options.',
  },
  {
    number: '03',
    icon: <PartyPopper className="w-6 h-6" />,
    title: 'Celebrate!',
    description: 'Sit back and enjoy your event. We handle the coordination so you can focus on making memories.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          badge="Simple Process"
          title="How myMooment Works"
          subtitle="Planning your perfect event is as easy as 1-2-3. No endless calls, no stress — just seamless bookings."
        />
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200" />

          {STEPS.map((step) => (
            <div key={step.number} className="relative text-center group">
              {/* Step circle */}
              <div className="relative z-10 mx-auto w-[120px] h-[120px] rounded-full bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100 flex flex-col items-center justify-center mb-6 group-hover:border-blue-300 group-hover:shadow-lg group-hover:shadow-blue-100/50 transition-all duration-300">
                <span className="text-xs font-bold text-blue-400 mb-1 tracking-wider">{step.number}</span>
                <span className="text-blue-600">{step.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
