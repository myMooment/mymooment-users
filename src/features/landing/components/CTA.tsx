import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../../../components/ui/Container';

export function CTA() {
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
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold text-blue-200 tracking-wide">
              Be the First to Know
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Ready to Create Your
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Perfect Moment?
            </span>
          </h2>

          <p className="mt-5 text-slate-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Join our waitlist and get early access when we launch. 
            Be among the first to experience the future of event booking.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
              placeholder="Enter your email"
              className={`flex-1 px-5 py-3.5 rounded-xl text-sm font-medium outline-none transition-all
                ${status === 'error'
                  ? 'bg-red-900/20 border border-red-500/40 text-white placeholder-red-300/60'
                  : 'bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:border-blue-400/50 focus:bg-white/15'
                }`}
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold 
                transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 
                disabled:opacity-60 cursor-pointer shrink-0"
            >
              {status === 'sending' ? 'Joining...' : 'Join Waitlist'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-emerald-400 font-medium">
              🎉 Awesome! You're on the waitlist. We'll be in touch soon!
            </p>
          )}

          {/* App Store Coming Soon */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3 hover:bg-white/10 transition-colors">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Coming soon on Apple App Store"
                className="h-6 invert opacity-80"
                width="24"
                height="24"
              />
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-medium">Coming Soon on</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3 hover:bg-white/10 transition-colors">
              <img
                src="https://www.citypng.com/public/uploads/preview/hd-google-play-playstore-logo-symbol-png-701751694777134cuw3jc7voo.png"
                alt="Coming soon on Google Play Store"
                className="h-6 opacity-80"
                width="24"
                height="24"
              />
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-medium">Coming Soon on</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
