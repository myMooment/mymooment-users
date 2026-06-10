import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // If on home page, use transparent overlay theme. Otherwise, use solid white theme.
  const navClasses = isHomePage 
    ? "absolute top-0 w-full z-50 bg-transparent"
    : "sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100";

  return (
    <nav className={navClasses}>
      <Container>
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo */}
          <Link to="/" className="shrink-0" aria-label="myMooment Home">
            <span className={`text-[22px] tracking-tight ${isHomePage ? 'text-white' : 'text-slate-900'} flex items-center`}>
              <span className="font-semibold">my</span><span className={isHomePage ? "text-white font-extrabold" : "text-[#FF0066] font-extrabold"}>Mooment</span>
            </span>
          </Link>

          {/* Desktop Links - Removed */}

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="https://mypartner.mymooment.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#FFDE00] hover:bg-[#F2D200] transition-colors text-slate-900 text-[15px] font-bold flex items-center gap-2 shadow-lg shadow-[#FFDE00]/20">
              Become a Partner
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isHomePage ? 'text-white hover:bg-white/10' : 'hover:bg-slate-100'}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-white/10 mt-2 animate-in slide-in-from-top bg-white rounded-2xl shadow-xl absolute left-4 right-4 p-4 z-50">
            <div className="flex flex-col gap-1">
              <div className="mt-3 px-4">
                <a href="https://mypartner.mymooment.com" target="_blank" rel="noopener noreferrer" className="w-full px-6 py-3 rounded-full bg-[#FFDE00] text-slate-900 text-sm font-bold flex items-center justify-center gap-2">
                  Become a Partner
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
