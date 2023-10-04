"use strict";
//5.1 et 5.2
let guess = 18
let chiffre
while (true){
    chiffre = prompt('Votre chiffre')
    if (chiffre < guess){
    console.log('Plus')
    } else if (chiffre > guess) {
       console.log('Moins')
    } else {
        break
    }
}
console.log('Bravo !') 

//5.4 table de multiplication 7
let number = prompt("your number ?")
for (let i=1; i < 11; i++){
    let total;
    total = nombre*1;
    console.log(total);
}

//5.5 somme numbers

let myNums = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < myNums.length; i++ ) {
  sum += myNums[i];
}

console.log(sum)


// 5.6 multiple numbers
let myNums = [1, 2, 3, 4, 5, 6, 7, 8];

let sum = 1;

for (let i = 1; i < myNums.length; i++ ) {
  sum *= myNums[i];
}

console.log(sum)

//juste prix 
let guess = 18
let chiffre
while (true){
    chiffre = prompt('Votre chiffre')
    if (chiffre < guess){
    console.log('Plus')
    } else if (chiffre > guess) {
       console.log('Moins')
    } else {
        break
    }
}
console.log('Bravo !') 





// bubble tri
var arr = [3, 1, 2, 4, 6, 7, 5, 9, 8, 11, 13, 12, 14, 15, 17, 16, 18, 20, 19]
for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++){
        if (arr[i] > arr [i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    console.log(arr);
    }
} 


// tri par selection
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        // Swap
        ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
      }
    }
    return arr
  }
  console.log(selectionSort([3, 5, 1, 2, 4, 8, 7, 10, 9, 12, 11, 16, 14, 13, 15, 17, 19, 20])) 

