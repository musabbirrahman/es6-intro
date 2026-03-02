const king = {name: 'Sabbir', age: 20 , authority: 'The fool'}
// Object.freeze(king)
Object.seal(king)
king.name = 'klein';
delete king.age;
king.kingdom = 'north'
console.log(king)