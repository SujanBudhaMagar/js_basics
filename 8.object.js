// object
// key value pair

// let x={};
// console.log(x, typeof x);

//user 1
// let firstName1 = 'Sujan';
// let lastName1 = 'Magar';

//user 2
// let firstName2 = 'shisa';
// let lastName2 = 'mash';

// primitive datatype=> string,number.boolean,null,undefined
//non-primitive datatype: object

// let user1 = {
//   firstName: "Sujan",
//   lastName: "Magar",
//   isMarried: false,
// };
// let user2 = {
//   firstName: "Shisa",
//   lastName: "mash",
//   isMarried: true,
// };

// console.log(user1);

//CRUD
// create/add/insert
// read/retrieve
// update/edit
// delete/remove

let laptopDetails = {
  brand: "acer",
  price: 100,
};
// console.log(laptopDetails);

//?read
// console.log(laptopDetails.brand); //dot operator
// console.log(laptopDetails["brand"]); // square bracket operator
// console.log(laptopDetails["price"]);

//? create or insert add color of laptop
// laptopDetails.color = "green";
// console.log(laptopDetails);

//?update (upsert[update or insert])
// laptopDetails.brand = "apple";
// console.log(laptopDetails);

//?delete
// delete laptopDetails.brand;
// console.log(laptopDetails);

//2. create an object name myHouseDetails and add following properties

let myHouseDetails = {
  numberOfrooms: 2,
  numberOfmembers: 4,
  colorofhouse: "red",
  builtYear: 2020,
  numberofStorey: 3,
};

// console.log(myHouseDetails);

// delete numberOfMembers property
// delete myHouseDetails.numberOfmembers;
// console.log(myHouseDetails);

// update numberOfrooms by new value
// myHouseDetails.numberOfrooms = 5;
// console.log(myHouseDetails);

// add a new property called estimatedpriceOfHouse
// myHouseDetails.estimatedpriceOfhouse = 20000;
// console.log(myHouseDetails);

// console.log(
//   " I have a " +
//     myHouseDetails.colorofhouse +
//     " coloured house with " +
//     myHouseDetails.numberOfrooms +
//     " rooms where " +
//     myHouseDetails.numberOfmembers +
//     " are living. " +
//     " The house is " +
//     myHouseDetails.numberofStorey +
//     " storey and was built in " +
//     myHouseDetails.builtYear +
//     " with an estimated budget of " +
//     myHouseDetails.estimatedpriceOfhouse +
//     " crores. "
// );
