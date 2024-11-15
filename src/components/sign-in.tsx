import { Button } from "./ui/button";
import { signInAction } from "@/lib/actions";

type Provider = "github" | "google";

type SignInProps = {
  provider: Provider;
  redirect?: string;
  className?: string;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  children?: React.ReactNode;
};

//
export default function SignIn({
  provider,
  redirect,
  className,
  variant,
  children = "Sign In",
}: SignInProps) {
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await signInAction(provider, redirect);
      }}
    >
      <Button type="submit" variant={variant} className={className}>
        {children}
      </Button>
    </form>
  );
}
