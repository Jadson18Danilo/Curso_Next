'use client'
import {signIn} from "next-auth/react"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <h1>
          Trabalhando com autenticação
        </h1>

        <div className="mt-3.5 p-4">
          <button type="submit" className=" border-2 border-black rounded-2xl text-black p-6 cursor-pointer hover:bg-black hover:text-amber-50 hover:scale-100" onClick={() => signIn("github", {callbackUrl: "/dashboard"})}>
            Entrar com GitHub
          </button>
        </div>

      </main>

    </div>
  );
}
