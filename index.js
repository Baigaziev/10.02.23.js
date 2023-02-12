for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
let evenNumbers = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    evenNumbers.push(i);
  }
}
console.log(evenNumbers);

// заполнитье массив evenNumbers только четными числами

let oddNumbers = [];

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    oddNumbers.push(i);
  }
}

console.log(oddNumbers);

//

let workdays = [];
let weekensday = [];
let days = [
  `Monday`,
  `Tueasday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
  `Sunday`,
];

for (let i = 0; i < days.length; i++) {
  let day = days[i].toLocaleLowerCase();
  if (day === `saturday` || day === `sunday`) {
    weekensday.push(days[i]);
  } else {
    workdays.push(days[i]);
  }
}
console.log(workdays, weekensday);

let vowels = [];
let consonants = [];
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (let i = 0; i < letters.length; i++) {
  if (
    letters[i] == "a" ||
    letters[i] == "e" ||
    letters[i] == "i" ||
    letters[i] == "o" ||
    letters[i] == "u" ||
    letters[i] == "y"
  ) {
    vowels.push(letters[i]);
  } else {
    consonants.push(letters[i]);
  }
}

console.log(vowels);
console.log(consonants);


//написать цикл который сохряняет самое большое число
let smallest = 1000
let largest = 0;
let nums = [41, 31, 55, 100, 15, 21];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > largest) {
    largest = nums[i];
  }
  else if ( nums[i] < smallest) {
    smallest = nums[i]
  }
  
}
console.log(largest)
console.log(smallest)

// вернуть или вывести только уникальные данные 
let unique = [];
let example = [1, 5, 2, 6, 3, 1, 1, 6, 5];

for (let i = 0; i < example.length; i++) {
  if (unique.indexOf(example[i]) === -1) {
    unique.push(example[i]);
  }
}

console.log(unique); 


for (let i = 5; i < 20; i++) {
  if (i == 19) continue;  //! CONTINUE- перепрыгивает через то число которую мы укажем
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i == 5) break  //! BREAK - Останавливается на том числе которое мы укажем
  console.log(i)
}

//ОБЬЕКТЫ ДОМА УЧИ СУКА



