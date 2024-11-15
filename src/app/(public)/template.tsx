"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: -10 },
  enter: { opacity: 1, x: 0, y: 10 },
};

const FramerHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        exit="hidden"
        animate="enter"
        transition={{ type: "ease", duration: 0.25 }}
        key="LandingPage"
      >
        {children}
      </motion.main>
    </>
  );
};

export default FramerHome;
