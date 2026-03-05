const students = [
    {name: 'datu', age: 20},
    {name: 'datu', age: 25},
    {name: 'satu', age: 23},
    {name: 'datu', age: 26},
    {name: 'datu', age: 22},
];

const student = students.find(std => std.name === 'satu')
console.log(student)