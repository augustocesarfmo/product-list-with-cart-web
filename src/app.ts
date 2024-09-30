import data from "../data.json";
import { Cart } from "./entities/cart";
import { Product } from "./entities/product";

for (const product of data) {
  new Product(
    product.name,
    product.price,
    product.category,
    product.image.desktop
  ).toHTML();
}

/*
const banana = new Product("Banana", 10, "Fruta", "http://image.com");
const uva = new Product("uva", 5, "Fruta", "http://image.com");

banana.incrementQuantity();
banana.incrementQuantity();
banana.incrementQuantity();
uva.incrementQuantity();
uva.incrementQuantity();
console.log(Cart);
Cart.removeProduct(banana);
console.log(Cart);
*/
