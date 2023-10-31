"use client"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
const UserInfo = ()=>{
    const {data:session} = useSession()
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-4 my-6">
                <div> Nama: <span className="font-bold">{session?.user?.name}</span></div>
                <button onClick={()=>signOut()} className="bg-red-500 text-white text-sm w-fit px-2 py-1 rounded-sm self-center">Murtad</button>
            </div>
        </div>
    )
}

export default UserInfo