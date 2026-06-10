import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../../../components/ui/Container';

export function Footer() {
  return (
    <footer className="bg-[#121212] pt-20 pb-8 font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 pb-16 border-b border-white/10">
          
          {/* Brand Info (Left) */}
          <div className="flex flex-col max-w-[260px]">
            {/* Logo */}
            <Link to="/" className="text-[28px] font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#A855F7] to-[#FF0066] pb-1">
              myMooment
            </Link>
            <p className="mt-4 text-[13px] text-[#A3A3A3] leading-[1.6] font-medium">
              Browse, Select and book trusted event services all at your fingertips.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.linkedin.com/company/mymooment" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#262626] hover:bg-[#333333] transition-colors flex items-center justify-center text-[#A3A3A3] hover:text-white">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Grid (Right) */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company */}
            <div className="flex flex-col">
              <h4 className="text-[15px] font-bold text-white mb-6 tracking-tight">Company</h4>
              <ul className="space-y-4">
                <li><Link to="#about" className="text-[13px] font-medium text-[#A3A3A3] hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="#contact" className="text-[13px] font-medium text-[#A3A3A3] hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* For Partners */}
            <div className="flex flex-col">
              <h4 className="text-[15px] font-bold text-white mb-6 tracking-tight">For Partners</h4>
              <ul className="space-y-4">
                <li><a href="https://mypartner.mymooment.com" target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-[#A3A3A3] hover:text-white transition-colors">Become a Partner</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-[12px] text-[#737373] font-medium">
            © {new Date().getFullYear()} myMooment. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/privacy" className="text-[12px] text-[#737373] hover:text-[#A3A3A3] font-medium transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[12px] text-[#737373] hover:text-[#A3A3A3] font-medium transition-colors">Terms & Conditions</Link>
            <Link to="/refund-policy" className="text-[12px] text-[#737373] hover:text-[#A3A3A3] font-medium transition-colors">Refund Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
