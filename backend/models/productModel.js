const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  discription: String,
  ratings: String,
  images: [
    {
      image: String,
    },
  ],
  categroy: String,
  seller: String,
  stock:String,
  numberofreviews: String,
  createAt: Date,
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
