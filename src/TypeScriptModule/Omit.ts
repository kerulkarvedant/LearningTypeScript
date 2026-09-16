interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type UserResponse = Omit<User, "password">;

const response: UserResponse = {
  id: 1,
  name: "Vedant",
  email: "vedant@gmail.com",
  createdAt: new Date(),
};

console.log(response);
