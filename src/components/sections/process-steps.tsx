"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS_DATA = [
  {
    number: 1,
    description:
      "Demandez facilement un devis en précisant vos préférences, y compris les concepts de foodtruck souhaités, le nombre d'invités, le lieu et les heures du catering.",
  },
  {
    number: 2,
    description:
      "Recevez dans les 24 heures un devis personnalisé adapté à vos souhaits et à votre budget.",
  },
  {
    number: 3,
    description:
      "Confirmez votre réservation, recevez les détails et obtenez votre personne de contact fixe. Avec l'aide de notre contact fixe, vous êtes entièrement pris en charge à partir de ce moment afin que vous puissiez vous concentrer sur d'autres aspects de l'événement.",
  },
  {
    number: 4,
    description:
      "Préparez-vous pour un catering unique ! Nous effectuons nos préparatifs et veillons à ce que nos foodtrucks arrivent à temps.",
  },
  {
    number: 5,
    description:
      "C'est le grand jour ! Profitez d'une délicieuse cuisine et d'une ambiance formidable grâce à nos foodtrucks lors de votre événement. Vous êtes également entièrement pris en charge ce jour-là, afin que vous puissiez vous concentrer agréablement sur les invités.",
  },
  {
    number: 6,
    description:
      "Après l'événement, nous veillons à ce que tout soit laissé propre. De plus, nous évaluons volontiers le catering avec vous. Vos retours sont précieux pour nous et nous aident à améliorer continuellement notre service pour les événements futurs.",
  },
];

const StarburstShape = () => (
  <svg
    viewBox="0 0 1400 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
  >
    <path
      d="M700 0L736 92L785 45L798 142L857 112L843 212L910 202L873 297L945 310L889 395L960 428L889 505L945 560L873 583L910 678L843 668L857 768L798 738L785 835L736 788L700 880L664 788L615 835L602 738L543 768L557 668L490 678L527 583L455 560L511 505L440 428L511 395L455 310L527 297L490 202L557 212L543 112L602 142L615 45L664 92L700 0Z"
      fill="#C5E89C"
    />
  </svg>
);

const BadgeShape = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path
      d="M50 0L54.5 14.6L62.5 5.5L64.1 21.5L74.5 15.5L72.5 31.5L84.5 29L78.5 44L90.5 45L81 58L92 63L79.5 74L88.5 82.5L74 87.5L79 98L63.5 97L64.5 111.5L50 105L35.5 111.5L36.5 97L21 98L26 87.5L11.5 82.5L20.5 74L8 63L19 58L9.5 45L21.5 44L15.5 29L27.5 31.5L25.5 15.5L35.9 21.5L37.5 5.5L45.5 14.6L50 0Z"
      fill="#2F8C5F"
      transform="translate(0, -5)"
    />
  </svg>
);

const ProcessSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    setDirection(1);
    setCurrentStep((prev) => (prev + 1) % STEPS_DATA.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => (prev - 1 + STEPS_DATA.length) % STEPS_DATA.length);
  };

  const goToStep = (index: number) => {
    setDirection(index > currentStep ? 1 : -1);
    setCurrentStep(index);
  };

  return (
    <section className="bg-[#D9D6D0] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden relative">
      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center items-center min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px]">
          {/* Starburst Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[120%] h-[120%] max-w-[1200px] max-h-[700px]">
              <StarburstShape />
            </div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 w-full flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col items-center w-full"
              >
                {/* Title with Badge */}
                <div className="relative inline-flex items-start justify-center mb-6 sm:mb-8">
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-black text-[#2B2B2B] uppercase leading-[0.85] text-[80px] sm:text-[110px] md:text-[140px] lg:text-[170px] xl:text-[200px] tracking-tighter"
                  >
                    ÉTAPE
                  </motion.h2>
                  {/* Badge positioned at top-right of ÉTAPE */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="absolute -top-2 -right-8 sm:-top-3 sm:-right-12 md:-top-4 md:-right-16 lg:-top-6 lg:-right-20 w-[55px] h-[55px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px]"
                  >
                    <BadgeShape />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-black text-white text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] -mt-1">
                        {STEPS_DATA[currentStep].number}.
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-serif text-[#2B2B2B] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-[95%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%] text-center"
                >
                  {STEPS_DATA[currentStep].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 flex items-center justify-center gap-x-2"
            >
              {STEPS_DATA.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToStep(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-full transition-all duration-300 ${
                    currentStep === index
                      ? "bg-[#2B2B2B] w-2.5 h-2.5"
                      : "bg-transparent border-[1.5px] border-[#2B2B2B] w-2.5 h-2.5 hover:bg-[#2B2B2B]/30"
                  }`}
                  aria-label={`Aller à l'étape ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevStep}
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Étape précédente"
            className="absolute left-3 sm:left-4 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 bg-white text-[#2B2B2B] rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
          <motion.button
            onClick={nextStep}
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Étape suivante"
            className="absolute right-3 sm:right-4 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 bg-white text-[#2B2B2B] rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;