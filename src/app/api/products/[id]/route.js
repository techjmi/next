import { Product } from "@/utlility/models/products";
import { NextResponse } from "next/server";

export const PUT = async (req, context) => {
  try {
    // const{params}=await context
    const id = context.params.id;
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const body = await req.json();
    console.log(body);

    const result = await Product.findByIdAndUpdate(id, body, { new: true });

    if (!result) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Updated successfully", data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
};
// export const GET = async (req,context) => {
//     const{params}=  context
//   const id = params.id;
//   try {
//     if (!id) {
//       return NextResponse.json({ message: "ID is required" }, { status: 400 });
//     }
//     const result = await Product.findById(id);

//     if (!result) {
//       return NextResponse.json(
//         { message: "Product Details Not found" },
//         { status: 404 }
//       );
//     }
//     return NextResponse.json( {data:result} , { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: "Internal server error", error: error.message },
//       { status: 500 }
//     );
//   }
// };
export const GET = async (req, { params }) => { 
    const id = params.id;
    
    try {
      if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
      }
      const result = await Product.findById(id);
  
      if (!result) {
        return NextResponse.json(
          { message: "Product Details Not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ data: result }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "Internal server error", error: error.message },
        { status: 500 }
      );
    }
  };
