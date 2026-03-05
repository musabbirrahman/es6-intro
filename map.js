const numbers = [1,2,3,4,5];
const doubleIt = num => num * 2;
const double = numbers.map(doubleIt)
console.log(double)

const frnds = ['datu', 'satu', 'latu', 'atu'];
const firstLetter = frnds.map(frnd => frnd[0]);
console.log(firstLetter)

const products = [
    {name: 'samsung' , price: 20000},
    {name: 'samsung' , price: 25000},
    {name: 'samsung' , price: 30000}
]

const price = products.map(product => product.price);
console.log(price)