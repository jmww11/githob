// //exercise1
// let arrObject = [];
// let arrInput = [
//     ["fadlan", "fadlan@gmail.com", 20, 95],
//     ["dega", "dega@gmail.com", 21, 90],
//     ["ganen", "ganen@gmail.com", 22, 90],
//     ["idos", "idos@gmail.com", 25, 70]
// ]
// class person {
//     name;
//     email;
//     age;
//     score;

//     constructor(name, email, age, score) {
//         this.name = name
//         this.email = email
//         this.age = age
//         this.score = score
//     }
// }
// for (i = 0; i < arrInput.length; i++) {
//     let newPerson = new person (
//         arrInput[i][0],
//         arrInput[i][1],
//         arrInput[i][2],
//         arrInput[i][3]
//     )
//     arrObject.push(newPerson)
// } 
// function statisticPerson (arr) {
//     let averageScore = 0;
//     let averageAge = 0;
//     let maxAge = 0;
//     let minAge = 0;
//     let maxScore = 0;
//     let minScore = 0;
//     for (i = 0; i < arr.length; i++){
//         if (arr[i].score > maxScore) {
//             maxScore = arr[i].score
//         }
//         if (arr[i].score > minScore) {
//             minScore = arr[i].score
//         }
//         averageScore += arr[i].score
//     }
//     averageScore =  averageScore/arr.length

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].age > maxAge) {
//             maxAge = arr[i].age
//         }
//         if (arr[i].age > minAge) {
//             minAge = arr[i].age
//         }
//         averageAge += arr[i].age
//     }
//     averageAge = averageAge/arr.length
//     return {maxAge : maxAge, minAge : minAge, averageAge : averageAge, 
//         maxScore : maxScore, minScore : minScore, averageScore : averageScore}
// }
// result = statisticPerson(arrObject)
// console.log(result)

//exercise2
class product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
}

class transaction {
    constructor (total)
    this.total = 0;

   class product {
       constructor (allProductData,quantities)
       this.allProductData = [];
       this.quantities = [];
    }
}

addToCart(product, qty) {
    this.products.push(product);
    this.quantities.push(qty);
    this.total += product.price * qty;
}

showTotal() {
    console.log("Total:", this.total);
}

checkout() {
    const transactionData = {
        total: this.total,
        products: this.products,
        quantities: this.quantities
    };
    return transactionData;
}
}

