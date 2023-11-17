 // start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let named = "Joe";
let name2 = named;

console.log(named, name2);
name2 = "Roberto"
console.log(named, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;
console.log(players, team);
team[2] = "Joe"
console.log(players, team);

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// or create a new array and concat the old one in
const team2 = players.slice()
team2[1] = "Dev";
console.log(team, team2)
const team3 = [].concat(players);
team3[1] = "Dev";
console.log(players, team3);

// or use the new ES6 Spread
const team4 = [...players]; 
team4[1] = "Happy hacking";
console.log(team4);
const team5 = Array.from(players)
console.log(team5);

// now when we update it, the original one isn't changed
console.clear();
// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:

console.log(person)
const captain = person;
captain.age = 99
console.log(captain, person)
// how do we take a copy instead?

const capt2 = {...person}
const cpCaptain = Object.assign({}, person, {age:90})
console.log(person, cpCaptain, capt2);

console.clear();

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
 
const joe = {
    name: "Joe",
    age: 22,
    social: {
        fb:"Roberto",
        gb:"georgesroberto"
    }
};

const dev = Object.assign({}, joe);
const dev2 = JSON.parse(JSON.stringify(dev)); 

dev2.social.fb = "georges"
console.log(dev, dev2)
