import { MenuList } from "@/constant/menuList";
import LogoComponent from "@/components/logo";
import MenuComponents from "@/components/menu";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Link from "next/link";

const HeaderComponents = async () => {
  const session = await auth();
  return (
    <>
      <header className="flex items-center justify-between px-5 md:px-20 py-4 fixed top-0 w-full backdrop-blur-md z-30">
        <LogoComponent className="text-2xl lowercase" />
        <MenuComponents menuProps={MenuList} />
        <div className="flex items-center gap-2">
          <ModeToggle />

          {!session ? (
            <>
              <Button variant={"link"}>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant={"default"}>
                <Link href="/register">Start for Free</Link>
              </Button>
            </>
          ) : (
            <>
              <h1>Welcome, {session.user?.name}</h1>
              <Button>
                <Link href={"/panel/dashboard"}>Dashboard</Link>
                {/* <SignOut /> */}
              </Button>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default HeaderComponents;
