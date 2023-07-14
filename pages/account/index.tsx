'use client'

import UserCard from "@/components/UserCard";
import { useSession } from "next-auth/react";

export default function Account() {
    const { data: session } = useSession();

    return (
        <UserCard email={session?.user?.email} image={session?.user?.image} name={session?.user?.name}/>
    )
}
