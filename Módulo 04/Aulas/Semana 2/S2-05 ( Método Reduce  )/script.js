const persons = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 },
    { name: 'Alice', age: 35 }
];
const totalAges = persons.reduce((accumulator, person) => {
    accumulator += person.age;
    console.log(person.name)
    console.log(person.age)
    return accumulator;
},0);
console.log(totalAges);