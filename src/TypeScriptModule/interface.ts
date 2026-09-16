//An interface defines the structure of an object. 
//Easy way to remember

//Interface = blueprint


interface Product {
    id: number;
    name: string;
    price: number;
}

const laptop: Product = {
    id: 1,
    name: "Laptop",
    price: 50000
};

console.log(laptop.name);
console.log(laptop.price);