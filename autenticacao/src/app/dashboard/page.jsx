import { getServerSession } from "next-auth" 
import { authOptions } from "../api/auth/[...nextauth]/route"
import Logout from "@/components/Logout"




export default async function Dashboard(){
    const session = await getServerSession(authOptions)

    if (!session) {
        return(
            <div className="bg-red-950 text-white p-5 rounded-2xl hover:bg-black">
                Você não esta logado!
            </div>
        )
    }



    return(
        <div className="flex flex-col flex-2/6 items-center sm:items-center">
            <div>
                Olá, {session?.user?.name}
            </div>
            <p>
                Esta página é DashBoard
            </p>

            <div className="mt-2">
                <Logout/>
            </div>

        </div>
    )
}