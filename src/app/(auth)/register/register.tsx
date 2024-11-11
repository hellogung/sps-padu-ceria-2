"use client";

import SignIn from "@/components/sign-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { APP_NAME } from "@/app/constant/const";
import { AnimatePresence, motion } from "framer-motion";
import ProviderPage from "@/components/provider";

const RegisterClientPage = () => {
  return (
    <>
      <div className="text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key="header-title"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-5xl font-bold mb-5"
          >
            {/* {APP_NAME} */}
            .Register
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key="body-title"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            className="text-xl text-gray-500"
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
          className="grid w-full max-w-sm bg-gray-50 gap-3.5 border rounded-xl p-10"
        >

          <ProviderPage text="Sign Up with" />

          <span className="text-center text-gray-500">or</span>

          <form className="grid w-full max-w-sm items-center gap-3.5">
            <div className="grid gap-1.5">
              <Label htmlFor="first-name">First Name</Label>
              <Input type="text" id="first-name" placeholder="" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="last-name">Last Name</Label>
              <Input type="text" id="last-name" placeholder="" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="" />
            </div>

            <Button type="submit">Register</Button>
          </form>

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
