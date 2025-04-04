"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return alert("Please select a file first!");

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        // setUploadedUrl(data.imageUrl);

        alert("Image uploaded successfully!");
      } else {
        alert("Upload failed: " + data.error);
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Something went wrong!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-3  bg-gray-100">
       <Link href="/addproduct" className="my-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Add Products</button>
      </Link>
        <Link href="/products" className="my-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Go to Products</button>
      </Link>
      <div className="w-96 bg-white p-6 rounded">
        {/* <Link></Link> */}
      
        <h1 className="text-xl font-bold mb-4 text-center">Upload Image</h1>

        {previewUrl && (
          <div className="mb-4">
            <Image
              src={previewUrl}
              alt="Preview"
              width={300}
              height={200}
              className="rounded"
            />
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            {uploading ? "Uploading..." : "Upload File"}
          </button>
        </form>

        {/* {uploadedUrl && (
          <div className="mt-4 text-center">
            <p className="text-green-600 font-medium">Uploaded Image:</p>
            <Image
              src={uploadedUrl}
              alt="Uploaded"
              width={300}
              height={200}
              className="rounded mt-2"
            />
          </div>
        )} */}
      </div>
    </div>
  );
}
