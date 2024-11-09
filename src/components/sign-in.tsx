import { signIn } from "@/lib/auth";
import { Button } from "./ui/button";

type Provider = "github" | "google"

type SignInProps = {
  provider: Provider;
  text: string;
  redirect?: "string";
};

export default function SignIn({ provider, text, redirect }: SignInProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider, { redirectTo: redirect || "/dashboard" });
      }}
    >
      <Button type="submit">{text}</Button>
    </form>
  );
}
