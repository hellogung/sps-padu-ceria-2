"use client";

import { APP_NAME } from "@/constant/const";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

const LogoComponent = ({ className = "text-5xl" }: LogoProps) => {
  return (
    <>
      <h1 className="font-bold">
        <Link id="logo" href="/" className={className}>
          .{APP_NAME}
        </Link>
      </h1>
    </>
  );
};

export default LogoComponent;
