const user = {
    name: 'Alice',
    id: 101,
    name: "Ravi",
    preferences: {
      theme: "dark",
      language: "en"
    }
};
let shallowCopy=user;
user.name='charan';
shallowCopy.preferences.theme='light';
console.log("Original User Object:", user);
console.log("Shallow Copy Object:", shallowCopy);

