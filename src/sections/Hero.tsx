"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";
import HomeBg from "@/components/HomeBg";

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  const statusVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="py-32 md:48 lg:p-48 relative z-0 overflow-x-clip overflow-y-hidden">
      <motion.div
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={bgVariants}
      >
        <HomeBg />
      </motion.div>

      <motion.div
        className="container"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <motion.div
            initial={{ y: -100, opacity: 0, rotate: -10 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <Image
              src={memojiImage}
              className="size-[120px]"
              alt="person peking from behind"
            />
          </motion.div>

          <motion.div
            className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg"
            variants={statusVariants}
          >
            <motion.div
              className="bg-emerald-500 size-2.5 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 2,
                duration: 1.5,
              }}
            ></motion.div>
            <div className="text-sm font-medium">
              {" "}
              Avalibale for New{" "}
              <span className="font-serif font-sm font-black">Work of Art</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="max-w-lg mx-auto" variants={itemVariants}>
          <motion.h1
            className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {["Building", "Unique", "Outstanding", "User", "Experience"].map(
              (word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              )
            )}
          </motion.h1>

          <motion.p
            className="mt-4 text-center text-white/60 md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            I specialized in transforming Idea to Real, Functional, High
            Performing, Web App, Lets Discuss Your Next Project.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-4 md:flex-row justify-center mt-8 cursor-pointer relative z-50"
          variants={itemVariants}
        >
          <motion.a
            href="/projects"
            className="inline-flex items-center font-semibold gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Look At my Work
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="size-4" />
            </motion.div>
          </motion.a>

          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 border border-white bg-white px-6 h-12 rounded-xl cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span
              className="text-2xl"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.5 }}
            >
              👋
            </motion.span>
            <span className="text-gray-900 font-semibold">
              Let&apos;s Connect
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};
