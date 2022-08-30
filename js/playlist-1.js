/*const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight'
];

function createListItem(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${ arr[i] }</li>`;
  }
  return items;
}

document.querySelector('main').innerHTML = `
<ol>
${createListItem(playlist)}
</ol>
`*/


/*

const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight'
];

function createListItem(arr){

  let item = '';
  for(let i=0; i<arr.length; i++){
    item+=`<li>${arr[i]}</li>`;
  }
  return item;

}

document.querySelector('main').innerHTML = `
  <ol>
  ${createListItem(playlist)}
  </ol>
`

*/




/*
const listaPesama = ['Nije mene duso ubilo','Nagovori', 'Trezan', 'Pijem na eks', 'Vidovdan'];
let stavka = '';

for(let i = 0; i < listaPesama.length; i++){
  console.log(listaPesama[i]);
  stavka += `<li>${listaPesama[i]}</li>`;
  
}

document.querySelector('main').innerHTML = `<ol>${stavka}</ol>`

*/

const listaPesama = ['Nije mene duso ubilo','Nagovori', 'Trezan', 'Pijem na eks', 'Vidovdan'];

function proba(arr){
  let pesma = '';

  for(let i = 0; i < arr.length; i++){
    pesma += `<li>${arr[i]}</li>`;
  
  }
  return pesma;
  
}

document.querySelector('main').innerHTML = `<ol>${proba(listaPesama)}</ol>`;



/*
https://teamtreehouse.com/library/javascript-arrays/useful-array-methods#notes


Set the conditional statement to run as long as the return value of indexOf() is not equal to -1.

const people = [ 'Maria', 'Alyssa', 'Toni', 'Lee', 'Reggie' ];
let personIndex = people.indexOf('Maria');  // 0

if ( personIndex !== -1) { // it's ok because we're checking for -1 only
 console.log(`${people[personIndex]} is in the array at index ${personIndex}.`);
}

*/
