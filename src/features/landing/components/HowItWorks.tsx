import { Search, Sparkles, ArrowRight, Star, Shield, Filter, Check, Clock, Play, Heart, PartyPopper, Scale } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-[#FAFAFA] font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 relative">
          
          {/* Left Column (Sticky Content) */}
          <div className="lg:w-[32%] flex flex-col items-start lg:sticky lg:top-24 h-fit relative z-20">
            <ScrollReveal animation="slide-left">
              {/* Sparkles badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF0F6] text-[#FF0066] text-xs font-bold mb-4 border border-pink-100">
                <Sparkles className="w-3.5 h-3.5" />
                Simple. Seamless. Stress-free.
              </div>
              
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] leading-[1.1] mb-4 tracking-tight">
                How <br className="hidden lg:block"/>
                <span className="text-[#FF0066]">myMooment</span><br className="hidden lg:block"/>
                Works
              </h2>
              
              {/* Decorative Squiggle */}
              <svg width="50" height="10" viewBox="0 0 60 12" fill="none" className="mb-5">
                <path d="M2 6C6.71429 2 11.4286 2 16.1429 6C20.8571 10 25.5714 10 30.2857 6C35 2 39.7143 2 44.4286 6C49.1429 10 53.8571 10 58.5714 6" stroke="#FF0066" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              {/* Description */}
              <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed mb-8 max-w-sm">
                From shortlisting to celebration, we make every step effortless so you can enjoy every moment.
              </p>
              
              {/* Button */}
              <button className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#FF0066] text-white font-bold text-base hover:bg-[#E6005C] transition-colors shadow-lg shadow-pink-200 group mb-10">
                Start Planning Now 
                <div className="bg-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3 text-[#FF0066] stroke-[3]" />
                </div>
              </button>
              
              {/* Trust avatars */}
              <div className="flex flex-col gap-2.5">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200 shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${i + 40}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#FFF0F6] flex items-center justify-center text-[9px] font-bold text-[#FF0066] z-10 shadow-sm">
                    10K+
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#0F172A]">
                  Trusted by <span className="text-slate-500 font-medium">10,000+ customers</span>
                </p>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (Timeline & Cards) */}
          <div className="lg:w-[68%] relative mt-10 lg:mt-0">
            {/* Vertical Gradient Line (Timeline) */}
            <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#FF0066] via-[#8B5CF6] to-[#F97316] hidden md:block z-0" />

            <div className="flex flex-col gap-8 lg:gap-10">
              
              {/* Step 1 Card */}
              <ScrollReveal animation="spring-up" delay={0}>
                <div className="flex flex-col md:flex-row gap-5 md:gap-8 relative z-10">
                  {/* Timeline Number */}
                  <div className="hidden md:flex shrink-0 w-14 flex-col items-center pt-6">
                    <div className="w-14 h-14 bg-[#FAFAFA] rounded-full flex items-center justify-center border-[3px] border-white shadow-sm ring-2 ring-[#FF0066] text-[#FF0066] font-extrabold text-lg z-10">
                      01
                    </div>
                  </div>
                  {/* Card Container */}
                  <div className="flex-1 bg-white rounded-[24px] p-5 md:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col lg:flex-row gap-6 items-center hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-shadow">
                    {/* Card Left Text */}
                    <div className="flex flex-col items-start lg:w-[45%] w-full">
                      <div className="w-10 h-10 rounded-full bg-[#FF0066] flex items-center justify-center shadow-md shadow-pink-200 mb-4">
                        <Search className="w-5 h-5 text-white stroke-[2.5]" />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0F172A] mb-2 tracking-tight">Discover & Explore</h3>
                      <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-5">
                        Explore top-rated vendors across categories, compare options, and find the perfect match.
                      </p>
                      {/* Mock Search Button */}
                      <div className="flex items-center justify-between w-full bg-white border border-slate-200 rounded-full py-2 px-3 shadow-sm">
                        <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-slate-700">
                          <Search className="w-3.5 h-3.5 text-slate-400" />
                          Wedding Decorators in <span className="text-[#FF0066]">Hyderabad</span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-[#FF0066] flex items-center justify-center shrink-0">
                          <ArrowRight className="w-2.5 h-2.5 text-white" />
                        </div>
                      </div>
                    </div>
                    {/* Card Right Mockup */}
                    <div className="flex-1 w-full bg-slate-50/80 border border-slate-100 rounded-[16px] p-3 flex flex-col gap-3">
                      <div className="bg-white rounded-md p-2 flex items-center justify-between shadow-sm border border-slate-100">
                        <div className="flex items-center gap-2 text-[9px] text-slate-400 font-medium">
                          <Search className="w-3 h-3" /> Search vendors, categories...
                        </div>
                        <Filter className="w-3 h-3 text-slate-400" />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { title: 'Dream Decor', rating: '4.8' },
                          { title: 'Elegant Events', rating: '4.6' },
                          { title: 'The Wedding Bliss', rating: '4.7' }
                        ].map((item, i) => (
                          <div key={i} className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden p-1.5">
                            <img src={`https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80`} alt="decor" className="w-full h-12 object-cover rounded-md mb-1.5" />
                            <div className="flex items-center text-[8px] font-bold text-slate-800 mb-0.5">
                              <Star className="w-2 h-2 text-[#FFB800] fill-[#FFB800] mr-1"/> {item.rating}
                            </div>
                            <p className="text-[9px] font-extrabold text-[#0F172A] truncate mb-0.5">{item.title}</p>
                            <div className="flex justify-between items-center mt-1 text-[7px]">
                              <span className="text-slate-400">Decorators</span>
                              <span className="font-bold text-slate-700">₹₹</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 2 Card */}
              <ScrollReveal animation="spring-up" delay={150}>
                <div className="flex flex-col md:flex-row gap-5 md:gap-8 relative z-10">
                  {/* Timeline Number */}
                  <div className="hidden md:flex shrink-0 w-14 flex-col items-center pt-6">
                    <div className="w-14 h-14 bg-[#FAFAFA] rounded-full flex items-center justify-center border-[3px] border-white shadow-sm ring-2 ring-[#8B5CF6] text-[#8B5CF6] font-extrabold text-lg z-10">
                      02
                    </div>
                  </div>
                  {/* Card Container */}
                  <div className="flex-1 bg-white rounded-[24px] p-5 md:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col lg:flex-row gap-6 items-center hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-shadow">
                    {/* Card Left Text */}
                    <div className="flex flex-col items-start lg:w-[38%] w-full">
                      <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center shadow-md shadow-purple-200 mb-4">
                        <Scale className="w-5 h-5 text-white stroke-[2.5]" />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0F172A] mb-2 tracking-tight">Compare & Book</h3>
                      <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
                        Compare profiles, prices, reviews, and services. Book instantly with secure payments.
                      </p>
                    </div>
                    {/* Card Right Mockup */}
                    <div className="flex-1 w-full flex flex-row gap-2.5">
                      {/* Table */}
                      <div className="flex-1 bg-white border border-slate-100 rounded-[16px] p-3 shadow-sm">
                        <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 pb-2 border-b border-slate-50 mb-2 px-1">
                          <span>Vendors</span>
                          <div className="flex gap-3 sm:gap-4 pr-1">
                            <Star className="w-3 h-3 text-[#FFB800] fill-[#FFB800]" />
                            <Shield className="w-3 h-3 text-green-500" />
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span className="w-3 text-center text-[10px]">₹</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2.5">
                          {[
                            { title: 'Dream Decor', rating: '4.8', img: '41' },
                            { title: 'Elegant Events', rating: '4.6', img: '42' },
                            { title: 'The Wedding Bliss', rating: '4.7', img: '43' }
                          ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center px-1 text-[9px] font-bold text-[#0F172A]">
                              <div className="flex items-center gap-1.5 w-[85px] sm:w-auto overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${item.img}`} alt="vendor" className="w-4 h-4 rounded-full object-cover shrink-0" /> 
                                <span className="truncate">{item.title}</span>
                              </div>
                              <div className="flex gap-3 sm:gap-4 text-center items-center pr-1 shrink-0">
                                <span className="w-3">{item.rating}</span>
                                <Check className="w-3 h-3 text-green-500 w-3 stroke-[3]" />
                                <Check className="w-3 h-3 text-green-500 w-3 stroke-[3]" />
                                <span className="w-3">₹₹</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Success Card */}
                      <div className="w-[100px] md:w-[110px] shrink-0 bg-white border border-slate-100 rounded-[16px] p-3 shadow-xl flex flex-col items-center justify-center text-center">
                        <div className="w-8 h-8 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-2">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                        <p className="text-[10px] font-extrabold text-[#0F172A] mb-1 leading-tight">Booking Confirmed!</p>
                        <p className="text-[8px] text-slate-500 mb-3 font-medium">Your event is all set.</p>
                        <div className="w-full bg-[#8B5CF6] text-white text-[9px] py-1.5 rounded-full flex items-center justify-center gap-1 font-bold cursor-pointer hover:bg-purple-600 transition">
                          View <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 3 Card */}
              <ScrollReveal animation="spring-up" delay={300}>
                <div className="flex flex-col md:flex-row gap-5 md:gap-8 relative z-10">
                  {/* Timeline Number */}
                  <div className="hidden md:flex shrink-0 w-14 flex-col items-center pt-6">
                    <div className="w-14 h-14 bg-[#FAFAFA] rounded-full flex items-center justify-center border-[3px] border-white shadow-sm ring-2 ring-[#F97316] text-[#F97316] font-extrabold text-lg z-10">
                      03
                    </div>
                  </div>
                  {/* Card Container */}
                  <div className="flex-1 bg-white rounded-[24px] p-5 md:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col lg:flex-row gap-6 items-center hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-shadow">
                    {/* Card Left Text */}
                    <div className="flex flex-col items-start lg:w-[40%] w-full">
                      <div className="w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center shadow-md shadow-orange-200 mb-4">
                        <PartyPopper className="w-5 h-5 text-white stroke-[2.5]" />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0F172A] mb-2 tracking-tight">Relax & Celebrate</h3>
                      <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
                        We handle the coordination so you can relax and enjoy your special day.
                      </p>
                    </div>
                    {/* Card Right Mockup */}
                    <div className="flex-1 w-full relative rounded-[16px] overflow-hidden shadow-sm h-[140px] md:h-[150px]">
                      <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Happy couple celebrating" className="w-full h-full object-cover" />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 bg-white/95 backdrop-blur rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                        <Play className="w-4 h-4 text-[#F97316] fill-[#F97316] ml-0.5" />
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute bottom-3 right-3 bg-white rounded-lg p-2.5 flex items-center gap-2 shadow-lg border border-slate-50">
                        <div className="w-7 h-7 bg-[#FFF0F6] text-[#FF0066] rounded-full flex items-center justify-center shrink-0">
                          <Heart className="w-3.5 h-3.5 fill-[#FF0066]" />
                        </div>
                        <div className="text-left pr-1">
                          <p className="text-[9px] font-extrabold text-[#0F172A] leading-[1.2]">Making Memories</p>
                          <p className="text-[9px] font-extrabold text-[#0F172A] leading-[1.2]">That Last Forever</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>

        {/* Bottom Trust Row */}
        <ScrollReveal animation="spring-up" delay={500}>
          <div className="mt-20 max-w-3xl mx-auto bg-white border border-slate-100 shadow-sm rounded-full py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-[#0F172A]">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#FF0066]" />
              <span className="text-sm font-bold">Verified Vendors</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300" />
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="text-slate-500 font-medium">Secure Payments</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300" />
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="text-slate-500 font-medium">24x7 Support</span>
            </div>
          </div>
        </ScrollReveal>

      </Container>
    </section>
  );
}
