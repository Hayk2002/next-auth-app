'use client'

import UserCard from "@/components/UserCard";
import { useSession } from "next-auth/react";

export default function Account() {
    const { data: session } = useSession();
    const { user: { email, image, name } } = session;

    return (
        <UserCard email={email} image={image} name={name}/>
    )
}
