import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface BlurRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export function BlurRevealText({ 
  text, 
  className = "", 
  delay = 0,
  highlightWords = [],
  highlightClassName = ""
}: BlurRevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const letterAnimation = {
    hidden: { filter: "blur(12px)", opacity: 0, y: 10 },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, wordIndex) => {
        // Remove punctuation to check if the exact word matches, or just match exactly.
        const isHighlighted = highlightWords.includes(word) || highlightWords.includes(word.replace(/[^a-zA-Z]/g, ''));
        return (
        <span key={wordIndex} className={`inline-flex whitespace-pre ${isHighlighted ? highlightClassName : ""}`}>
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterAnimation}
              className="inline-block"
              style={{ willChange: "filter, opacity, transform" }}
            >
              {letter}
            </motion.span>
          ))}
          {wordIndex !== words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      )})}
    </motion.span>
  );
}
