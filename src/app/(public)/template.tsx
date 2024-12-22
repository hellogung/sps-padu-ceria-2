"use client";
import { motion } from "framer-motion";

const variantsIn = {
  initial: { scaleY: 0 },
  animate: { scaleY: 0 },
  exit: { scaleY: 1 },
};
const variantsOut = {
  initial: { scaleY: 1 },
  animate: { scaleY: 0 },
  exit: { scaleY: 0 },
};

const FramerHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="w-full md:w-4/5 mx-auto py-5">{children}</main>

      <motion.div
        key="slide-out"
        variants={variantsOut}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ease: "easeOut", duration: .5 }}
        className="bg-slate-800 dark:bg-slate-100 w-full h-screen fixed top-0 origin-top z-50"
      ></motion.div>

      <motion.div
        key="slide-in"
        variants={variantsIn}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ease: "easeIn", duration: .5 }}
        className="bg-slate-800 dark:bg-slate-100 w-full h-screen fixed top-0 origin-bottom z-50"
      ></motion.div>
    </>
  );
};

export default FramerHome;
