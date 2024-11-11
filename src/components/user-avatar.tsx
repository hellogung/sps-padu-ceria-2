import { auth } from "@/lib/auth";
import Image from "next/image";

const UserAvatar = async () => {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <>
    <Image src={session.user.image || "/person.jpg"} width={50} height={50} alt="Avatar" />
      <div>
        <h2>{session.user.id}</h2>
        <h1>{session.user.name}</h1>
        <h1>{session.user.email}</h1>
        <h1>{session.user.role}</h1>
        <p>{session.expires}</p>

        {JSON.stringify(session.user)}
      </div>
    </>
  );
};

export default UserAvatar;
