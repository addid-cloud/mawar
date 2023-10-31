import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'

export async function POST(req){
    try{
        const {name,password,kelas}= await req.json()
        const hashedPassword = await bcrypt.hash(password, 10)
        await connectMongoDB()
        await User.create({name,password: hashedPassword,kelas})
        return  NextResponse.json({message:"user registered"}, {status:201})
    }catch(error){
        return NextResponse.json({message: "error maning"}, {status:500})
    }
}

