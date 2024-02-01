/* MY FIRST GIT PROJECT */

console.log("Hello World")
console.log("Hello dek")

//1

let angka = 9
for (let i = 1; i <= angka; i++) {
    console.log (`${angka} x ${i} = ${angka * i}`);
}


//2

let nama1 = "ganen";
let res = "";
for (let i = nama1.length - 1; i >= 0; i--) {
    res = res + nama1[i]
}
console.log (res)

//3
let numKm = 1; // pembagi
let numCm = 1000; // pembagi
let num = 100_000; // cm
let satuan = "cm";

if (satuan == "cm") {
  num = num / numCm + " km";
}

if (satuan == "km") {
  num = num / numKm + " cm";
}

console.log(num);

// 4
// 1000 > 1.000 > Rp.1.000,00 
// what we need is to add "," in between 1 and 0000
let price = 1000;
let rupiahIndo = Intl.NumberFormat('id-ID',{
     style: 'decimal'}). format(price);
console.log(`Rp.${rupiahIndo},00`)



//5
let string1 = "Hello World"
let string2 = string1.replace(/e/g, '');

console.log(string2)

//6
// hello world > split into array word "hello", "world"
// turn every first of the award word into Uppercase
// reassambled the array into a string
let kalimat1 = "hello world"
let huruf1 = kalimat1.split(" ");

for (let z = 0; z < huruf1.length; z++) {
    huruf1[z] = huruf1[z][0].toUpperCase() + huruf1[z].substring(1);
}
console.log(huruf1.join(" "));

//7 
/* "lewandowski" is a whole string so we need to turn in into substring first
after the string turns into substrings = "l", "e", "w", etc
we reverse the order so it will become "i", "k", "s", "w", "o"
then we can reassemble the subs into string by using JOIN commands.
*/
let stringSatu = "lewandowski"
let revString = stringSatu.split('').reverse().join('')

console.log (revString)


//8
let str = "QUiCk bRoWn fOx";
let result2 = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] == str[i].toLowerCase()) {
    result2 += str[i].toUpperCase();
  } else if (str[i] == str[i].toUpperCase()) {
    result2 += str[i].toLowerCase();
  } else {
    result2 += str[i];
  }
}

console.log(result2);

//9

let num1 = 89
let num2 = 324

if (num1 >= num2) {
    console.log(num1 "is bigger than" num2)
} else {console.log(num1 "is smaller than" num2)
}

//10


//11

//12
let kalimatSatu = "An apple a day keeps the doctor away"
let kalimatBaru = kalimatSatu.replace(/a/gi, '*')

console.log (kalimatBaru)
