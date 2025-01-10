// const student1 = {
//   firstName: "Sujan",
//   lastName: "Magar",
// };
// const student2 = student1; // shallow copy
// student1.firstName = "haunted";
// console.log(student2);

//spread operator ...
// const student2 = { ...student1 }; // shallow copy
//? structured cloning // nothing will change

// student1.firstName = "Badal";
// console.log(student2);

const laptopDetails1 = {
  brand: "MSI",
  price: "1400",
  Storage: {
    memory: 16,
    ssd: 512,
  },
};

const laptopDetails2 = structuredClone(laptopDetails1); //deep copy
laptopDetails1.Storage.memory = 32;
console.log(laptopDetails2);
