const cart = [
  { id:101,name: "Laptop", price: 800, instock: 5 },
  { id:102,name: "Phone", price: 600, instock: 10 },
  { id:103,name: "Tablet", price: 300, instock: 15 },
  { id:104,name: "Monitor", price: 200, instock: 8 },
];
// Total value of items in stock
const totalValue = cart.reduce((acc, item) => acc + (item.price * item.instock), 0);
console.log("Total value of items in stock:", totalValue); 
// List of item names in the cart
const itemNames = cart.map(item => item.name);
console.log("Item names in the cart:", itemNames);
