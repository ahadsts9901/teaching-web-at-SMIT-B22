// const number = 24; // 6
// const number = 85; // 13 -> 4
const number = 101; // 2

// function addDigits(digit) {
//   if (digit < 10) return digit; // base case

//   const first = Math.floor(digit / 10);
//   const last = digit % 10;

//   const result = first + last;

//   return addDigits(result);
// }

// console.log(addDigits(number));

// function hello(num) {
//   if (num < 1) return;

//   console.log(num);

//   hello(num - 1);
// }

// hello(10);
// hello(7);
// hello(15);

const names = [
  "Abdullah",
  "Ahmed",
  "Ali",
  "Ayesha",
  "Bilal",
  "Fatima",
  "Hamza",
  "Hassan",
  "Hira",
  "Hussain",
  "Ibrahim",
  "Isma",
  "Khadija",
  "Maryam",
  "Noor",
  "Saad",
  "Sara",
  "Shehzad",
  "Usman",
  "Zain",
  "Zoya",
];

const nums = [
    1, 1, 1, 1, 1, 2, 2, 5, 5, 6, 6, 7, 7, 7, 7, 7, 8, 8, 9, 9, 11, 11, 12, 12, 13, 14, 16, 16, 17, 17, 18, 18, 19, 19, 19, 19, 20, 20, 21, 21, 21, 23, 23, 23, 23, 24, 24, 24, 25, 25, 25, 27, 27, 28, 29, 29, 29, 30, 30, 32, 32, 33, 33, 34, 34, 34, 35, 35, 36, 36, 37, 37, 37, 37, 37, 37, 38, 38, 38, 38, 38, 39, 41, 41, 41, 41, 42, 43, 43, 43, 44, 44, 44, 44, 44, 45, 46, 46, 46, 46, 47, 48, 48, 48, 48, 49, 49, 49, 50, 50, 51, 51, 52, 52, 52, 52, 52, 52, 54, 54, 54, 55, 55, 55, 58, 58, 58, 59, 60, 60, 60, 61, 61, 61, 61, 61, 61, 62, 62, 63, 64, 64, 64, 65, 65, 66, 66, 66, 67, 68, 68, 69, 69, 69, 70, 70, 71, 71, 71, 72, 72, 73, 73, 74, 75, 75, 75, 76, 77, 77, 77, 78, 79, 80, 81, 81, 82, 82, 83, 83, 84, 84, 85, 85, 85, 85, 85, 86, 86, 86, 87, 87, 88, 88, 89, 89, 90, 90, 91, 91, 92, 92, 92, 92, 95, 95, 95, 96, 96, 97, 98, 99, 99, 99, 100, 100, 100, 101, 101, 101, 101, 102, 102, 103, 104, 104, 105, 105, 105, 106, 106, 107, 109, 109, 110, 110, 110, 112, 112, 113, 113, 115, 115, 116, 116, 119, 119, 120, 120, 120, 120, 120, 121, 121, 122, 122, 122, 123, 123, 124, 124, 124, 124, 125, 125, 126, 126, 127, 127, 128, 131, 132, 132, 132, 132, 133, 133, 134, 134, 136, 138, 138, 138, 138, 139, 139, 139, 140, 140, 140, 140, 141, 141, 142, 142, 142, 144, 144, 145, 145, 146, 146, 149, 151, 152, 152, 152, 152, 152, 152, 153, 153, 154, 154, 154, 154, 154, 155, 157, 157, 157, 157, 157, 158, 158, 159, 159, 159, 160, 161, 161, 161, 161, 162, 162, 163, 164, 164, 164, 164, 165, 165, 168, 168, 168, 169, 170, 170, 170, 171, 171, 172, 172, 172, 173, 174, 174, 175, 175, 176, 176, 177, 178, 179, 179, 179, 179, 179, 181, 182, 182, 184, 184, 184, 184, 185, 186, 186, 187, 188, 189, 190, 190, 192, 192, 192, 192, 196, 198, 199, 199, 199, 200, 200, 201, 201, 201, 201, 202, 203, 203, 206, 206, 206, 206, 207, 207, 209, 209, 211, 211, 212, 212, 213, 213, 214, 214, 214, 215, 215, 215, 216, 216, 217, 217, 218, 218, 219, 219, 220, 220, 220, 221, 222, 222, 222, 223, 224, 226, 227, 228, 229, 229, 229, 229, 230, 230, 231, 231, 233, 233, 233, 235, 235, 235, 236, 236, 236, 238, 240, 240, 241, 241, 242, 243, 244, 244, 245, 246, 246, 248, 248, 249, 250, 250, 252, 253, 255, 255, 256, 256, 261, 265, 267, 267, 268, 268, 269, 269, 270, 271, 272, 274, 276, 276, 278, 279, 279, 280, 280, 280, 281, 281, 282, 284, 295, 297
]
const toSearch = 141;

function search(arr) {
  if (arr.length < 1) return -1;

  const midIndex = Math.floor(arr.length / 2);

  console.log("Mid: ",arr[midIndex]);

  if (toSearch === arr[midIndex]) return midIndex;

  if (toSearch > arr[midIndex]) {
        console.log("Greater");

    const rightArray = arr.slice(midIndex + 1);

    console.log(rightArray);

    return search(rightArray);
  } else {
    console.log("Less");

    const leftArray = arr.slice(0, midIndex - 1);

    console.log(leftArray);

    return search(leftArray);
  }
}
const result = search(nums);

// Linear Search
// for (let i = 0; i < names.length; i++) {
//   if (names[i] === toSearch) {
//     console.log(i);
//   }
// }

// Iterative Binary Search
// function binarySearchIterative(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) return mid;

//     if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return -1;
// }

// // Recursive Binary Search
// function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
//   if (left > right) return -1;

//   const mid = Math.floor((left + right) / 2);

//   if (arr[mid] === target) return mid;

//   if (arr[mid] < target) {
//     return binarySearchRecursive(arr, target, mid + 1, right);
//   }

//   return binarySearchRecursive(arr, target, left, mid - 1);
// }

// const result = binarySearchIterative(names, "Shehzad")
// const result = binarySearchRecursive(names, "Ahmed")

console.log("Result: ", result);


// Binary Search
// Video: https://youtu.be/TbbSJrY5GqQ?si=P3Wbkgm__PCyGm9Q
// Problem: https://www.codewars.com/kata/547bf139ec2cf10b7c0003e6


// Recursion
// Video: https://youtu.be/l8X9nhgZyoA?si=Dw7eT5gSk32mDbF4
// Problem (medium/optional): https://www.codewars.com/kata/57547f9182655569ab0008c4
// Problem (hard/optional): https://www.codewars.com/kata/56f29b3b75e340627a0009d5/
