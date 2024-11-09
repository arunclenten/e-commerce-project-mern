const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");

// Create order - /api/v1/order
exports.createorder = async (req, res, next) => {
  try {
    const cartItems = req.body;

    // Calculate the total amount
    const amount = Number(
      cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)
    ).toFixed(2);
    
    const status = "pending";
    
    // Create the order
    const order = await orderModel.create({ cartItems, amount, status });

    // Update product stock
    await Promise.all(
      cartItems.map(async (item) => {
        const product = await productModel.findById(item.product._id);
        if (product) {
          product.stock -= item.qty;
          await product.save();
        } else {
          throw new Error(`Product with ID ${item.product._id} not found.`);
        }
      })
    );

    // Send response
    res.json({
      success: true,
      order
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error"
    });
  }
};
