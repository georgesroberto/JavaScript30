const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hello World");

// Interpolated
console.log("I am a %s string", 'small');
console.log(`I am an ${dogs}`);

// Styled
console.log("%c Styled console text", 'color:red');

// warning!
console.warn("Ha get warned");

// Error :|
console.error("Here we go again")

// Info
console.info("Understand us");

// Testing
const p = document.querySelector('p')

console.assert(p.classList.contains('ouch'), 'Not found')

// clearing
console.clear()

// Viewing DOM Elements
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years old`)
})
console.clear();

// counting
console.count('was');
console.count('was');

//timing
console.time('fetch-time')
fetch('https://api.github.com/users/georgesroberto')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetch-time')
        //console.log(data)
        console.table(data)
    })

