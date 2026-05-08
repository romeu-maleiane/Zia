import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

import { BlurRevealText } from './BlurRevealText';

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  isPopular?: boolean;
  hasToggle?: boolean;
  buttonText: string;
  stats: {
    members: string;
    queries: string;
    integrations: string;
  };
  features: PricingFeature[];
}

const tiers: PricingTier[] = [
  {
    name: 'STARTER',
    price: 'Free',
    description: 'For small teams getting started with AI support.',
    buttonText: 'Get Started',
    stats: {
      members: 'Up to 3',
      queries: '200',
      integrations: '2',
    },
    features: [
      { name: 'Source attribution', included: true },
      { name: 'Conversation history', included: false },
      { name: 'Slack notifications', included: false },
      { name: 'API access', included: false },
    ],
  },
  {
    name: 'BASIC',
    price: '$19',
    description: 'For orgs with advanced security and scale needs.',
    isPopular: true,
    hasToggle: true,
    buttonText: 'Get Started',
    stats: {
      members: 'Unlimited',
      queries: '200',
      integrations: 'Unlimited',
    },
    features: [
      { name: 'Source attribution', included: true },
      { name: 'Conversation history', included: true },
      { name: 'Slack notifications', included: true },
      { name: 'API access', included: false },
    ],
  },
  {
    name: 'PRO',
    price: '$49',
    description: 'For growing teams that need automation.',
    hasToggle: true,
    buttonText: 'Get Started',
    stats: {
      members: 'Up to 15',
      queries: '200',
      integrations: 'Unlimited',
    },
    features: [
      { name: 'Source attribution', included: true },
      { name: 'Conversation history', included: true },
      { name: 'Slack notifications', included: true },
      { name: 'API access', included: true },
    ],
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative pt-6 pb-32 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 flex justify-center">
            <BlurRevealText 
              text="Scale your AI agent effortlessly." 
              highlightWords={["effortlessly."]}
              highlightClassName="font-serif italic text-white/90"
            />
          </h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="text-lg text-white/80"
          >
            Choose the perfect plan for your team's autonomous workflows.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 lg:gap-0 max-w-6xl mx-auto">
          {tiers.map((tier, index) => {
            const isHighlighted = tier.isPopular;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 + index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  'relative flex flex-col w-full max-w-md lg:w-1/3 rounded-[2rem]',
                  isHighlighted
                    ? 'bg-[#18181A] border border-white/10 shadow-2xl shadow-black lg:scale-105 z-10 p-8 lg:p-10'
                    : 'bg-[#121214] border border-white/5 p-8 lg:p-10 z-0'
                )}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-bold tracking-widest uppercase text-white/70">
                    {tier.name}
                  </span>
                  {tier.hasToggle && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsYearly(!isYearly)}
                        className="relative inline-flex h-4 w-8 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                        style={{ backgroundColor: isYearly ? '#0d9488' : '#0d9488' }}
                      >
                        <span
                          className={cn(
                            'pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                            isYearly ? 'translate-x-4' : 'translate-x-0'
                          )}
                        />
                      </button>
                      <span className="text-[11px] font-medium text-white/80">Yearly</span>
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[32px] md:text-[40px] font-medium tracking-tight h-[48px] flex items-end">
                      {tier.price === 'Free' ? 'Free' : isYearly ? `$${parseInt(tier.price.replace('$', '')) * 10}` : tier.price}
                    </span>
                    {tier.price !== 'Free' && (
                      <span className="text-sm font-medium text-white/70 tracking-tight">/month</span>
                    )}
                  </div>
                  <p className="mt-4 text-[13px] text-white/70 h-10 leading-snug pr-4">
                    {tier.description}
                  </p>
                </div>

                {/* Button */}
                <button
                  className={cn(
                    'w-fit py-2.5 px-6 rounded-3xl text-[13px] font-medium transition-all duration-200 mb-8',
                    isHighlighted
                      ? 'bg-white/90 text-black hover:bg-white'
                      : 'bg-transparent border border-white/20 text-white hover:bg-white/5'
                  )}
                >
                  {tier.buttonText}
                </button>

                {/* Stats */}
                <div className="space-y-5 mb-8 text-[13px] text-white/80 font-medium">
                  <div>Team members: {tier.stats.members}</div>
                  <div className="h-px w-full bg-white/5" />
                  <div>AI queries / mo: {tier.stats.queries}</div>
                  <div className="h-px w-full bg-white/5" />
                  <div>Integrations: {tier.stats.integrations}</div>
                </div>

                <div className="h-px w-full bg-white/5 mb-8" />

                {/* Features */}
                <ul className="space-y-4 flex-1">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              'flex items-center justify-center w-5 h-5 rounded-full shrink-0',
                              feature.included ? 'bg-white/20' : 'bg-transparent'
                            )}
                          >
                            {feature.included ? (
                              <Check className="w-3 h-3 text-white" />
                            ) : (
                              <X className="w-3 h-3 text-white/20" />
                            )}
                          </div>
                          <span
                            className={cn(
                              'text-[13px] font-medium',
                              feature.included ? 'text-white/80' : 'text-white/40 font-normal'
                            )}
                          >
                            {feature.name}
                          </span>
                        </div>
                        {idx !== tier.features.length - 1 && (
                          <div className="h-px w-full bg-white/5 mt-4" />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
