import { motion } from 'motion/react';

export function TrustedBadge() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      className="inline-flex items-center gap-2 pl-1 pr-4 py-1 mb-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.4)]"
      style={{
        background: 'rgba(255, 255, 255, 0.12)',
        borderRadius: '40px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(20px) url(#liquid-glass)',
        WebkitBackdropFilter: 'blur(20px) url(#liquid-glass)',
      }}
    >
      <div className="flex -space-x-2 pl-1">
        <img 
          className="w-7 h-7 rounded-full border-2 border-white object-cover grayscale brightness-75" 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80" 
          alt="Trusted user" 
        />
        <img 
          className="w-7 h-7 rounded-full border-2 border-white object-cover grayscale brightness-90 relative z-10" 
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80" 
          alt="Trusted user" 
        />
        <img 
          className="w-7 h-7 rounded-full border-2 border-white object-cover grayscale brightness-110 relative z-20" 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80" 
          alt="Trusted user" 
        />
      </div>
      <span className="font-sans text-[15px] font-medium text-white/90">Trusted worldwide</span>
    </motion.div>
  );
}
