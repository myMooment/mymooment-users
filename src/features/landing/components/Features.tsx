import { Users, Zap, ShieldCheck, LayoutGrid, ChevronRight, Lock, Utensils, Camera, Wine, MapPin, Headphones, Gift, Sparkles } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#FAFAFA] font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        {/* Header */}
        <ScrollReveal animation="spring-up" className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFF0F6] text-[#FF0066] text-xs font-extrabold tracking-widest uppercase mb-6 border border-pink-100 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Why Choose myMooment
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-[#0F172A] mb-4 tracking-tight leading-tight">
            Features
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            We take the stress out of event planning with trustworthy, transparent, and seamless booking experience.
          </p>
        </ScrollReveal>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          
          {/* Card 1: Verified Partners */}
          <ScrollReveal animation="spring-up" delay={0}>
            <div className="bg-white h-full rounded-[32px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
              {/* Mockup Area */}
              <div className="w-full h-[180px] bg-slate-50 rounded-[20px] mb-8 relative flex items-center justify-center p-4">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200 bg-gradient-to-b from-[#A78BFA] to-[#7C3AED] text-white z-10">
                  <Users className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div className="absolute inset-0 w-full h-full rounded-[20px] overflow-hidden border border-slate-100">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Professionals meeting" className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent" />
                </div>
              </div>
              {/* Text Area */}
              <h3 className="text-xl font-extrabold text-[#0F172A] mb-3">Verified Partners</h3>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-6 flex-grow">
                Trusted and reviewed professionals for every celebration.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2: Instant Booking */}
          <ScrollReveal animation="spring-up" delay={150}>
            <div className="bg-white h-full rounded-[32px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
              {/* Mockup Area */}
              <div className="w-full h-[180px] bg-slate-50 rounded-[20px] mb-8 relative flex items-center justify-center p-4 overflow-visible">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200 bg-gradient-to-b from-[#34D399] to-[#059669] text-white z-20">
                  <Zap className="w-6 h-6 stroke-[2.5]" />
                </div>
                {/* Calendar UI Mockup */}
                <div className="w-full max-w-[180px] bg-white rounded-2xl p-4 shadow-md border border-slate-100 mt-2">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-extrabold text-slate-800">July 2025</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 stroke-[3]" />
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-[7px] font-extrabold text-slate-400 mb-2.5 text-center">
                    <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
                  </div>
                  <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-[10px] font-extrabold text-slate-700 text-center items-center">
                    <div className="text-slate-300">29</div><div className="text-slate-300">30</div>
                    <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
                    <div>6</div><div>7</div><div>8</div>
                    <div className="bg-[#10B981] text-white rounded-full w-5 h-5 flex items-center justify-center mx-auto shadow-sm shadow-emerald-200">9</div>
                    <div>10</div><div>11</div><div>12</div>
                  </div>
                </div>
              </div>
              {/* Text Area */}
              <h3 className="text-xl font-extrabold text-[#0F172A] mb-3">Instant Booking</h3>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-6 flex-grow">
                Book your favorite vendors instantly without endless calls or follow-ups.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3: Secure Payments */}
          <ScrollReveal animation="spring-up" delay={300}>
            <div className="bg-white h-full rounded-[32px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
              {/* Mockup Area */}
              <div className="w-full h-[180px] bg-slate-50 rounded-[20px] mb-8 relative flex items-center justify-center p-4">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 bg-gradient-to-b from-[#60A5FA] to-[#2563EB] text-white z-20">
                  <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
                </div>
                {/* Credit Card Mockup */}
                <div className="relative w-full max-w-[170px] mt-2">
                  <div className="w-full h-[110px] bg-[#1E293B] rounded-2xl p-4 flex flex-col justify-between shadow-lg relative overflow-hidden border border-slate-700/50">
                    <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/5" />
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/5" />
                    
                    <div className="flex justify-between items-start relative z-10">
                      <div className="w-7 h-5 bg-gradient-to-br from-slate-300 to-slate-400 rounded-[3px] border border-slate-400/30 shadow-inner" />
                      <span className="text-[10px] font-extrabold text-white/80 italic tracking-wider">VISA</span>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="text-[11px] font-mono text-white/90 tracking-[2px] mb-1.5 flex gap-1.5">
                        <span>****</span><span>****</span><span>****</span><span>4242</span>
                      </div>
                      <div className="text-[7px] text-white/50 font-extrabold uppercase tracking-widest">
                        VISA
                      </div>
                    </div>
                  </div>
                  {/* Floating Lock Badge */}
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#10B981] rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200/50 border-[3px] border-white transform rotate-6 z-20">
                    <Lock className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                </div>
              </div>
              {/* Text Area */}
              <h3 className="text-xl font-extrabold text-[#0F172A] mb-3">Secure Payments</h3>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-6 flex-grow">
                100% secure and transparent payment process. Your safety is our priority.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 4: All in One Place */}
          <ScrollReveal animation="spring-up" delay={450}>
            <div className="bg-white h-full rounded-[32px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
              {/* Mockup Area */}
              <div className="w-full h-[180px] bg-slate-50 rounded-[20px] mb-8 relative flex items-center justify-center p-4">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200 bg-gradient-to-b from-[#FB923C] to-[#EA580C] text-white z-20">
                  <LayoutGrid className="w-6 h-6 stroke-[2.5]" />
                </div>
                {/* Grid of Mini Icons Mockup */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shadow-sm border border-orange-100/50 hover:scale-110 transition-transform">
                    <Utensils className="w-4 h-4 text-orange-500 stroke-[2.5]" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shadow-sm border border-blue-100/50 hover:scale-110 transition-transform">
                    <Camera className="w-4 h-4 text-blue-500 stroke-[2.5]" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shadow-sm border border-pink-100/50 hover:scale-110 transition-transform">
                    <Wine className="w-4 h-4 text-pink-500 stroke-[2.5]" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shadow-sm border border-teal-100/50 hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4 text-teal-500 stroke-[2.5]" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center shadow-sm border border-purple-100/50 hover:scale-110 transition-transform">
                    <Headphones className="w-4 h-4 text-purple-500 stroke-[2.5]" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shadow-sm border border-amber-100/50 hover:scale-110 transition-transform">
                    <Gift className="w-4 h-4 text-amber-500 stroke-[2.5]" />
                  </div>
                </div>
              </div>
              {/* Text Area */}
              <h3 className="text-xl font-extrabold text-[#0F172A] mb-3">All in One Place</h3>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-6 flex-grow">
                Everything you need for your event, all in one simple and smart platform.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </Container>
    </section>
  );
}
