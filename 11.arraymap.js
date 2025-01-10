// array
//? map. filter.find. findIndex,reduce,sort,reverse,every,sort,some

//? uses loop
// const numList = [10, 11, 12, 13, 14];

// numList.map((item, index, array) => {
//   console.log(item, index);
// });

//? map => change
//? returns a new array
//? original array length === returned new array length

// const numList = [10, 11, 12, 13, 14];

// const newArray = numList.map((item, index, array) => {
//   let newItem = item + 10;
//   return newItem;
// });
// console.log(newArray);

//? decrease value of each item by 5 and return array
// const numList = [10, 11, 12, 13, 14];

// const newArray = numList.map((item, index, array) => {
//   let newItem = item - 5;
//   return newItem;
// });
// console.log(newArray);

// let numbers = [5, 7, 9, 10, 12, 14, 17];

// print each number is odd or even from above array
//? for each // only for loop
// const numbers = [5, 7, 9, 10, 12, 14, 17];

// const newArray = numbers.forEach((item) => {
//   if (item % 2 === 0) {
//     console.log(item + " is even");
//   } else {
//     console.log(item + " is odd");
//   }
// });

// let isGraduated = [true, false, false, true];

//? change true to false and false to true
//?one liner // const newArray = isGraduated.map((condition) => !condition);

// const newArray = isGraduated.map((condition) => {
//   let newCondition = !condition;
//   return newCondition;
// });
// console.log(newArray);

// let marks = [25, 55, 60, 21, 28];
//? add five marks to each item which is less than 32
//? and return new array

// const newArray = marks.map((item) => (item < 32 ? item + 5 : item));
//   if (item <= 32) {
//     return item + 5; // console.log(item + 5);
//   } else {
//     return item; // console.log(item);
//   }
// });
// console.log(newArray);

const studentList = [
  {
    id: 1,
    userName: "sujan",
    isGraduated: false,
  },
  {
    id: 2,
    userName: "shirish",
    isGraduated: true,
  },
  {
    id: 3,
    userName: "sandesh",
    isGraduated: true,
  },
  {
    id: 4,
    userName: "sushilbc",
    isGraduated: false,
  },
];
//* add id of each by 100
// const newArray = studentList.map((item) => {
//   let newid = item.id + 100;
//   item.id = newid;
//   return item;
// });
// console.log(newArray);

//* get all students who are graduated

// const newArray = studentList.filter((item) => {
//   return item.isGraduated;
// });
// console.log(newArray);
