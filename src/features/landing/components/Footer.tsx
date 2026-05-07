import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';
import { Container } from '../../../components/ui/Container';

const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  'For Vendors': [
    { label: 'Become a Partner', href: 'https://partner.mymooment.com' },
    { label: 'Vendor Dashboard', href: '#' },
    { label: 'Resources', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Vendor Agreement', href: '/vendor-agreement' },
    { label: 'Payment & Settlement Policy', href: '/payment-policy' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8" role="contentinfo">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo className="mb-0 justify-start" textClass="text-xl" iconClass="inline w-8 h-8 text-red-500 mx-0.5" />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              India's smartest event booking platform. Creating memorable experiences with comfort, trust, and simplicity.
            </p>
            <a
              href="mailto:support@mymooment.com"
              className="mt-3 inline-block text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              support@mymooment.com
            </a>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold tracking-wider uppercase text-slate-300 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8">
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} myMooment. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 font-medium mt-3 md:mt-0 flex items-center gap-1.5">
            Made with ❤️ in India
          </p>
        </div>
      </Container>
    </footer>
  );
}
