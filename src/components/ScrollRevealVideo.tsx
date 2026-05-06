import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

function ScrollPhrase({ 
  text, 
  progress, 
  start, 
  end, 
  isLast 
}: { 
  text: React.ReactNode, 
  progress: any, 
  start: number, 
  end: number, 
  isLast?: boolean 
}) {

  // 🔥 progress local isolado por frase
  const localProgress = useTransform(progress, (v) => {
    if (v <= start) return 0;
    if (v >= end) return 1;
    return (v - start) / (end - start);
  });

  const y = useTransform(localProgress, [0, 0.35, 0.65, 1], [-95, 0, 0, isLast ? 0 : 95]);

  const z = useTransform(localProgress, [0, 0.35, 0.65, 1], [-500, 0, 0, isLast ? 0 : -500]);

  const rotateX = useTransform(localProgress, [0, 0.35, 0.65, 1], [-40, 0, 0, isLast ? 0 : 40]);

  const scale = useTransform(localProgress, [0, 0.35, 0.65, 1], [0.88, 1, 1, isLast ? 1 : 0.92]);

  const opacity = useTransform(localProgress, [0, 0.25, 0.75, 1], [0, 1, 1, isLast ? 1 : 0]);

  const filter = useTransform(
    localProgress,
    [0, 0.35, 0.65, 1],
    ["blur(10px)", "blur(0px)", "blur(0px)", isLast ? "blur(0px)" : "blur(10px)"]
  );

  const transform = useMotionTemplate`
    translateY(${y}px)
    translateZ(${z}px)
    rotateX(${rotateX}deg)
    scale(${scale})
  `;

  return (
    <motion.h2
      className="absolute inset-x-0 mx-auto flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-sans font-medium tracking-tight text-white leading-[1.2] text-center w-full px-4"
      style={{
        opacity,
        filter,
        transform,
        transformStyle: "preserve-3d",
        willChange: "transform, opacity, filter"
      }}
    >
      {text}
    </motion.h2>
  );
}

export function ScrollRevealVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 🔥 Expansão do container (ocorre de 0 a 0.15 do scroll)
  const width = useTransform(scrollYProgress, [0, 0.15], ["90%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 0.15], ["75vh", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.15], ["28px", "0px"]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [0.96, 1]);

  // 🔥 O progresso do texto inicia APENAS após o container preencher a tela (0.15+)
  const textProgress = useTransform(scrollYProgress, [0.15, 1], [0, 1]);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    video.defaultMuted = true;
    video.muted = true;

    // Try to play immediately
    const attemptPlay = () => {
      video.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    };
    
    // Also try playing when it comes into view (some browsers require this to allow autoplay)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            attemptPlay();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    attemptPlay();

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[650vh] w-full bg-[#0A0A0A] -mt-20 sm:-mt-32 z-20">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        <motion.div
          style={{ width, height, borderRadius, scale }}
          className="relative overflow-hidden flex flex-col items-center justify-center bg-black"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
          >
            <source src="https://res.cloudinary.com/dsifzbr67/video/upload/v1777942144/Hero_videos_A_man_with_short_brown_hair_and_a_blue_shirt_3LAOMfnu_to5kq1.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

          {/* 🔥 CONTAINER MENOR DA ANIMAÇÃO */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto h-full w-full">

            <span className="text-[10px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-white/80 mb-5">
              Meet your new AI
            </span>

            {/* 🔥 ZONA MENOR DA ANIMAÇÃO */}
            <div 
              className="relative w-full h-[190px] flex items-center justify-center mb-10"
              style={{ perspective: "1400px", perspectiveOrigin: "50% 50%" }}
            >
              <ScrollPhrase 
                progress={textProgress} 
                start={0} end={0.28} 
                text={<>Automate your workflow with <span className="font-serif italic text-white">&nbsp;intelligent AI.</span></>} 
              />

              <ScrollPhrase 
                progress={textProgress} 
                start={0.18} end={0.46} 
                text={<>Your autonomous <span className="font-serif italic text-white">&nbsp;problem solver.</span></>} 
              />

              <ScrollPhrase 
                progress={textProgress} 
                start={0.36} end={0.64} 
                text={<>Execute tasks with <span className="font-serif italic text-white">&nbsp;mind-blowing </span> &nbsp;speed.</>} 
              />

              <ScrollPhrase 
                progress={textProgress} 
                start={0.54} end={0.82} 
                text={<>Reclaim your time for <span className="font-serif italic text-white">&nbsp;meaningful </span> &nbsp;work.</>} 
              />

              <ScrollPhrase 
                progress={textProgress} 
                start={0.72} end={1.0} 
                text={<>Not just <span className="font-serif italic text-white">&nbsp;another chatbot.</span></>}
                isLast={true} 
              />
            </div>

            <button 
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md px-5 py-3 text-sm font-medium text-white transition-all"
            >
              See it in action <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}