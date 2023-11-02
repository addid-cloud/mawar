"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
const RegisterForms = ()=>{
    const[name,setName]= useState("")
    const[kelas,setKelas]= useState("")
    const[password,setPassword]= useState("")
    const[error,setError]= useState("")
    const router = useRouter()
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!name|| !password){
            setError("ga enek isine pak")
            return;
        }

        try {
            const resUserExist = await fetch('api/userExist',{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify({
                    name
                })
            })
            const {user} = await resUserExist.json()
            if(user){
                setError("user udh ada ga usah daftar lagi")
                return;
            }
            const res= await fetch('api/register',{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify({
                    name,password,kelas
                })
            })
            if(res.ok){
                const form = e.target
                form.reset()
                router.push("/")
            }else{
                console.log("gagal")
            }
        } catch (error) {
            console.log("error pas daftar", error)
        }
    }
    return(
        <div className="flex items-center justify-center h-screen">
        <div className="shadow-xl p-5 rounded-md border-t-4 border-green-400 w-full sm:w-auto">
            <h1 className="text-xl font-bold my-4">Daftar dulu cuy</h1>
            <form onSubmit={handleSubmit} className="flex sm:flex-row flex-col gap-3 w-full">
                <input type="text" placeholder="masukan nama kamu" onChange={(e)=>setName(e.target.value)}/>
                <input type="password" placeholder="masukan password kamu" onChange={(e)=>setPassword(e.target.value)} />
                <label>Masukan Kelas:</label>
<select id="Kelas" name="Kelas" onChange={(e) => {setKelas(e.target.value)}}>
  <option value="" className="bg-slate-800 cursor-not-allowed invisible">kelas</option>
  <option value="X.1">X.1</option>
  <option value="X.2">X.2</option>
  <option value="X.3">X.3</option>
  <option value="X.4">X.4</option>
</select>

                <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 ">Register</button>
            </form>
            <div className="flex flex-row gap-3 justify-between">
                {error && (
                    <div className="bg-red-600 text-white w-fit text-sm py-1 px-3 rounded mt-2">{error}</div>
                    )}
                <Link className="text-right text-sm mt-3 underline" href={"/"}>Balik ke laman login</Link>
            </div>
        </div>
    </div>
    )
}

export default RegisterForms