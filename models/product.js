const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
const Cart = require('./cart');

=======
>>>>>>> a890d5f89b6bf31ae13d868041f495921f15abae
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
<<<<<<< HEAD
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
=======
  constructor(title, imageUrl, description, price) {
>>>>>>> a890d5f89b6bf31ae13d868041f495921f15abae
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
<<<<<<< HEAD
    getProductsFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          prod => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }

  static deleteById(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id);
      const updatedProducts = products.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
=======
    // providing a unique id that we will use in the href in the details button for product clicked.

    this.id = Math.random().toString(); //now all the products wiull have an id too
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
>>>>>>> a890d5f89b6bf31ae13d868041f495921f15abae
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
<<<<<<< HEAD
    });
=======
    })
>>>>>>> a890d5f89b6bf31ae13d868041f495921f15abae
  }
};
