// -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses
import { cart, courses } from "./data.js";
let cartItems=cart.map(item=>{
    let course=courses.find(c=>c.id==item.courseId);
    return {...course,quantity:item.qty}
})
console.log("Cart Items with Course Info:", cartItems);
// -> Calculate total cart amount
let totalAmount=cartItems.reduce((total,items)=>total+items.price*items.quantity,0);
console.log("Total Cart Amount:", totalAmount);
// -> Increase quantity of a course (immutably)
function increaseQuantity(id){
    return cart.map(item=>{
        if(item.id===id){
            return {...item,quantity:item.quantity+1};
        }
        return item;
    });
}
let updatedCart=increaseQuantity(2);
console.log("Cart after Increasing Quantity of Course ID 2:", updatedCart);
// -> Remove a course from cart
function removeCourse(id){
    return cart.filter(item=>item.id!==id);
}
let cartAfterRemoval=removeCourse(1);
console.log("Cart after Removing Course ID 1:", cartAfterRemoval);
// -> Check if all cart items are paid courses
let allPaid=cartItems.every(item=>item.paid===true);
console.log("Are all cart items paid courses?", allPaid);