import { Star } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  event: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    avatar: 'PS',
    content: 'myMooment made our wedding planning completely stress-free. We found the most amazing photographer and decorator within minutes. The entire experience was seamless!',
    rating: 5,
    event: 'Wedding in Mumbai',
  },
  {
    name: 'Rahul Kapoor',
    role: 'Event Manager',
    avatar: 'RK',
    content: 'As a corporate event manager, I rely on trustworthy vendors. myMooment\'s verified vendor system and transparent pricing saved us hours of research and negotiation.',
    rating: 5,
    event: 'Corporate Gala, Delhi',
  },
  {
    name: 'Ananya Reddy',
    role: 'Parent',
    avatar: 'AR',
    content: 'Planned my daughter\'s first birthday party through myMooment. The balloon artist and cake designer were both exceptional. Couldn\'t have asked for a more magical celebration!',
    rating: 5,
    event: 'Birthday in Hyderabad',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="Loved by Event Planners"
          subtitle="Hear from customers who turned their celebrations into unforgettable moments with myMooment."
        />
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300"
            >
              <StarRating rating={t.rating} />
              <p className="mt-4 text-sm text-slate-600 leading-relaxed italic">
                "{t.content}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
