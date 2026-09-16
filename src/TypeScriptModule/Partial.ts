interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  city: string;
}

const user: User = {
  id: 1,
  name: "Vedant",
  email: "vedant@gmail.com",
  age: 25,
  city: "Pune",
};

function updateUser(updates: Partial<User>) {
  console.log(updates);
}

updateUser({
  name: "Rahul",
});


// function updateUser(user: User, updates: Partial<User>) {
//   Object.assign(user, updates);
// }

// updateUser(user, {
//   name: "Rahul",
// });

// console.log(user.name);

console.log(user.name); // Output: Vedant