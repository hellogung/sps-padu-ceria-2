import { signOut } from "@/lib/auth";
import { Button } from "./ui/button";

const SignOut = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <Button variant={"destructive"} type="submit">
          Sign Out
        </Button>
      </form>
    </>
  );
};

export default SignOut;
