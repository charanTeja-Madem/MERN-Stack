import { users } from "./data.js";
//  Get all active users
let activeUsers = users.filter(user => user.active);
console.log("Active Users:", activeUsers);
let adminUsers = users.filter(user => user.role === "admin");
console.log("Admin Users:", adminUsers);
let findUserById = (id) => {
  return users.find(user => user.id === id);
}
console.log("User with ID 2:", findUserById(2));
//  Deactivate a user immutably
function deactivateUser(id) {
    return users.map(user=>{if(user.id==id){
        user.active=false;      
    }})
}
let updatedUsers = deactivateUser(1);
console.log("Users after deactivation:", updatedUsers);
console.log("Original Users Array:", users);