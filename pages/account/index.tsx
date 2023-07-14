'use client'

import UserCard from "@/components/UserCard";
import { useSession } from "next-auth/react";

export default function Account() {
    const { data: session } = useSession();
    const { user } : any = session;

    if ("user" in session) {
        return (
            <UserCard email={user.email} image={user?.image} name={user?.name}/>
        )
    }
}
