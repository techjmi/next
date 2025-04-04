import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    company:String
});

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

