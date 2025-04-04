import { users } from "@/constant/data";
import { NextResponse } from "next/server";

export async function GET() {
    const data= users
    return NextResponse.json(data, {status:200})
  }
  
  export async function POST(req) {
    try {
        const body=await req.json()
        if (!body.name || !body.email || !body.age) {
            return NextResponse.json(
                { message: "Name,age and email are required" },
                { status: 400 }
            );
        }
        const newUser={
            name: body.name,
            email: body.email,
            age:body.age
        }
        return NextResponse.json({message:'user created Successfully',user: newUser}, {status:200})
    } catch (error) {
        return NextResponse.json({message:"something wrong", error:error.message},{status:500})
    }
    
  }