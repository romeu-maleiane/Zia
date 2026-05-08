import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export interface CTAButtonProps {
  text?: string;
  className?: string;
  dark?: boolean; // Added optional dark mode text invert logic if needed? We will just pass text.
}

export function CTAButton({ text = "Get Started", className = "" }: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`flex justify-center ${className}`}>
      <motion.button
        className="relative flex items-center rounded-[32px] bg-[#111111] p-1.5 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        whileTap={{ scale: 0.98 }}
      >
        {/* The expanding circle background */}
        <motion.div
          className="absolute right-1.5 top-1.5 bottom-1.5 bg-white rounded-full z-0 pointer-events-none"
          initial={false}
          animate={{
            width: isHovered ? 'calc(100% - 12px)' : '40px',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        />

        {/* Text */}
        <motion.span
          className="relative z-10 font-sans font-medium text-[15px] whitespace-nowrap pl-4 pr-3 pointer-events-none"
          initial={false}
          animate={{
            color: isHovered ? '#111111' : '#FFFFFF',
          }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          {text}
        </motion.span>

        {/* Icon */}
        <div className="relative z-10 w-10 h-10 flex items-center justify-center shrink-0 pointer-events-none">
          <motion.div
            initial={false}
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <ArrowRight className="text-[#111111] w-5 h-5" strokeWidth={2.5} />
          </motion.div>
        </div>
      </motion.button>
    </div>
  );
}
