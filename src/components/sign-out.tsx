import { signOut } from "@/lib/auth";
import { Button } from "./ui/button";
import { signOutAction } from "@/actions/auth";

const SignOut = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        onSubmit={async (event) => {
          event.preventDefault();
          await signOutAction();
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
