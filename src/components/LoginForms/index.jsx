"use client"
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForms = ()=>{
    const [name, setName]=useState('')
    const [password, setPassword]=useState('')
    const [error, setError]=useState('')
    const router = useRouter()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const res= await signIn('credentials',{
                name,password,redirect:false
            })
            if(res.error){
                setError("kayaknya salah deh inputan kamu")
                return
            }
            router.replace('dashbord')
        } catch (error) {
            console.log(error)
        }
    }
    return(
    <div className="flex items-center justify-center h-screen">
        <div className="shadow-xl p-5 rounded-md border-t-4 border-green-400 w-full sm:w-auto bg-slate-50 ">
            <h1 className="text-xl font-bold my-4">Masuk / Login</h1>
            <form className="flex sm:flex-row flex-col gap-3 w-full" onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="masukan nama kamu" />
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="masukan password kamu" />
                <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Login</button>
            </form>
            <div className="flex flex-row gap-3 justify-between">
                {error && (
                    <div className="bg-red-600 text-white w-fit text-sm py-1 px-3 rounded mt-2">{error}</div>
                )}
                <Link className="text-right text-sm mt-3 underline" href={"/register"}>register please</Link>
            </div>
        </div>
    </div>
    )
}

export default LoginForms;