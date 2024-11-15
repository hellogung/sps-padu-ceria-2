import { APP_NAME } from "@/app/constant/const";
import SignOut from "@/components/sign-out";
import { Button } from "@/components/ui/button";
import Unauthorize from "@/components/unauthorize";
import UserAvatar from "@/components/user-avatar";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Dashboard | ${APP_NAME}`,
  description: "",
};

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

      
      {/* Admin: Github */}
      <div className="bg-lime-400">
        <h1>Admin</h1>
        <h1>Parents</h1>
        <h1>Teachers</h1>
      </div>
      {/* Parents: gunghello@gmail.com */}
      <div className="bg-cyan-600">
        <h1>Parents</h1>
      </div>
      {/* Teachers: agunggumelar467@gmail.com */}
      <div className="bg-violet-500">
        <h1>Teachers</h1>
      </div>
    </>
  );
};

export default DashboardPage;
