import React from 'react';
import { Infinity } from 'lucide-react';

type Props = {
  className?: string;
  iconClass?: string;
  textClass?: string;
};

export const Logo: React.FC<Props> = ({ className = '', iconClass = 'inline w-12 h-12 text-red-500 mx-1', textClass = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-1 mb-2 ${className}`}>
      <span className={`text-3xl font-semibold text-blue-600 mb-2 cinzel flex items-center gap-2 ${textClass}`}>
        <span className='text-[#3B82F6]'>M</span>
        <Infinity className={iconClass} strokeWidth={2} />
        <span className='text-[#3B82F6]'>MENT</span>
      </span>
    </div>
  );
};

export default Logo;
