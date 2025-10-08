// components/InitialLanding.jsx
"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { bricolage_grotesque, inter } from "@/utils/fonts";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function InitialLanding() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full flex justify-center py-5 pt-36 dark:bg-black">
        <div className="w-2/3 max-sm:w-full flex flex-col items-center">
          <div className="mt-4 px-32 max-sm:px-4">
            <h1
              className={`!text-[3rem] mt-2 max-sm:!text-[1.6rem] !whitespace-nowrap font-bold tracking-tight text-center ${bricolage_grotesque}`}
            >
              Hi, I&apos;m Anuj Patel
            </h1>
            <h1
              className={`mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 ${inter}`}
            >
              19,full-stack web developer with a passion for building impactful projects. I love breaking things to understand how they work, learning fast, and diving deep into backend systems, artificial intelligence, and core computer science concepts.

              <br />
              If you’re working on something real, let’s talk.
            </h1>
          </div>
          <div className="mt-8 flex gap-4">
            <RainbowButton className="cursor-none">
              <ScrollLink
                to="contact-section"
                activeClass="active"
                smooth={true}
                offset={-120}
                duration={1100}
              >
                Get in touch
              </ScrollLink>
            </RainbowButton>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}
