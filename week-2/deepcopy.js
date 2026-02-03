const order = {
    orderId: "ORD1001",
    customer: {
    name: "Anita",
    address: {
        city: "Hyderabad",
        pincode: 500085
    }
    },
    items: [
    { product: "Laptop", price: 70000 }
    ]
};
let deepCopy={...order}
deepCopy.customer.address.city="Bangalore"
deepCopy.items[0].price=65000
console.log("Original Order Object:", order);
console.log("Deep Copy Object:", deepCopy);