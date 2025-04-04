"use client";

import { useState } from "react";

export default function () {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });
  console.log(formData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log("Products Data:", formData);
    let response= await fetch('http://localhost:3000/api/products',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",  
        },
        body:JSON.stringify(formData)
    })
    const data= await response.json()
    setFormData({
        name: "",
        price: "",
        category: "",
        company: "",
    })
    console.log(data)
  };

  return (
    <div className="min-h-screen flex justify-center mt-5">
      <div className=" p-6 rounded-lg w-1/2">
        <h1 className="text-center text-3xlxl font-semibold font-serif mb-3.5">
          add product in the list
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3" method="POST">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* <input
            type="text"
            name="company"
            value={formData.comapny}
            onChange={handleChange}
            placeholder="Enter Company"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          /> */}
            <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter Company"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
