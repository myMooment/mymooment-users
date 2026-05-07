import ReactMarkdown from 'react-markdown';
import { Navbar } from '../../features/landing/components/Navbar';
import { Footer } from '../../features/landing/components/Footer';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  markdownContent: string;
}

export function LegalLayout({ title, lastUpdated, markdownContent }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-200 flex flex-col">
      <Navbar />

      {/* Main outer wrapper ensures the center column is perfectly centered with borders */}
      <main className="flex-grow w-full bg-white relative">
        {/* Central Column with Left and Right Lines */}
        <div className="max-w-[1000px] mx-auto border-l border-r border-gray-200 min-h-screen bg-white relative z-10">
          
          {/* Header Section */}
          <div className="relative w-full border-b border-gray-200 overflow-hidden">
            {/* Faint Grid Background */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                backgroundSize: '48px 48px'
              }}
            />
            
            {/* Pastel Decorative Squares */}
            <div className="absolute top-12 left-12 w-16 h-16 bg-[#FDF4FF] opacity-80" />
            <div className="absolute top-32 left-32 w-12 h-12 bg-[#FFF1F2] opacity-80" />
            <div className="absolute bottom-12 left-12 w-16 h-16 bg-[#FEF3C7] opacity-60" />
            <div className="absolute top-12 right-12 w-16 h-16 bg-[#FEF3C7] opacity-60" />
            <div className="absolute bottom-12 right-24 w-16 h-16 bg-[#FEF3C7] opacity-60" />
            <div className="absolute top-40 right-12 w-16 h-16 bg-[#FFEDD5] opacity-70" />
            
            <div className="relative px-6 py-32 text-center flex flex-col items-center justify-center">
              {/* Exact Font from Screenshot: ApfelGrotezk, 60px, Line Height 72px, Weight 500 */}
              <h1 className="font-['ApfelGrotezk','Inter',sans-serif] text-[60px] leading-[72px] font-medium text-black tracking-tight mb-4">
                {title}
              </h1>
              <p className="text-gray-500 text-[16px] font-normal">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>

          {/* Vertical Striped Separator Band */}
          <div 
            className="w-full h-24 border-b border-gray-200 opacity-30"
            style={{
              backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px)',
              backgroundSize: '24px 100%'
            }}
          />

          {/* Content Section - Exact Fonts and Gapless Alignment */}
          <div className="px-8 md:px-24 py-16 md:py-20">
            <div className="prose max-w-none">
              <ReactMarkdown
                components={{
                  // Headings follow the ApfelGrotezk or Inter look
                  h2: ({node, ...props}) => <h2 className="font-['ApfelGrotezk','Inter',sans-serif] text-[24px] leading-[32px] font-medium text-black mt-12 mb-5" {...props} />,
                  h3: ({node, ...props}) => <h3 className="font-['ApfelGrotezk','Inter',sans-serif] text-[20px] leading-[28px] font-medium text-black mt-8 mb-3" {...props} />,
                  
                  // Exact Body Font from Screenshot: Inter, 16px, Line Height 24px, Weight 400
                  p: ({node, ...props}) => <p className="font-['Inter',sans-serif] text-[16px] leading-[24px] font-normal text-black mb-6 text-left" {...props} />,
                  ul: ({node, ...props}) => <ul className="font-['Inter',sans-serif] text-[16px] leading-[24px] font-normal text-black list-disc pl-6 mb-6 space-y-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="font-['Inter',sans-serif] text-[16px] leading-[24px] font-normal text-black list-decimal pl-6 mb-6 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li className="pl-1" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-semibold text-black" {...props} />,
                  hr: ({node, ...props}) => <hr className="my-12 border-gray-200" {...props} />,
                }}
              >
                {markdownContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
