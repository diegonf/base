// Map - lista chave => valor
/*
  Methods and properties are:
    - new Map() – creates the map.
    - map.set(key, value) – stores the value by the key.
    - map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    - map.has(key) – returns true if the key exists, false otherwise.
    - map.delete(key) – removes the element (the key/value pair) by the key.
    - map.clear() – removes everything from the map.
    - map.size – returns the current element count.

  For looping over a map, there are 3 methods:
    - map.keys() – returns an iterable for keys,
    - map.values() – returns an iterable for values,
    - map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/

// Declaração
const map1 = new Map();
map1.set('nome', 'Diego');
map1.set('idade', 32);

const map2 = new Map();
map2.set('nome', 'Diego')
  .set('idade', 32); // encadeando os sets

const map3 = new Map([['nome', 'Diego'], ['idade', 32]]); // passando array (ou qlq iterável) na declaração

const obj4 = { nome: 'Diego', idade: 32 }
const map4 = new Map(Object.entries(obj4));

console.log(map1);
console.log(map2);
console.log(map3);
console.log(map4); // Map { 'nome' => 'Diego', 'idade' => 32 }

// Tipos de dados que podem ser uma chave (key)
const objAsKey = { nome: 'oi' }
const cadastro = new Map([
  ['nome', 'Diego'],
  ['Nome', 'Diego2'],
  [true, 'boolean pode ser key'],
  [NaN, 'Outra key'],
  [32, 'minha idade'],
  [objAsKey, 1] // até mesmo um objeto pode ser usado como key de um Map
]);
console.log(cadastro)

// Pegando o dado
console.log(cadastro.get('nome')) // 'Diego'

// Iterando o map
const mapIt = new Map([['nome', 'Diego'], ['sexo', 'masculino'], ['idade', 32]]);

for (let keys of mapIt.keys()) { console.log(keys); }  // nome, sexo, idade

for (let value of mapIt.values()) { console.log(value); }   // Diego, masculino, 32

for (let entry of mapIt) { console.log(entry); }   // ['nome', 'Diego'], ['sexo', 'masculino'], ['idade', 32]
for (let entry of mapIt.entries()) { console.log(entry); } // mesmo do acima

mapIt.forEach( (value, key, map) => {
  console.log(`${key}: ${value}`); 
});

// Convertendo o map para objeto
const map5 = new Map([['nome', 'Diego'], ['idade', 32]]);
const obj5 = Object.fromEntries(map5); // ou map5.entries()
console.log(obj5);

// ### Tasks
// Write a function aclean(arr) that returns an array cleaned from anagrams.
let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const aclean = (words) => {
  const map = new Map();
  words.forEach(word => {
    sortedWord = word.toLowerCase().split('').sort().join('');
    map.set(sortedWord, word);
  });
  return [...map.values()];
}
console.log( aclean(arr2) ); // "nap,teachers,ear" or "PAN,cheaters,era"
