import Product from "../models/Product.js";

// Create product
export const createProduct = async (req, res) => {
  try {
    const product = new Product({ ...req.body, user: req.user.id });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all products for current user
export const getMyProducts = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllProducts= async (req,res) =>{
  try {
      const products = await Product.find();
      res.json(products);
  } catch (error) {
    res.status(500).json({message:"Server Errror"})
  }
}