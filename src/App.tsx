/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { TrustedBadge } from './components/TrustedBadge';
import { CTAButton } from './components/CTAButton';
import { AnimatedLetters } from './components/AnimatedLetters';

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 sm:p-12 relative overflow-hidden">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[100vh] sm:w-[800px] sm:h-[600px] bg-black/30 blur-[100px] rounded-[100%] pointer-events-none z-0" />

      <Navbar />
      <main className="max-w-4xl w-full text-center z-10 relative flex flex-col items-center mt-24 sm:mt-10 md:mt-14 px-2 sm:px-4">
        <TrustedBadge />
        <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] leading-[1.1] md:leading-[60px] tracking-tight text-white flex flex-col items-center text-center mt-4 sm:mt-2 mb-6 sm:mb-8">
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
      </main>
    </div>
  );
}
