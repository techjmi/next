import ConnectTodb from "@/utlility/db";
import { Product } from "@/utlility/models/products";
import { NextResponse } from "next/server";

export async function GET() {
    await ConnectTodb();
    try {
        const data = await Product.find();
        return NextResponse.json({ message: "true", result: data }, { status: 200 }); 
    } catch (error) {
        console.error("Error fetching products:", error.message);
        return NextResponse.json({ message: "Internal error", error: error.message }, { status: 500 }); 
    }
}
export const POST=async(req)=>{
    await ConnectTodb()
    const body= await req.json()
    try {
        const product= await Product(body)
        const result= await product.save()
        return NextResponse.json({message:"data inserted successfully"},{status:200})
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({message:"internal server error"}, {status:500})
    }
}