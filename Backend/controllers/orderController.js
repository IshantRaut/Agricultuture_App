import Order from "../models/Order.js";

// Get all orders for the logged-in farmer
export const getOrdersForFarmer = async (req, res) => {
  try {
    // Only fetch orders for this farmer
    const orders = await Order.find({ farmer: req.user._id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
export const createOrder = async (req, res) => {
  try {
    console.log(req.user)
    const { name, quantity, price, unit, farmer } = req.body;
    console.log("Order POST body:", req.body); // <-- Add this line
    const order = new Order({
      name,
      quantity,
      price,
      unit,
      farmer, // should be the farmer's user ID
      buyer: req.user._id, // the logged-in user is the buyer
      status: "Pending",
      orderDate: new Date(),
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error("Order creation error:", err); // <-- Add this line
    res.status(500).json({ message: "Failed to create order" });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    order.status = req.body.status || order.status;
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Failed to update order status" });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete order" });
  }
};