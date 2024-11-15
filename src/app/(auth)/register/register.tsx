"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ProviderPage from "@/components/provider";
import LogoComponent from "@/components/logo";
import FormRegister from "./form";

const RegisterClientPage = () => {
  
  return (
    <>
      <div className="text-center">
        <LogoComponent />
        <AnimatePresence mode="wait">
          <motion.p
            key="body-title"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            className="text-xl text-gray-500 mt-5"
          >
            Lets create your account 😊
          </motion.p>
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key="register-form"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.25, delay: 0.4 }}
          className="grid w-full max-w-sm gap-3.5 border rounded-xl p-10"
        >
          <ProviderPage text="Sign Up with" />

          <span className="text-center text-gray-500">or</span>

          <FormRegister />

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link className="text-primary hover:underline" href={"/login"}>
              Sign In
            </Link>
          </p>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default RegisterClientPage;
