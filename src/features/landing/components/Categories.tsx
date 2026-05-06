import { ArrowRight } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';

interface Category {
  title: string;
  description: string;
  image: string;
  vendors: string;
}

const CATEGORIES: Category[] = [
  {
    title: 'Weddings',
    description: 'Photographers, decorators, caterers, venues & more for your dream wedding.',
    image: '/wedding.png',
    vendors: '200+ vendors',
  },
  {
    title: 'Birthdays',
    description: 'Cake artists, entertainers, balloon decorators & party planners.',
    image: '/birthday.png',
    vendors: '150+ vendors',
  },
  {
    title: 'Corporate Events',
    description: 'AV setups, catering, venues, emcees & event management teams.',
    image: '/corporate.png',
    vendors: '100+ vendors',
  },
];

export function Categories() {
  return (
    <section id="events" className="py-20 md:py-28 bg-slate-50/50">
      <Container>
        <SectionHeading
          badge="Event Categories"
          title="Celebrate Every Kind of Moment"
          subtitle="Whether it's the biggest day of your life or an intimate gathering, we've got the right vendors for you."
        />
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cat.image}
                  alt={`${cat.title} event setup`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-700">
                  {cat.vendors}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{cat.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{cat.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
