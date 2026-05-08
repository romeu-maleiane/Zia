import { motion } from 'motion/react';
import { BlurRevealText } from './BlurRevealText';

export function TestimonialSection() {
  return (
    <section className="relative pt-16 pb-32 lg:pt-24 lg:pb-48 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
            
            <div className="mb-14">
              <h3 className="text-3xl md:text-4xl lg:text-[48px] leading-[1.3] font-medium tracking-tight">
                <BlurRevealText 
                  text="&quot;Zia AI didn't just automate our boilerplate workflows. It fundamentally changed how our engineering team thinks about leverage.&quot;" 
                  highlightWords={["thinks", "about", "leverage.\""]}
                  highlightClassName="font-serif italic text-white/80"
                />
              </h3>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white/10 border border-white/20 p-1">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                  alt="Sarah Chen" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              <div className="text-left flex flex-col justify-center">
                <div className="text-white font-medium text-[15px] tracking-wide">Sarah Chen</div>
                <div className="text-white/50 text-[13px] font-medium tracking-wide">VP of Engineering at TechFlow</div>
              </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}
