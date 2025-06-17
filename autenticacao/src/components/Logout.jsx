'use client'

import { signOut } from "next-auth/react"

export default function LogoutButton(){
    return(
        <button onClick={() => signOut({callbackUrl: "/"})} className="bg-red-950 text-white p-5 rounded-2xl hover:bg-black">
            Sair
        </button>
    )



}