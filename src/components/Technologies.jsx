import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  inital: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-white-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNodejsLine className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandReactNative className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl text-white-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
