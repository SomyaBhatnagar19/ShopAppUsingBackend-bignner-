const fs = require('fs');

const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
    static addProduct(id, productPrice) {
        //fetch previous cart
        fs.readFile(p, (err, fileContent) => {
            // if cart doesnt exists
            let cart = {products: {}, totalPrice: 0};
            if(!err) {
                //i.e if cart exists
                cart = JSON.parse(fileContent);
            }
            // analysing the cart
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProduct];
            let updatedProduct;
            if(existingProduct) {//product already exists in the cart
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products, updatedProduct];
                cart.products[existingProduct] = updatedProduct;
            } else { //if product is new
                updatedProduct = {id: id, qty: 1};
            }
            //for cart price
            cart.totalPrice = cart.totalPrice + productPrice;
            cart.products = [...cart.products, updatedProduct];
            fs.writeFile(p , JSON.stringify(cart), err =>{
                console.log(err);
            })
        });
    }

}