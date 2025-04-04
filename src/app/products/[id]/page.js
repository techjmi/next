"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });

  useEffect(() => {
    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setFormData(data.data); 
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Updated Product:", data);
      router.push('/products')
      
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center mt-5">
      <div className="p-6 rounded-lg w-1/2">
        <h1 className="text-center text-3xl font-semibold font-serif mb-3.5">
          Edit Product
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter Company"
            className="w-full px-3 py-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}
