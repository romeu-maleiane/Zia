import { ArrowRight } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { BlurRevealText } from './BlurRevealText';
import { motion } from 'motion/react';

export function CtaFooterSection() {
  return (
    <footer className="relative bg-[#0A0A0A] text-white">
      {/* Edge-to-edge CTA Section */}
      <div className="relative w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="https://res.cloudinary.com/dsifzbr67/video/upload/v1778246910/DIMabm5o_daszf9.mp4"
            className="w-full h-full object-cover object-[center_40%]"
          />
          {/* Top smooth gradient transition from black bg */}
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        </div>
        
        {/* CTA Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-32">
          {/* Subtle background blur for text readability */}
          <div className="absolute -left-64 md:-left-32 top-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0A0A0A]/60 blur-[120px] rounded-full pointer-events-none -z-10" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-6xl lg:text-[64px] leading-[1.1] font-medium tracking-tight mb-6 max-w-[500px]">
                <BlurRevealText 
                  text="The future of work is proactive." 
                  highlightWords={["proactive."]}
                  highlightClassName="font-serif italic text-white/90"
                />
              </h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-sm md:text-[15px] font-medium text-white/70 leading-relaxed max-w-sm"
              >
                Zia AI helps distributed teams understand energy, track wellbeing, and build 
                healthier work rhythms without adding more noise.
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 shrink-0"
            >
              <CTAButton text="Sign In" className="!inline-flex" />
              <button className="inline-flex items-center gap-2 justify-center rounded-3xl bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-md px-7 py-3 text-[13px] font-medium text-white transition-all">
                Talk to Sales <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-16"
      >
        
        {/* Logo */}
        <div className="mb-12">
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
            <div className="w-3.5 h-3.5 bg-white rounded-sm outline outline-2 outline-offset-[3px] outline-white/20"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-7 gap-x-8 gap-y-12 mb-20 text-[13px]">
          {/* Links */}
          <div className="col-span-1">
            <h4 className="font-medium text-white mb-6">Product</h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Burnout Detection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Insights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-medium text-white mb-6">Company</h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-medium text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Well-being Blog</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-medium text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SOC2 Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-medium text-white mb-6">Socials</h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-2 pl-0 lg:pl-10">
            <h4 className="font-medium text-white mb-6">Join Our newsletter on AI & Wellbeing</h4>
            <div className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-transparent border border-white/20 rounded-full py-2.5 pl-4 pr-24 text-[13px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-white text-black px-4 rounded-full text-[12px] font-medium hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[12px] text-white/40 font-medium mb-12">
          <p>© 2026 Zia AI Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20">Terms of Service</a>
          </div>
        </div>

        {/* Large Logo Watermark */}
        <div className="relative w-full overflow-hidden flex justify-center items-end h-[16vw] lg:h-[180px] pointer-events-none select-none">
          <span 
            className="absolute bottom-[-10%] text-[24vw] md:text-[20vw] lg:text-[230px] font-serif font-medium leading-[0.75] tracking-tighter w-full text-center"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 0.8
            }}
          >
            Zia AI
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
