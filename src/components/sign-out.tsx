"use client"

import { Button } from "./ui/button";
import { signOutAction } from "@/lib/actions";

const SignOut = () => {
  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await signOutAction();
        }}
      >
        <Button variant={"link"} className="hover:no-underline" type="submit">
          Sign Out
        </Button>
      </form>
    </>
  );
};

export default SignOut;
