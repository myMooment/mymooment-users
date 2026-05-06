import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../../../components/ui/Container';

export function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 900);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-semibold text-blue-700 tracking-wide">
                Launching Soon in India
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-slate-900 tracking-tight leading-[1.1]">
              Every Moment
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Deserves to Be
              </span>
              <br />
              Beautiful
            </h1>

            <p className="mt-6 text-base md:text-lg text-slate-500 leading-relaxed max-w-md">
              Discover and book trusted event vendors for weddings, birthdays, 
              corporate events & more — with comfort, trust, and simplicity at the core.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                  placeholder="Enter your email"
                  className={`w-full px-5 py-3.5 rounded-xl border text-sm font-medium outline-none transition-all
                    ${status === 'error'
                      ? 'border-red-300 bg-red-50/50 placeholder-red-300'
                      : 'border-slate-200 bg-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100'
                    }`}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold 
                  transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 
                  disabled:opacity-60 cursor-pointer shrink-0"
              >
                {status === 'sending' ? 'Joining...' : 'Join Waitlist'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {status === 'success' && (
              <p className="mt-3 text-sm text-emerald-600 font-medium">
                🎉 You're on the list! We'll notify you when we launch.
              </p>
            )}

            {/* Trust signals */}
            <div className="mt-8 flex items-center gap-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Free to join
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                No spam, ever
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Early access
              </span>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 aspect-[4/3]">
              <img
                src="/hero.png"
                alt="Beautiful celebration venue with elegant decorations and warm ambient lighting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-4 flex items-center gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 text-lg">
                ✓
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Verified Vendors</p>
                <p className="text-xs text-slate-400">500+ trusted professionals</p>
              </div>
            </div>
            {/* Floating stats */}
            <div className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-4 border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">4.9<span className="text-amber-400 ml-1">★</span></p>
              <p className="text-xs text-slate-400 font-medium">User Rating</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
