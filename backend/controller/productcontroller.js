const productModel = require("../models/productModel");


// get product Api  -/api/v1/products
exports.getproduct = async (req, res, next) => {
 const query = req.query.keyword?{  name : {
    $regex:req.query.keyword,
    $options:'i'
  }}:{}
  const products = await productModel.find(query);

  res.json({
    success: true,
    products
  });
};
// get  singleproduct Api  -/api/v1/product/:id
exports.getsingleproduct = async(req, res, next) => {
// console.log(req.params.id ,"id");
try{
  const product = await productModel.findById(req.params.id)


  res.json({
    success: true,
    product
  });
}catch{
  res.status(404).json({
    success: false,
   message:"unable to get product id "
  });
}

};
