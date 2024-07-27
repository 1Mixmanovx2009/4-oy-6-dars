// // ----------------1-rasim-------------

// //------------1-misol-------------
// function teskariSon(n) {
//     if (Number.isInteger(n) && n >= 100 && n <= 999) {
//         let str = n.toString();
        
//         let teskariStr = str.split('')
//         .reverse() 
//         .join(''); 
//         return parseInt(teskariStr, 10);
//     } else {
        
//         return "Iltimos, 3 xonali son kiriting.";
//     }
// }

// console.log(teskariSon(123)); 
// console.log(teskariSon(456));
// console.log(teskariSon(789));
// console.log(teskariSon(12));  
// console.log(teskariSon(1000)); 

// // -----------------2-misol------------

// function faktorial(n) {
//     if (Number.isInteger(n) && n >= 0) {
//         let natija = 1;
        
//         for (let i = 1; i <= n; i++) {
//             natija *= i;
//         }
        
//         return natija;
//     } else {
//         return "Iltimos, musbat butun son kiriting.";
//     }
// }

// console.log(faktorial(5)); 
// console.log(faktorial(0));
// console.log(faktorial(7));
// console.log(faktorial(-3));
// console.log(faktorial(3.5));

// -------------3-misol------------

// function solishtirAndPrint(obj1, obj2) {
    
//     if (obj1.age === undefined || obj2.age === undefined) {
//         console.log("Iltimos, har ikkala ob'ektda ham 'age' xususiyati mavjud bo'lishini tekshiring.");
//         return;
//     }
    
//     if (obj1.age > obj2.age) {
//         console.log(obj1.name); 
//     } else if (obj1.age < obj2.age) {
//         console.log(obj2.name); 
//     } else {
//         console.log("Yoshlar teng.");
//     }
// }


// let person1 = { name: "Ali", age: 25 };
// let person2 = { name: "Oybek", age: 30 };

// solishtirAndPrint(person1, person2); 

// let person3 = { name: "Javlon", age: 30 };

// solishtirAndPrint(person2, person3); 

// // -------------4-misol---------------

// function chiqaring(n) {
//     function rekursiya(current) {
//         if (current > n) {
//             return; 
//         }
        
//         console.log(current);
        
//         rekursiya(current + 1);
//     }
    
//     rekursiya(1);
// }

// chiqaring(5); 


// ---------------5-misol------------------

// let user = {
//      name: "Shaxzod" 
// };
// let age = {
//      age: 25 
// };
// let userJob = 
// { job: "Developer"
//  };

// let combinedObject = Object.assign({}, user, age, userJob);

// console.log(combinedObject);


// // -------------6-misol------------------

// function maoshlarYigindisi(salaries) {
//     let yigindi = 0;

//     for (let xodim in salaries) {
//         yigindi += salaries[xodim];
//     }

//     return yigindi;
// }

// let salaries = {
//     aXodim: 150,
//     bXodim: 180,
//     cXodim: 210
// };

// console.log(maoshlarYigindisi(salaries)); 


// // -------------7-misol------------------

// function findMax(numbers) {
//     if (numbers.length === 0) {
//         return "Massiv bo'sh";
//     }

//     let max = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i]; 
//         }
//     }

//     return max;
// }

// let numbers1 = [3, 5, 7, 2, 8, 9, 1];
// let numbers2 = [15, 22, 8, 5, 30, 19];
// let numbers3 = [];

// console.log(findMax(numbers1));
// console.log(findMax(numbers2));
// console.log(findMax(numbers3));

// // -------------8-misol------------------


// let arr = [2, 4, 6, 7, true, false, null, undefined];

// function hisoblaYigindi(arr) {
//     let yigindi = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let qiymat = arr[i];
        
//         if (typeof qiymat === 'number') {
//             yigindi += qiymat; 
//         } else if (typeof qiymat === 'boolean') {
//             yigindi += qiymat ? 1 : 0; 
//         } else if (qiymat === null || qiymat === undefined) {
//             yigindi += 0; 
//         }
//     }

//     return yigindi;
// }

