function printTriangle (height) {
    let incr = 0;
    let num = 1;
    for(i = 0; i<height; i++){
        for(j=0; j<=incr; j++){
            if(num / 10 < 1){
                process.stdout.write("0" + num + " ");

            } else {
                process.stdout.write("" + num + " ");
            }
            num++;
        }
        incr++;
        console.log("");
    }
}

printTriangle(4);

/* Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz". */
function apakek (penambah){
    for(k = 1; k <= penambah; k++) {
        process.stdout.write("" + k);
        if(k % 3 == 0 && k % 5 == 0) {
            process.stdout.write("FizzBuzz")
        }else if (k % 3 == 0 ) {
            process.stdout.write("Fizz")
        }else if (k % 5 == 0) {
            process.stdout.write("Buzz")
        }else {
            console.log("")
        }
    }
    }
    apakek(15)
    
// Create a function to calculate Body Mass Index (BMI)
let weight = 53;
height = 1.63;

const calculateBMI = (weight, height) => {
  const bmi = weight / (height ** 2);

  if (bmi <= 18.5) {
    return "less weight";
  } else if (bmi > 18.5 && bmi <= 24.9 ) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9 ) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9 ) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

console.log(calculateBMI(weight, height));
console.log("\n");

/* Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only */
const array = [1,2,3,4,5,6,7,8,9,10];

const removeOddNumbers = (array) => {
  return array.filter(arr => arr % 2 == 0);
}

console.log(removeOddNumbers(array));
console.log("\n");

// Write a function to split a string and convert it into an array of words
let text = "Hello World";

const splitText = (text) => {
  return text.split(" ");
}

console.log(splitText(text));