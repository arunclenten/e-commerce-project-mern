const express = require('express');
const { getproduct, getsingleproduct } = require('../controller/productcontroller');
const router =express.Router();


router.route('/products').get(getproduct);
router.route('/product/:id').get(getsingleproduct);


module.exports = router;