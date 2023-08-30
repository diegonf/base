// Set - lista valores únicos
/*
  Methods:
    - new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
    - set.add(value) – adds a value, returns the set itself.
    - set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
    - set.has(value) – returns true if the value exists in the set, otherwise false.
    - set.clear() – removes everything from the set.
    - set.size – is the elements count.
  
    Para Iteração
      - set.keys() – returns an iterable object for values,
      - set.values() – same as set.keys(), for compatibility with Map,
      - set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.
*/

// Declaração
const set1 = new Set(['Diego', 'Lucas', 'Aline']);
console.log(set1); // Set { 'Diego', 'Lucas', 'Aline' }

const pessoa1 = { nome: 'Diego' };
const pessoa2 = { nome: 'Lucas' };
const pessoa3 = { nome: 'Aline' };
const set2 = new Set();
set2.add(pessoa1)
.add(pessoa2)
.add(pessoa3)
.add(pessoa2) // não faz nada, pois pessoa2 já existe no Set
.add(pessoa1) // não faz nada, pois pessoa1 já existe no Set

console.log(set2.size) // 3
console.log(set2); // Set { { nome: 'Diego' }, { nome: 'Lucas' }, { nome: 'Aline' } }

// Iteração
let set3 = new Set(["oranges", "apples", "bananas"]);

for (let value of set3) console.log(value); // oranges, apples, bananas

set3.forEach((value, valueAgain, set) => {
  console.log(value); // oranges, apples, bananas
});



// ### Tasks
// 1
function unique(arr) {
  return [...new Set(arr)];
}

const objT1 = {nome: 'Diego'}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O", true, true, {nome: 'Diego'}, objT1, objT1 
];

console.log( unique(values) ); // [ 'Hare', 'Krishna', ':-O', true, { nome: 'Diego' }, { nome: 'Diego' } ]

