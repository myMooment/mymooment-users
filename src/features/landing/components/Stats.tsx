import { Container } from '../../../components/ui/Container';

const STATS = [
  { value: '500+', label: 'Verified Vendors', description: 'Photographers, caterers, decorators & more' },
  { value: '10K+', label: 'Happy Customers', description: 'Events planned across India' },
  { value: '4.9', label: 'User Rating', description: 'Average satisfaction score' },
  { value: '50+', label: 'Event Categories', description: 'From weddings to corporate meetups' },
];

export function Stats() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center group">
              <p className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-700">{stat.label}</p>
              <p className="mt-1 text-xs text-slate-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
