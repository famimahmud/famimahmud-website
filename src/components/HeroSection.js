import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStartTyping(true), 1400);
    const timer2 = setTimeout(() => setShowArrow(true), 3200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-xl w-full flex flex-col items-center">
        <motion.img
          src={require("../assets/Portrait_Fami_Mahmud.jpg")}
          alt="Fami Mahmud"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-52 md:w-64 h-auto object-contain rounded-2xl shadow-xl border-4 border-white mb-6"
        />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
        >
          <Typewriter words={["Hi, I'm Fami"]} loop={1} cursor={false} typeSpeed={80} deleteSpeed={0} delaySpeed={1000} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-2xl md:text-3xl text-gray-800 max-w-2xl font-medium mt-2"
        >
          <div className="min-h-[2.5rem] md:min-h-[3rem]">
            {startTyping && (
              <Typewriter
                words={["Welcome to my portfolio."]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={0}
              />
            )}
          </div>
        </motion.p>
      </div>

      <div className="h-16 mt-4 flex justify-center items-end">
        {showArrow && (
          <button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Scroll to About Me section"
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-stone-700 animate-bounce hover:opacity-80 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
