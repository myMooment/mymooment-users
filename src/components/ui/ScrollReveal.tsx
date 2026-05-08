import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: 'spring-up' | 'fade-in' | 'slide-left' | 'slide-right';
}

export function ScrollReveal({ children, delay = 0, className = '', animation = 'spring-up' }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const baseClasses = 'transition-all duration-[1000ms] will-change-transform';
  
  // Custom spring-like easing for that premium "jumping out" feel
  const easeClass = 'ease-[cubic-bezier(0.175,0.885,0.32,1.1)]'; 

  const animations = {
    'spring-up': isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95',
    'fade-in': isVisible ? 'opacity-100' : 'opacity-0',
    'slide-left': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
    'slide-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${baseClasses} ${easeClass} ${animations[animation]} ${className}`}
    >
      {children}
    </div>
  );
}
