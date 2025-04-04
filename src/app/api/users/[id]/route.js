
import { users } from "@/constant/data";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const id = parseInt(params?.id, 10);
        if (isNaN(id)) {
            return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
        }

        const user = users.find(user => user.id === id);
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.error("GET Error:", error);
        return NextResponse.json({ message: "Something went wrong", error: error.message }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        const body = await req.json();
        const id = parseInt(params?.id, 10);

        if (isNaN(id)) {
            return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
        }
        if (!body.email || !body.name || !body.age) {
            return NextResponse.json({ message: "Please enter all fields" }, { status: 400 });
        }

        // Simulating update
        const updatedUser = { id, ...body };

        return NextResponse.json({ message: "User updated successfully", user: updatedUser }, { status: 200 });
    } catch (error) {
        console.error("PUT Error:", error);
        return NextResponse.json({ message: "Some error occurred" }, { status: 500 });
    }
}
