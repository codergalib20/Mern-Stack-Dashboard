const Product = require('../schema/productSchema');
module.exports.get_product = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json({
      message: "All Product Loaded!",
      date: product,
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};
module.exports.post_product = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      message: "Product Posted!",
      date: product,
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};
module.exports.delete_product = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Product Deleted!",
      date: product,
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};
module.exports.update_product = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Product Updated!",
      date: product,
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};
