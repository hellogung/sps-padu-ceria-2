import { ModeToggle } from "@/components/mode-toggle";
import SignIn from "@/components/sign-in";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SPS Padu Ceria",
  description: "Sekolahkan anak kita di SPS Padu Ceria, sebelum masuk SD",
};

const HomePage = async () => {
  const session = await auth();
  return (
    <>
      <div className="container px-5 md:px-20">
        {!session ? (
          <>
            <Button>
              <Link href="/login">Login</Link>
            </Button>
          </>
        ) : (
          <>
            <h1>Welcome, {session.user?.name}</h1>
            <Button>
              <Link href={"/dashboard"}>Dashboard</Link>
            </Button>
          </>
        )}
        <ModeToggle />
        <div className="mt-20">
          <h1>Home</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
