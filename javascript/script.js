/*const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)*/

//I believe it will just log the first car in the array 'cars' then the second log will do the second car in the array because of the ,
//which causes it to skip the first index in the array.

//Did run the code and check and I was right about this one.

/*const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);*/

//I believe this one will throw an error for the first log because it changed the name
//when it didn't need to and the second log will return 'Elon'

//Did run and check the code and found that it just ran the error without displaying
//the name at all.

/*
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
*/

//I dont think this one will work because there isnt a 'password' inside the 'person' array.

//Did run and check this code and found that I was right aobut the hashedPassword but didnt think
//about the fact the first log would just return the password that was defined.

/*
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
*/

//I think this one is comparing whether these numbers match each other and the first log will be false and the second will be true.

//Did run and check the code and was correct about this one.

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//key is 'value'
//secondKey is [1, 5, 1, 8, 3, 3]
//secondKey[0] is 1
//willThisWork is 5






