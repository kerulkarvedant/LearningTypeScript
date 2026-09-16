interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
}

type PublicUser = Pick<User, "id" | "name" | "email" | "age">;

const user: PublicUser = {
  id: 1,
  name: "Vedant",
  email: "vedant@gmail.com",
  age: 25,
};

console.log(user)

//Pick lets you select only certain properties.