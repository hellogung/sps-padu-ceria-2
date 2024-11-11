import SignIn from "@/components/sign-in";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

type ProviderProps = {
  text: string;
};

const ProviderPage = ({ text }: ProviderProps) => {
  return (
    <>
      <SignIn className="w-full" variant={"outline"} provider="github">
        <FaGithub />
        {text} Github
      </SignIn>
      <SignIn className="w-full" variant={"outline"} provider="google">
        <FcGoogle /> {text} Google
      </SignIn>
    </>
  );
};

export default ProviderPage;
