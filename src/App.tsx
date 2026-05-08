/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { Navbar } from './components/Navbar';
import { TrustedBadge } from './components/TrustedBadge';
import { CTAButton } from './components/CTAButton';
import { AnimatedLetters } from './components/AnimatedLetters';
import { BlurRevealText } from './components/BlurRevealText';
import { FeatureCards } from './components/FeatureCards';
import { ScrollRevealVideo } from './components/ScrollRevealVideo';
import { StatsSection } from './components/StatsSection';
import { TestimonialSection } from './components/TestimonialSection';
import { PricingSection } from './components/PricingSection';
import { CtaFooterSection } from './components/CtaFooterSection';

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 1000], [1, 0.3]);

  return (
    <div className="bg-[#0A0A0A] w-full text-white font-sans selection:bg-white/20">
      {/* Liquid Glass Filter Definition */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id="liquid-glass" filterUnits="objectBoundingBox" x="-20%" y="-20%" width="140%" height="140%">
          <feImage 
            href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23909090'/%3E%3Cstop offset='50%25' stop-color='%23808080'/%3E%3Cstop offset='100%25' stop-color='%23707070'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23g)'/%3E%3C/svg%3E" 
            result="map" 
            preserveAspectRatio="none" 
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="map" 
            scale="30" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </svg>

      <Navbar />

      {/* Hero Section */}
      <div className="sticky top-0 h-screen w-full bg-black flex flex-col items-center justify-center p-4 sm:p-12 overflow-hidden z-0">
        
        <motion.div 
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{ opacity: heroOpacity }}
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          >
            <source src="https://res.cloudinary.com/dsifzbr67/video/upload/v1777942144/Hero_videos_A_man_with_short_brown_hair_and_a_blue_shirt_3LAOMfnu_to5kq1.mp4" type="video/mp4" />
          </video>
          
          {/* Soft Radial Dark Glow for text readability */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[100vh] sm:w-[800px] sm:h-[600px] bg-black/50 blur-[100px] rounded-[100%] pointer-events-none" />
        </motion.div>

        <motion.main 
          style={{ opacity: heroOpacity }}
          className="max-w-4xl w-full text-center z-10 relative flex flex-col items-center mt-24 sm:mt-10 md:mt-14 px-2 sm:px-4"
        >
          <TrustedBadge />
          <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] md:leading-[60px] tracking-tight text-white flex flex-col items-center text-center mt-4 sm:mt-2 mb-6 sm:mb-8">
            <AnimatedLetters 
              text="Your AI agent" 
              className="font-sans font-medium mb-1 sm:mb-2 text-white justify-center" 
            />
            <span className="text-white flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3">
              <AnimatedLetters 
                text="that" 
                className="font-sans font-medium justify-center" 
                delay={0.4} 
              />
              <AnimatedLetters 
                text="automates tasks." 
                className="font-serif italic font-normal text-white/90 justify-center" 
                delay={0.55} 
              />
            </span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="flex justify-center text-center px-4 max-w-xl mx-auto"
          >
            <p className="font-sans text-[15px] sm:text-[17px] leading-[22px] sm:leading-[26px] text-white/90 font-normal">
              Reclaim your time and focus.
              <br className="hidden sm:block" />
              Let artificial intelligence handle the manual work.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            className="mt-8 sm:mt-10"
          >
            <CTAButton />
          </motion.div>
        </motion.main>
      </div>

      <div className="relative z-10 bg-[#0A0A0A] w-full pb-20 sm:pb-32">
        {/* Intelligent Agent Feature Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
        <div className="text-center max-w-2xl lg:max-w-3xl mx-auto mb-16 sm:mb-24 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] font-sans font-medium tracking-tight text-center justify-center flex flex-wrap">
            <BlurRevealText text="The intelligent agent for founders shaping the future." className="justify-center" />
          </h2>
        </div>

        <FeatureCards />
      </section>
      </div>
      
      <ScrollRevealVideo />
      
      <StatsSection />
      
      <TestimonialSection />
      
      <PricingSection />
      
      <CtaFooterSection />
    </div>
  );
}
