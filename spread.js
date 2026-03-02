const numbers = [19, 38, 49]

function sum(a, b, c){
    return a+b+c
}

const result = sum(...numbers);
console.log(result)