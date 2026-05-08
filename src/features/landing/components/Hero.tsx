import { useState } from 'react';
import { Search, Play, ArrowRight, Star, Shield, Zap, HeadphonesIcon, Utensils, Camera, PartyPopper, MoreHorizontal } from 'lucide-react';
import { Container } from '../../../components/ui/Container';

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  // 3D Text Extrusion (Thickness)
  const text3DStyle = {
    textShadow: `
      1px 1px 0px #8F004F,
      2px 2px 0px #8F004F,
      3px 3px 0px #8F004F,
      4px 4px 0px #8F004F,
      5px 5px 0px #8F004F,
      6px 6px 0px #8F004F,
      7px 7px 10px rgba(0,0,0,0.4)
    `
  };

  const text3DYellowStyle = {
    textShadow: `
      1px 1px 0px #CCB200,
      2px 2px 0px #CCB200,
      3px 3px 0px #CCB200,
      4px 4px 0px #CCB200,
      5px 5px 0px #CCB200,
      6px 6px 0px #CCB200,
      7px 7px 10px rgba(0,0,0,0.3)
    `
  };

  return (
    <section
      className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16 font-['Plus_Jakarta_Sans',sans-serif] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/herobg.png')" }}
    >
      <Container className="relative z-10">

        {/* Main 2-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 lg:mb-12">

          {/* Left Column */}
          <div className="flex flex-col items-start text-white w-full relative z-30">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 mb-6 backdrop-blur-sm shadow-sm hover:bg-white/10 transition-colors">
              <Star className="w-3.5 h-3.5 fill-[#FFDE00] text-[#FFDE00]" />
              <span className="text-[11px] font-semibold tracking-wide text-white">
                India's #1 Direct Booking Event Platform
              </span>
            </div>

            {/* Headline */}
            <h1 style={text3DStyle} className="text-[3rem] md:text-[3.5rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-tight text-white mb-3">
              Plan Your
              <br />
              <span className="relative inline-block text-[#FFDE00] z-10" style={text3DYellowStyle}>
                Celebration
                {/* Curved yellow underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFDE00]" preserveAspectRatio="none" viewBox="0 0 100 10" fill="none" style={{ filter: 'drop-shadow(2px 2px 0px #CCB200)' }}>
                  <path d="M0 8Q50 0 100 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              in Minutes.
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl font-normal text-white/95 mt-3 mb-6 tracking-wide drop-shadow-md">
              Not Through 50 Phone Calls.
            </p>

            {/* Description */}
            <div className="text-base md:text-lg text-white/90 leading-relaxed font-medium mb-8">
              Trusted vendors. <span className="text-[#FFDE00]">Instant booking.</span><br />
              Zero negotiation stress.
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FF0066] hover:bg-[#E6005C] hover:scale-105 transition-all text-white font-bold text-base flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(255,0,102,0.3)]">
                Start Booking
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto px-6 py-3 rounded-full border border-white hover:bg-white/10 hover:scale-105 transition-all text-white font-semibold text-base flex items-center justify-center gap-2 shadow-lg backdrop-blur-sm">
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 ml-0.5 fill-white" />
                </div>
                See How It Works
              </button>
            </div>

            {/* Trust Section (Social Proof) */}
            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform cursor-default">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#8F004F] overflow-hidden bg-slate-200 shadow-md">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-[#8F004F] bg-white flex items-center justify-center text-[9px] font-bold text-[#8F004F] z-10 shadow-md">
                  10K+
                </div>
              </div>
              <div className="flex flex-col drop-shadow-md">
                <span className="text-xs font-semibold text-white/95 leading-tight">
                  Trusted by 10,000+<br />happy celebrations
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-[#FFDE00] text-[#FFDE00]" />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="relative w-full h-full flex flex-col justify-end lg:justify-center items-center lg:items-end z-10 mt-8 lg:mt-0">

            <div className="relative w-full max-w-[550px] xl:max-w-[600px] flex flex-col items-center lg:items-end mx-auto lg:mx-0 group">

              {/* The Hero Image */}
              <div className="relative w-full flex justify-center lg:justify-end z-0">
                <img
                  src="/herohh.png"
                  alt="Happy couple looking at phone"
                  className="w-[100%] sm:w-[90%] lg:w-full h-auto object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] origin-bottom"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />

                {/* Handwritten note floating */}
                <div className="absolute top-[15%] lg:top-[20%] left-[-2%] lg:left-[-8%] z-20 hidden sm:block">
                  <div className="relative transform -rotate-[8deg]">
                    <p className="font-['Caveat',cursive,sans-serif] text-[2.2rem] lg:text-[2.8rem] leading-[0.9] text-white drop-shadow-md whitespace-nowrap">
                      Booked in<br />
                      <span className="ml-2">2 mins</span>
                    </p>

                    <style>
                      {`
                        @keyframes flow-dash {
                          from { stroke-dashoffset: 24; }
                          to { stroke-dashoffset: 0; }
                        }
                        .airline-dash {
                          stroke-dasharray: 6 6;
                          animation: flow-dash 1s linear infinite;
                        }
                      `}
                    </style>

                    {/* Dotted airline curved arrow pointing down-right towards the phone */}
                    <svg className="absolute -bottom-[90px] right-[-150px] w-[200px] h-[130px] text-white drop-shadow-lg" fill="none" viewBox="0 0 250 150" stroke="currentColor">
                      {/* The curved dotted line */}
                      <path className="airline-dash" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M 10,10 Q 100,140 160,110" />
                      {/* The arrow head (solid) */}
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M 145,95 L 160,110 L 145,125" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Interactive Search UI Component floating over bottom */}
              <div className="relative z-30 w-[95%] lg:w-full mt-[-24px] md:mt-[-32px] drop-shadow-2xl">

                {/* Search Input Box */}
                <div className="bg-white rounded-[30px] p-2 pl-5 md:pl-6 flex items-center shadow-[0_20px_40px_rgba(0,0,0,0.2)] relative z-30 w-full mx-auto border border-gray-100 group-hover:shadow-[0_30px_60px_rgba(255,0,102,0.15)] transition-shadow">
                  <Search className="w-5 h-5 md:w-6 md:h-6 text-slate-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search Caterers in Hyderabad..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-grow bg-transparent border-none outline-none text-slate-700 text-base md:text-lg font-medium placeholder:text-slate-400 placeholder:font-normal h-10 md:h-12"
                  />
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FF0066] flex items-center justify-center hover:bg-[#E6005C] hover:scale-110 transition-all shadow-lg ml-2 shrink-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Categories Strip */}
                <div className="bg-gradient-to-r from-[#D70067] to-[#FF2A7A] rounded-[24px] md:rounded-[30px] pt-10 pb-4 md:pb-5 px-3 md:px-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] w-[92%] lg:w-[95%] mx-auto border border-white/10 mt-[-20px] relative z-20">
                  <div className="flex justify-between items-center text-white w-full">
                    <button className="flex flex-col items-center gap-2 group/btn hover:-translate-y-1 transition-transform">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 group-hover/btn:bg-white/20 transition shadow-inner">
                        <Utensils className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-[9px] md:text-[11px] font-bold tracking-wide">Caterers</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 group/btn hover:-translate-y-1 transition-transform">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 group-hover/btn:bg-white/20 transition shadow-inner">
                        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-5 md:h-5 stroke-current stroke-2"><path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" /><path d="M5 11h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V11z" strokeLinecap="round" /></svg>
                      </div>
                      <span className="text-[9px] md:text-[11px] font-bold tracking-wide text-center leading-tight">Mehendi<br className="sm:hidden" /> Artists</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 group/btn hover:-translate-y-1 transition-transform">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 group-hover/btn:bg-white/20 transition shadow-inner">
                        <Camera className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-[9px] md:text-[11px] font-bold tracking-wide text-center leading-tight">Photographers</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 group/btn hover:-translate-y-1 transition-transform hidden sm:flex">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 group-hover/btn:bg-white/20 transition shadow-inner">
                        <PartyPopper className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-[9px] md:text-[11px] font-bold tracking-wide">Decorators</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 group/btn hover:-translate-y-1 transition-transform">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 group-hover/btn:bg-white/20 transition shadow-inner">
                        <MoreHorizontal className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-[9px] md:text-[11px] font-bold tracking-wide">More</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Feature Highlights Row (Centered below the grid) */}
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 lg:gap-16 pt-6 border-t border-white/10 text-white/95">
          <div className="flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-default">
            <Shield className="w-6 h-6 text-white" />
            <div>
              <p className="text-[14px] font-bold leading-tight">Verified Vendors</p>
              <p className="text-[12px] text-white/80">Quality you can trust</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <div className="flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-default">
            <Zap className="w-6 h-6 text-white fill-white" />
            <div>
              <p className="text-[14px] font-bold leading-tight">Instant Booking</p>
              <p className="text-[12px] text-white/80">Book in just 2 mins</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <div className="flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-default">
            <HeadphonesIcon className="w-6 h-6 text-white" />
            <div>
              <p className="text-[14px] font-bold leading-tight">24x7 Support</p>
              <p className="text-[12px] text-white/80">We're always here</p>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
