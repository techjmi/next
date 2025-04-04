"use client"
import { useState } from "react";

export default function Page() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("User Data:", formData);
        let response= await fetch('http://localhost:3000/api/users',{
            method:"POST",
            body:JSON.stringify(formData)
        })
        const data= await response.json()
        console.log(data)
    };

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className=" p-6 rounded-lg shadow-md w-80">
                <h1 className="text-xl font-bold mb-4 text-center">Add User Data</h1>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter age"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
