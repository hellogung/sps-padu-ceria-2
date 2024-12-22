import React from 'react';
import Image from "next/image";
import {auth} from "@/lib/auth";
import Unauthorize from "@/components/unauthorize";

const User = async ({size = 50}: { size?: number | undefined }) => {
    const session = await auth();
    if (!session) return <Unauthorize/>;

    return (
        <div>
            <Image src={session.user?.image || "/person.jpg"}
                   width={size}
                   height={size}
                   className="rounded-full"
                   alt="Avatar"/>

        </div>
    );
};

export default User;