import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await connectMongoDB()
        const {name}= await req.json()
        const user =await User.findOne({name}).select("_id")
        console.log(user)
        return NextResponse.json({user})
    } catch (error) {
        console.log(error)
    }
}