import SignOut from "@/components/sign-out";
import { Button } from "@/components/ui/button";
import Unauthorize from "@/components/unauthorize";
import UserAvatar from "@/components/user-avatar";
import { auth } from "@/lib/auth";
import Link from "next/link";

const DashboardPage = async () => {
  const session = await auth();
  if (!session) return <Unauthorize />;

  return (
    <>
      <h1>Dashboard</h1>
      <UserAvatar />
      <SignOut />
      <Button>
        <Link href="/">Home</Link>
      </Button>
    </>
  );
};

export default DashboardPage;
