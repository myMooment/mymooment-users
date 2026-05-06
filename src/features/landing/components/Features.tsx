import { Shield, Zap, CreditCard, Star, HeartHandshake, Clock } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { type ReactNode } from 'react';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const FEATURES: Feature[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Instant Booking',
    description: 'No more endless phone calls. Browse, compare, and book your perfect vendor in minutes.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Verified Vendors',
    description: 'Every vendor is carefully vetted and reviewed. Book with confidence knowing quality is guaranteed.',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges. See exactly what you\'ll pay before you book.',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Real Reviews',
    description: 'Read genuine reviews from real customers to make informed decisions for your event.',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: 'Dedicated Support',
    description: 'Our event specialists are here to help you plan the perfect celebration, every step of the way.',
    gradient: 'from-rose-400 to-red-500',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Save Time',
    description: 'Compare multiple vendors side by side. What used to take weeks now takes minutes.',
    gradient: 'from-cyan-400 to-blue-500',
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="group relative p-6 md:p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
        {feature.icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50/50">
      <Container>
        <SectionHeading
          badge="Why myMooment"
          title="Everything You Need for the Perfect Event"
          subtitle="We believe life's moments deserve to be cherished — beautifully. That's why we built a platform centered on comfort, trust, and simplicity."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
