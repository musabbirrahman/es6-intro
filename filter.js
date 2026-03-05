const numbers = [1, 2, 3, 4, 5, 6]

const evenNumber = numbers.filter(number => number % 2 === 0);
console.log(evenNumber);

const students = [
    {name: 'datu', age: 20},
    {name: 'datu', age: 25},
    {name: 'satu', age: 23},
    {name: 'datu', age: 26},
    {name: 'datu', age: 22},
]

const sFriends = students.filter(std => std.name[0] == 's')
console.log(sFriends)
const youngerStudents = students.filter(std => std.age < 25);
console.log(youngerStudents)