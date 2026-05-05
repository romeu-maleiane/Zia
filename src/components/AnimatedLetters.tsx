import { motion } from 'motion/react';

interface AnimatedLettersProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedLetters({ text, className = "", delay = 0 }: AnimatedLettersProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const letterAnimation = {
    hidden: { y: "150%" },
    visible: {
      y: "0%",
      transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap max-w-full ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-pre">
          <span className="inline-flex overflow-hidden pb-[0.3em] -mb-[0.3em] pt-[0.1em] -mt-[0.1em]">
            {Array.from(word).map((letter, letterIndex) => (
              <motion.span
                variants={letterAnimation}
                key={letterIndex}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
          {wordIndex !== words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  );
}
