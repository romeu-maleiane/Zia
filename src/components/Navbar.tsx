import { motion } from 'motion/react';

export function Navbar() {
  const navItems = ['Features', 'Use Cases', 'Pricing', 'About'];
  
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 px-5 sm:px-8 py-2 sm:py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.4)] w-[90%] max-w-fit"
      style={{
        background: 'rgba(255, 255, 255, 0.12)',
        borderRadius: '40px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(20px) url(#liquid-glass)',
        WebkitBackdropFilter: 'blur(20px) url(#liquid-glass)',
      }}
    >
        <ul className="flex items-center justify-between sm:justify-start gap-4 sm:gap-8 font-sans text-[13px] sm:text-[14px] font-medium text-white/80">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
  );
}
