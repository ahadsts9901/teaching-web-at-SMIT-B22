// https://chatgpt.com/share/6acce8b0-4e94-83ee-83b5-47f5bd565e5a

const studentA = {
  name: "Shehzad",
  class: "Web",
};
const studentB = studentA;

studentB.name = "ahmed";

console.log(studentA);

let num1 = 6;

let num2 = num1; // pass by value

num2++;

console.log("num1: ", num1);
console.log("num2: ", num2);

const arr1 = [2, 4, 6];

const arr2 = arr1; // pass by reference

arr2[1] = 99;

console.log(arr1);

//

let user = {
  name: "Ali",
};

function changeUser(obj) {
  obj = { name: "Ahmed" };
}
changeUser(user);

console.log(user.name);

// Spread operator
const num3 = [10, 20, 30];

const num4 = [5, ...num3, 40, 50];

// console.log(num4);

const copy = structuredClone(obj);
