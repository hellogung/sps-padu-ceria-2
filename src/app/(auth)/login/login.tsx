"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { APP_NAME } from "@/constant/const";
import ProviderPage from "@/components/provider";
import LogoComponent from "@/components/logo";

const LoginClientPage = () => {
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
            Hello bro! Welcome back 👋
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.div
        key="login-form"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.25, delay: 0.4 }}
        className="grid w-full max-w-sm gap-3.5 border rounded-xl p-10"
      >
        <ProviderPage text="Sign In with" />

        <span className="text-center text-gray-500">or</span>

        <form className="grid w-full max-w-sm items-center gap-3.5">
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>

          <Button type="submit">Login</Button>
        </form>

        <p className="text-center text-sm text-gray-500">
          No account ?{" "}
          <Link className="text-primary hover:underline" href={"/register"}>
            Create One
          </Link>
        </p>
      </motion.div>
    </>
  );
};

export default LoginClientPage;
