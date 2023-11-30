const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

<<<<<<< HEAD
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);
=======
router.get('/products/:productId', shopController.getProduct); //connecting controller with logic

// shows cart
router.get('/cart', shopController.getCart);

// posting to cart
router.get('/cart', shopController.postCart);
>>>>>>> a890d5f89b6bf31ae13d868041f495921f15abae

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
