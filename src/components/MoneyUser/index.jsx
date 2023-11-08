"use client"
import { useSession } from "next-auth/react"
import { Coin, Envelope, Swap, TreePalm, User, Wallet, Warning, } from "@phosphor-icons/react"
import Image from "next/image"
import { useState } from "react"
import TopUp from "../Modals/TopUp"
import Modals from "../Modals"
import Tukar from "../Modals/Tukar"
import Pesan from "../Modals/Pesan"
import Lapor from "../Modals/Lapor"

const MoneyUser = ()=>{
    const {data:session} = useSession()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
  
    const handleOpenModal = (content) => {
      setModalContent(content);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    return(
        <div className="bg-green-100 h-full pt-4">
        <div className=" bg-green-500 flex flex-row text-white m-4 mt-0 rounded-md shadow justify-between items-center ">
            <div className=" flex flex-row items-center gap-2 p-4">
                <User size={32} className="border-2 border-slate-50 rounded-full" />
                <h3 className="font-semibold text-xl">{session?.user?.name} | {session?.user?.kelas}</h3>
            </div>
            <div className="p-4">
                <button onClick={() => handleOpenModal(<Pesan />)}>
            <Envelope size={32} className="cursor-pointer"/>
                </button>
            </div>
        </div>
            <div className=" flex flex-col items-start gap-x-3 p-4  justify-center bg-slate-50 sm:mx-2 m-2 my-4 shadow-md border-2 border-green-500 rounded ">
                <div>
                    <h2 className="font-light text-xl">uang yang terkumpul :</h2>
                </div>
                <div className="flex flex-row ">
                <Wallet size={32} className="text-amber-300"/>
                <h3 className="font-semibold text-2xl">1.000.000.000</h3>
                </div>
                <div>
                    <h2 className="font-light text-xl">Pohon yang didapatkan :</h2>
                </div>
                <div className="flex flex-row ">
                <TreePalm size={32} className="text-green-400"/>
                <h3 className="font-semibold text-2xl">1</h3>
                </div>
                <div className="flex flex-row justify-center gap-4 w-full py-5">
                    <div className="flex flex-col">
                    <button onClick={() => handleOpenModal(<Tukar />)} className="flex-col flex items-center gap-y-2">
                        <Swap size={32} className="text-green-300"/>
                        <h2 className="text-sm">Tukar</h2></button>
                    </div>
                    <div className="flex flex-col ">
                    <button onClick={() => handleOpenModal(<TopUp />)} className="flex-col flex items-center gap-y-2">
                        <Coin size={32} className="text-yellow-300"/>
                        <h2 className="text-sm">Top up</h2></button>
                    </div>
                    <div className="flex flex-col ">
                    <button onClick={()=> handleOpenModal(<Lapor/>)} className="flex-col flex items-center gap-y-2">
                        <Warning size={32} className="text-red-300"/>
                        <h2 className="text-sm">Lapor</h2></button>
                    </div>
                </div>
                </div>

                <Modals isOpen={isModalOpen} onClose={handleCloseModal}>
                    {modalContent}
                </Modals>
            </div>
        
    )
}
export default MoneyUser