import { ArrowRight, Utensils, Camera, MapPin, Music, Gift, LayoutGrid, Palette, Flower2, Sparkles } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

interface Category {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const CATEGORIES: Category[] = [
  {
    id: 1,
    title: 'Catering',
    description: 'Delicious menu options for every occasion',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: Utensils,
  },
  {
    id: 2,
    title: 'Photography',
    description: 'Professional photographers to capture your best moments',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: Camera,
  },
  {
    id: 3,
    title: 'Makeup Artists',
    description: 'Expert bridal & party makeup for your special day',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Palette,
  },
  {
    id: 4,
    title: 'Event Decor',
    description: 'Creative themes & decor that bring your vision to life',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: Sparkles,
  },
  {
    id: 5,
    title: 'Venues',
    description: 'Perfect venues for wedding, parties and corporate events',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: MapPin,
  },
  {
    id: 6,
    title: 'DJs & Entertainment',
    description: 'Top DJs, emcees & performers to keep the celebration alive',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: Music,
  },
  {
    id: 7,
    title: 'Mehendi Artists',
    description: 'Skilled artists for beautiful mehendi designs',
    image: 'https://images.pexels.com/photos/2260555/pexels-photo-2260555.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Flower2,
  },
  {
    id: 8,
    title: 'Gift Services',
    description: 'Unique gifts to make every moment special',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: Gift,
  },
];

export function Categories() {
  return (
    <section id="events" className="py-20 md:py-24 bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        {/* Section Heading */}
        <ScrollReveal animation="spring-up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-[#FF0066] font-bold text-sm tracking-widest uppercase mb-3">Everything You Need</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-3 tracking-tight">
              Explore Event Categories
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium">
              Find the perfect professionals to make every celebration unforgettable.
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-[#0F172A] font-bold hover:bg-slate-50 transition-colors whitespace-nowrap shadow-sm h-fit">
            View all categories <ArrowRight className="w-4 h-4 text-[#FF0066]" />
          </button>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category, i) => (
            <ScrollReveal key={category.id} animation="spring-up" delay={i * 100}>
              <div
                className="group relative rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-[160px] overflow-hidden rounded-t-[24px] bg-slate-100 p-2">
                  <div className="w-full h-full rounded-[16px] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Floating Icon */}
                <div className="absolute top-[136px] left-5 z-10">
                  <div className="bg-white p-1.5 rounded-full shadow-md">
                    <div className="w-10 h-10 rounded-full bg-[#FFF0F6] flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-[#FF0066]" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="pt-12 px-6 pb-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-extrabold text-[#0F172A] mb-1.5 tracking-tight">{category.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed flex-grow pr-4">
                    {category.description}
                  </p>
                  <div className="flex justify-end mt-4">
                    <ArrowRight className="w-4 h-4 text-[#FF0066] transition-transform group-hover:translate-x-1" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner */}
        <ScrollReveal animation="spring-up" delay={200} className="mt-12 bg-[#FFF0F6] rounded-[24px] md:rounded-full p-6 md:px-10 md:py-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-pink-100/50">
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="relative shrink-0 hidden sm:block">
              <Sparkles className="w-5 h-5 text-pink-300 absolute -top-2 -left-2" />
              <div className="w-14 h-14 bg-[#FF0066] rounded-full flex items-center justify-center shadow-lg shadow-pink-200">
                <LayoutGrid className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-[#0F172A] text-lg md:text-xl font-extrabold mb-1">
                More amazing categories coming soon!
              </h3>
              <p className="text-slate-600 text-sm md:text-base font-medium">
                We're constantly adding new services to serve you better.
              </p>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 text-[#FF0066] font-bold hover:gap-3 transition-all whitespace-nowrap bg-white/60 hover:bg-white px-8 py-3.5 rounded-full w-full md:w-auto shadow-sm">
            Explore more <ArrowRight className="w-4 h-4" strokeWidth={3} />
          </button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
