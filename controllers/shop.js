const Product = require('../models/product');
const Cart = require('../models/cart');
<<<<<<< HEAD

=======
>>>>>>> a890d5f89b6bf31ae13d868041f495921f15abae
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
<<<<<<< HEAD
  Product.findById(prodId, product => {
=======
  
  // Use the callback function to handle the product data
  Product.findById(prodId, product => {
    // Check if the product exists
    if (!product) {
      return res.redirect('/');
    }
    
    // Render the product detail page inside the callback
>>>>>>> a890d5f89b6bf31ae13d868041f495921f15abae
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
<<<<<<< HEAD
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
=======
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
>>>>>>> a890d5f89b6bf31ae13d868041f495921f15abae
  });
};

exports.postCart = (req, res, next) => {
<<<<<<< HEAD
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};
=======
  console.log('Reached postCart middleware');
  
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price)
  })
  console.log('Product ID:', prodId);

  // Assuming you have a valid productId, you can redirect to the cart
  res.redirect('/cart');
};


>>>>>>> a890d5f89b6bf31ae13d868041f495921f15abae

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
