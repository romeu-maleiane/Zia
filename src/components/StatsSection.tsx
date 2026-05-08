import { BlurRevealText } from './BlurRevealText';
import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { useRef, useEffect } from 'react';

function Counter({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 15,
  });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  const display = useTransform(spring, (current) => {
    return `${prefix}${Math.floor(current).toLocaleString()}${suffix}`;
  });

  return <motion.span ref={ref}>{display}</motion.span>;
}

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(20px) url(#liquid-glass)',
  WebkitBackdropFilter: 'blur(20px) url(#liquid-glass)',
  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12), inset 0 1px 0 0 rgba(255,255,255,0.4)',
};

export function StatsSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pb-24 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-15 md:mb-24">
          <h3 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight mb-8 flex justify-center">
            <BlurRevealText 
              text="From manual tasks to autonomous scale." 
              highlightWords={["autonomous", "scale."]}
              highlightClassName="font-serif italic text-white/90"
              className="justify-center text-center"
            />
          </h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="text-lg text-white/80 mx-auto max-w-2xl leading-relaxed"
          >
            Our intelligent agents seamlessly integrate into your ecosystem, 
            learning your processes to eliminate busywork and unlock true leverage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10 lg:border-t-0">
          {[
            {
              badge: "AUTOMATION",
              value: 150,
              suffix: "k+",
              description: "TASKS AUTOMATED WEEKLY",
            },
            {
              badge: "PERFORMANCE",
              value: 99,
              suffix: "%",
              description: "WORKFLOW ACCURACY",
            },
            {
              badge: "INTEGRATIONS",
              value: 500,
              suffix: "+",
              description: "SUPPORTED APPS",
            },
            {
              badge: "EFFICIENCY",
              value: 10,
              suffix: "x",
              description: "FASTER EXECUTION",
            }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.8, ease: "easeOut" }}
              className="relative px-6 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20 border-b border-l lg:border-b-0 border-white/10 flex flex-col justify-between min-h-[300px] lg:min-h-[350px]"
            >
              <div>
                <span style={glassStyle} className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white/90">
                  {stat.badge}
                </span>
              </div>
              <div className="mt-16">
                <div className="text-4xl md:text-5xl font-normal tracking-tight mb-6 text-white tabular-nums">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/60">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
