"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const statisticsData = [
  { value: 12, label: "Foodtrucks" },
  { value: 90, label: "Membres d'équipe" },
  { value: 375, label: "Caterings", suffix: "+" },
  { value: 400, label: "Festivals", suffix: "+" },
];

const StatCounter = ({
  value,
  inView,
  suffix = "",
}: {
  value: number;
  inView: boolean;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // Animation duration in milliseconds

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
        }
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * value);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value); // Ensure it ends at the exact value
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  return (
    <div className="py-12 md:py-20">
      <section
        ref={ref}
        className="bg-secondary rounded-[3rem] py-16 md:py-24 px-6 md:px-12"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-x-8 text-center">
          {statisticsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-start">
              <p className="font-display text-secondary-foreground text-[80px] sm:text-[96px] md:text-[120px] xl:text-[140px] font-black leading-[0.9]">
                <StatCounter
                  value={stat.value}
                  inView={inView}
                  suffix={stat.suffix}
                />
              </p>
              <p className="font-body text-[#999999] text-lg md:text-xl lg:text-2xl mt-3 md:mt-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}