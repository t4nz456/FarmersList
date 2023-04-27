class Cart {
    constructor() {
      this.products = [];
      this.total = 0;
    }
  
    addProduct(product) {
      this.products.push(product);
      this.total += product.price;
    }
  
    removeProduct(i) {
      const removedProduct = this.products.splice(i, 1)[0];
      this.total -= removedProduct.price;
    }
  }
  
  module.exports = Cart;
  