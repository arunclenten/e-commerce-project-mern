const mongoose = require('mongoose');

const orderSchema =new mongoose.Schema({
    cartItems:Array,
    amout:String,
    status:String,
    createAt:Date
})

const orderModel = mongoose.model('order',orderSchema);
module.exports =orderModel;