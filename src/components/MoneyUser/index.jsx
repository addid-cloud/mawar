"use client"
import { useSession } from "next-auth/react"
import { Envelope, TreePalm, User, Wallet, } from "@phosphor-icons/react"
import Image from "next/image"
const MoneyUser = ()=>{
    const {data:session} = useSession()
    console.log(session)
    return(
        <div className="bg-green-100 h-full pt-4">
        <div className=" bg-green-500 flex flex-row text-white m-4 mt-0 rounded-md shadow justify-between items-center ">
            <div className=" flex flex-row items-center gap-2 p-4">
                <User size={32} />
                <h3 className="font-semibold text-xl">{session?.user?.name} | kelas</h3>
            </div>
            <div className="p-4">
            <Envelope size={32} className="cursor-pointer"/>
            </div>
        </div>
            <div className=" flex flex-col items-center gap-x-3 p-4 justify-center bg-slate-50 mx-2 border-t-4 border-green-500">
                <div>
                    <h2 className="font-light text-xl">uang tang terkumpul :</h2>
                </div>
                <div className="flex flex-row ">
                <Wallet size={32} />
                <h3 className="font-semibold text-2xl">1.000.000.000</h3>
                </div>
                </div>
            </div>
        
    )
}
export default MoneyUser