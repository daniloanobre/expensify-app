// const person = {
//   name: 'Danilo',
//   age: '32',
//   location: {
//     city: 'João Pessoa',
//     temperature: 30
//   }
// };

// const {name: firstName = 'Anonymous', age, location} = person;
// const { city, temperature: temp } = location;

// console.log(`${firstName} is ${age}`);

// console.log(`It is ${temp} in ${city}`);

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Byan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);
// ------------------------------------------------------------------------------------
// const universities = [{ name: "UFPB", professors: 401, city: "João Pessoa" }, { name: "UFCG", Professors: 120, city: "Campina Grande" }]
// const [a, b] = universities;
// const {name, professors: teachers = 0, city } = b;

// console.log(`My university ${name} has ${teachers} and it is located at ${city} `);
// ------------------------------------------------------------------------------------
// const address = ['João Pessoa', 'Paraiba', 'Rua Golfo da Califórnia', '65'];
// const [, state, street, ] = address;
// console.log(`You are in ${state} at ${street}.`);
// ------------------------------------------------------------------------------------
const item = ['Coffee (hot)', 'R$2,00', 'R$2,50', 'R$2,75'];

const [itemName, , mediumPrice, ] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
