// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
//   -> Check if student can delete
//   -> Create a flat list of all unique permissions
//   -> Add new role moderator immutably

import { roles } from "./data.js";
//   -> Get all role names
let roleNames=Object.keys(roles);           
console.log("Role Names:", roleNames);
//   -> Check if student can delete
let canStudentDelete=roles.student.includes("delete");
console.log("Can Student Delete?", canStudentDelete);
//   -> Create a flat list of all unique permissions
let allPermissions=new Set();
Object.values(roles).forEach(perms=>{
    perms.forEach(perm=>allPermissions.add(perm));
}); 
console.log("All Unique Permissions:", Array.from(allPermissions));
//   -> Add new role moderator immutably
let newRole={"moderator":["update","view"]};
let updatedRoles={...roles,...newRole};
console.log("Updated Roles with Moderator:", updatedRoles);
