import { Sparkles, Tag, ShieldCheck, Headphones } from 'lucide-react';
import { Container } from '../../../components/ui/Container';

export function CTA() {
  return (
    <section className="py-20 md:py-24 bg-[#FAFAFA] font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        <div className="w-full bg-gradient-to-r from-[#170C3A] via-[#2D165E] to-[#4F208A] rounded-[32px] md:rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between">
          
          {/* Confetti & Stars Background Decoration */}
          <div className="absolute top-12 left-10 w-2.5 h-2.5 rounded-sm bg-[#FF0066] rotate-45 opacity-80 animate-pulse" />
          <div className="absolute top-[20%] right-[40%] w-3 h-3 rounded-full bg-purple-400 opacity-60 blur-[1px]" />
          <div className="absolute bottom-20 left-[30%] w-2 h-2 rounded-full bg-pink-400 opacity-80" />
          <div className="absolute top-[15%] right-[10%] w-2.5 h-2.5 bg-purple-300 rounded-sm rotate-12 opacity-60" />
          <div className="absolute bottom-[30%] right-[15%] w-3 h-3 rounded-sm bg-[#FF0066] rotate-45 opacity-70" />
          <div className="absolute top-[40%] left-[5%] w-1.5 h-1.5 rounded-full bg-white opacity-40" />

          {/* Glowing orbs behind the pedestal */}
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Content */}
          <div className="flex flex-col items-start lg:w-1/2 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/5 text-slate-200 text-[11px] font-bold mb-8 backdrop-blur-sm">
               <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
               Your celebration, simplified
            </div>

            {/* Heading */}
            <h2 className="text-[2.75rem] md:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
              Plan your next <br className="hidden md:block" />
              celebration with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0066] to-[#A855F7] inline-block relative mt-1">
                 myMooment
                 {/* Squiggle */}
                 <svg className="absolute -bottom-3 left-0 w-full" width="160" height="12" viewBox="0 0 140 12" fill="none">
                    <path d="M2 6C11 2 20 2 29 6C38 10 47 10 56 6C65 2 74 2 83 6C92 10 101 10 110 6C119 2 128 2 137 6" stroke="#FF0066" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm md:text-[15px] font-medium leading-relaxed max-w-md mt-6 mb-10">
               Download our app to discover trusted partners, manage your bookings seamlessly, and unlock exclusive app-only offers.
            </p>

            {/* App Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
               {/* App Store Button */}
               <button className="bg-[#110A24] hover:bg-black text-white rounded-xl px-5 py-3 flex items-center gap-3 border border-white/10 transition-colors shadow-xl">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="w-6 h-6 invert" alt="Apple" />
                 <div className="flex flex-col items-start">
                   <span className="text-[9px] font-medium text-slate-400 leading-tight">Download on the</span>
                   <span className="text-sm font-bold leading-tight">App Store</span>
                 </div>
               </button>
               {/* Play Store Button */}
               <button className="bg-[#110A24] hover:bg-black text-white rounded-xl px-5 py-3 flex items-center gap-3 border border-white/10 transition-colors shadow-xl">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" className="w-5 h-5" alt="Google Play" />
                 <div className="flex flex-col items-start ml-1">
                   <span className="text-[9px] font-medium text-slate-400 leading-tight">GET IT ON</span>
                   <span className="text-sm font-bold leading-tight">Google Play</span>
                 </div>
               </button>
            </div>

            {/* Features Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-6 border-t border-white/10 w-full">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Tag className="w-4 h-4 text-[#d8b4fe]" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-xs font-bold text-white leading-tight mb-0.5">Exclusive</span>
                    <span className="text-[10px] text-slate-400">app-only offers</span>
                 </div>
               </div>
               
               <div className="hidden sm:block w-px h-8 bg-white/10" />

               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#d8b4fe]" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-xs font-bold text-white leading-tight mb-0.5">Secure</span>
                    <span className="text-[10px] text-slate-400">& reliable</span>
                 </div>
               </div>

               <div className="hidden sm:block w-px h-8 bg-white/10" />

               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Headphones className="w-4 h-4 text-[#d8b4fe]" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-xs font-bold text-white leading-tight mb-0.5">24/7 Support</span>
                    <span className="text-[10px] text-slate-400">We're here for you</span>
                 </div>
               </div>
            </div>

          </div>

          {/* Right Content: 3D QR Code Display */}
          <div className="lg:w-1/2 flex items-center justify-center relative w-full h-[350px] lg:h-[450px] mt-10 lg:mt-0">
             
             {/* 3D Pedestal Base */}
             <div className="absolute bottom-4 lg:bottom-10 w-[280px] md:w-[320px] h-[70px] md:h-[80px] bg-[#160A33] rounded-[100%] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-b-8 border-[#0B051A] z-0" />
             <div className="absolute bottom-8 lg:bottom-14 w-[240px] md:w-[280px] h-[60px] md:h-[70px] bg-[#2E166A] rounded-[100%] shadow-[inset_0_-5px_20px_rgba(0,0,0,0.4)] z-0" />
             <div className="absolute bottom-10 lg:bottom-16 w-[200px] md:w-[240px] h-[50px] md:h-[60px] bg-[#47229A] rounded-[100%] border border-[#6B3EC5]/50 z-0 shadow-[0_-5px_15px_rgba(107,62,197,0.3)]" />

             {/* Ribbon Decor SVG (Simulated) */}
             <svg className="absolute -right-2 top-0 md:top-6 w-24 h-32 z-10 opacity-90 drop-shadow-lg" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10 C 60 20, 80 60, 90 40 C 100 20, 60 0, 40 10" fill="#FFB1C8" />
                <path d="M90 40 C 95 30, 90 70, 70 80 C 50 90, 80 50, 90 40" fill="#FF7AA2" />
             </svg>
             
             <svg className="absolute -left-6 bottom-10 md:bottom-20 w-20 h-24 z-30 opacity-90 drop-shadow-lg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90 90 C 40 80, 20 40, 10 60 C 0 80, 40 100, 60 90" fill="#C084FC" />
                <path d="M10 60 C 5 70, 10 30, 30 20 C 50 10, 20 50, 10 60" fill="#A855F7" />
             </svg>

             {/* The QR Card */}
             <div className="relative z-20 w-[240px] md:w-[260px] bg-white rounded-[28px] md:rounded-[32px] p-6 pb-8 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col items-center transform -translate-y-4 md:-translate-y-8 animate-[float_6s_ease-in-out_infinite]">
                
                {/* QR Code Container */}
                <div className="w-full aspect-square rounded-2xl bg-white border border-slate-100 relative mb-5">
                   
                   {/* Realistic QR pattern using an API with custom colors */}
                   <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://mymooment.com&color=4F208A&bgcolor=FFFFFF&margin=2" alt="QR Code" className="w-full h-full opacity-90 rounded-2xl" />
                   
                   {/* Custom Overlay Corner Markers (to match the screenshot design) */}
                   {/* Top Left */}
                   <div className="absolute top-[8px] left-[8px] w-[22%] h-[22%] bg-white flex items-center justify-center">
                     <div className="w-[85%] h-[85%] rounded-[8px] border-[5px] border-[#4F208A] flex items-center justify-center">
                       <div className="w-[50%] h-[50%] bg-[#FF0066] rounded-[3px]" />
                     </div>
                   </div>
                   {/* Top Right */}
                   <div className="absolute top-[8px] right-[8px] w-[22%] h-[22%] bg-white flex items-center justify-center">
                     <div className="w-[85%] h-[85%] rounded-[8px] border-[5px] border-[#4F208A] flex items-center justify-center">
                       <div className="w-[50%] h-[50%] bg-[#FF0066] rounded-[3px]" />
                     </div>
                   </div>
                   {/* Bottom Left */}
                   <div className="absolute bottom-[8px] left-[8px] w-[22%] h-[22%] bg-white flex items-center justify-center">
                     <div className="w-[85%] h-[85%] rounded-[8px] border-[5px] border-[#4F208A] flex items-center justify-center">
                       <div className="w-[50%] h-[50%] bg-[#FF0066] rounded-[3px]" />
                     </div>
                   </div>

                   {/* Center Logo */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22%] h-[22%] bg-gradient-to-br from-[#FF0066] to-[#A855F7] rounded-lg flex items-center justify-center shadow-lg border-[3px] border-white">
                      <span className="text-white font-extrabold text-sm md:text-base">M</span>
                   </div>
                </div>

                <h4 className="text-[19px] md:text-xl font-extrabold text-[#0F172A] mb-1.5 tracking-tight">Coming Soon!</h4>
                <p className="text-[11px] md:text-xs text-slate-500 font-medium text-center px-1 leading-relaxed">
                   Scan to be the first to know when we launch.
                </p>
             </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
