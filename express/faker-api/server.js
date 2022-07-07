const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 8000; //Line 3
const faker = require("faker");

const createUser = () => {
  const newUser = {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: faker.address.streetAddress() + faker.address.city()
    + faker.address.state() + faker.address.zipCode() + 
    faker.address.country()
  };
  return newCompany;
};

const newFakeUser = createUser();
console.log(newFakeUser);

const newFakeCompany = createCompany();
console.log(newFakeCompany);

// This displays message that the server running and listening to specified port
app.listen(8000, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11