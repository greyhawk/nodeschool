const pets = ['cat', 'dog', 'rat'];
for (let i = 0; i < pets.length; i += 1) {
  pets[i] = pets[i].concat('s');
}
/* eslint-disable no-console */
console.log(pets);
