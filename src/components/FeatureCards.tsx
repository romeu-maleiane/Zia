import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';
import React from 'react';

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(20px) url(#liquid-glass)',
  WebkitBackdropFilter: 'blur(20px) url(#liquid-glass)',
  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12), inset 0 1px 0 0 rgba(255,255,255,0.4)',
};

function ParallaxCard({ children, bgImage }: { children: React.ReactNode, bgImage: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <div 
      ref={ref}
      className="relative rounded-[32px] overflow-hidden h-[500px] flex flex-col p-6 sm:p-8 group"
      style={{
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="absolute inset-0 z-0 bg-[#111] overflow-hidden pointer-events-none">
        <motion.img 
          src={bgImage} 
          alt="Background" 
          className="absolute top-0 left-0 w-full h-[calc(100%+200px)] object-cover opacity-80" 
          style={{ y }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
      </div>
      {children}
    </div>
  );
}

function MiniCTAButton({ text }: { text: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="relative flex items-center rounded-full bg-[#111111] p-1 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute right-1 top-1 bottom-1 bg-white rounded-full z-0 pointer-events-none"
        initial={false}
        animate={{
          width: isHovered ? 'calc(100% - 8px)' : '32px',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      />
      
      <motion.span
        className="relative z-10 font-sans font-medium text-[13px] whitespace-nowrap pl-4 pr-3 pointer-events-none"
        initial={false}
        animate={{
          color: isHovered ? '#111111' : '#FFFFFF',
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        {text}
      </motion.span>
      
      <div className="relative z-10 w-8 h-8 flex items-center justify-center shrink-0 pointer-events-none">
        <motion.div
          initial={false}
          animate={{ x: isHovered ? 2 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        >
          <ArrowRight className="text-[#111111] w-4 h-4" strokeWidth={2.5} />
        </motion.div>
      </div>
    </motion.button>
  );
}

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto z-10 relative">
      {/* Card 1 */}
      <ParallaxCard bgImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200">
        <div className="relative z-10 flex justify-end">
          <span style={glassStyle} className="px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase text-white/90">
            For Businesses
          </span>
        </div>

        <div className="relative z-10 mt-auto">
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3 tracking-tight">Not just another tool</h3>
          <p className="text-white/80 text-[15px] sm:text-[16px] leading-[1.6] mb-8 font-medium max-w-[90%]">
            We bring intelligence, automation, and efficiency to your daily workflows and team operations.
          </p>

          <MiniCTAButton text="For businesses" />
        </div>
      </ParallaxCard>

      {/* Card 2 */}
      <ParallaxCard bgImage="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=1200">
        <div className="relative z-10 flex justify-end">
          <span style={glassStyle} className="px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase text-white/90">
            Creators & Individuals
          </span>
        </div>

        <div className="relative z-10 mt-auto">
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3 tracking-tight">Supercharge output</h3>
          <p className="text-white/80 text-[15px] sm:text-[16px] leading-[1.6] mb-8 font-medium max-w-[90%]">
            Access the most powerful personal task automation capabilities on the planet.
          </p>

          <MiniCTAButton text="For individuals" />
        </div>
      </ParallaxCard>
    </div>
  );
}