// console.log(hisoblaYigindi(arr)); 



// // -------------2-rasim------------------


// ------------------1-misol---------------

// let people = [
//     {
//         ism: "Abdulloh",
//         yoshi: 21,
//         holati: "yahshi"
//     },
//     {
//         ism: "Batir",
//         yoshi: 18,
//         holati: "ortacha"
//     },
//     {
//         ism: "Shoker",
//         yoshi: 12,
//         holati: "yomon"
//     }
// ];


// function printFalseStatus(people) {
//     for (let person of people) {
//         if (person.holati === "yolg'on") {
//             console.log(person);
//         }
//     }
// }

// printFalseStatus(people);


// ---------------2-mashq-------------

// function hisoblaYigindi(n) {
//     let yigindi = 0;

//     for (let i = 1; i <= n; i++) {
//         yigindi += i;
//     }

//     return yigindi;
// }

// let kiritilganSon = 5;
// console.log(hisoblaYigindi(kiritilganSon));

// ----------------3-mashq-------------

// function containsValue(array, value) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(containsValue(numbers, 3)); 
// console.log(containsValue(numbers, 6));

// -----------------4-misol-------------

// function findLargestCommonValue(matrix1, matrix2) {

//     let flatMatrix1 = matrix1.flat();
//     let flatMatrix2 = matrix2.flat();

//     let commonValues = [];

//     for (let value of flatMatrix1) {
//         if (flatMatrix2.includes(value)) {
//             commonValues.push(value);
//         }
//     }

//     if (commonValues.length === 0) {
//         return null; 
//     }

//     return Math.max(...commonValues);
// }

// let matrix1 = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// let matrix2 = [
//     [7, 8, 9],
//     [4, 5, 10]
// ];

// console.log(findLargestCommonValue(matrix1, matrix2));


// -------------5-misol-------------

// function sumUpTo(n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     return sum;
// }

// let number = 7;
// console.log(sumUpTo(number));



// // -------------3-rasim------------------

// --------------1-misol-----------

// function createAndFillArray() {
//     let size = parseInt(prompt("Array o'lchamini kiriting:", "5"));


//     if (isNaN(size) || size <= 0) {
//         console.log("Iltimos, to'g'ri son kiriting.");
//         return;
//     }

//     let array = [];

//     for (let i = 1; i <= size; i++) {
//         let name = prompt(`Element ${i} uchun ismni kiriting:`);

//         array.push({
//             ID: i,
//             NAME: name
//         });
//     }

//     console.log(array);
// }

// createAndFillArray();


// --------------2-masala-----------

// function removeDuplicates(arr) {
//     let uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArray.includes(arr[i])) {
//             uniqueArray.push(arr[i]);
//         }
//     }
//     return uniqueArray;
// }

// let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

// console.log(removeDuplicates(array));


// ------------3-masala----------

// function findIndexInArray() {
//     let array = [88, 75, 342, 21, 45, 67];
    
//     let userInput = prompt("Array ichidan bir son kiriting:");

//     let number = Number(userInput);

//     let index = array.indexOf(number);

//     if (index !== -1) {
//         console.log(`Kiritilgan sonning indeksi: ${index}`);
//     } else {
//         console.log("Kiritilgan son arrayda mavjud emas.");
//     }
// }

// findIndexInArray();


// ----------------4-masala-------------

// function removeNumberFromArray() {
//     let array = [88, 75, 342, 21, 45, 67];
    
//     let userInput = prompt("Array ichidan bir son kiriting:");

//     let number = Number(userInput);

//     let updatedArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== number) {
//             updatedArray.push(array[i]);
//         }
//     }

//     console.log(updatedArray);
// }

// removeNumberFromArray();


// ------------------5-masala------------------

// function findMaxSumPair(array) {
//     array.sort((a, b) => b - a);

//     let maxPair = [array[0], array[1]];

//     console.log(`Eng katta yig'indiga ega bo'lgan juftlik: ${maxPair}`);
// }

// findMaxSumPair([1, 2, 3, 4, 5]);
