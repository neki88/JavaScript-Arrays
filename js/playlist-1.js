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





const listaPesama = ['Nije mene duso ubilo','Nagovori', 'Trezan', 'Pijem na eks', 'Vidovdan'];
let stavka = '';

for(let i = 0; i < listaPesama.length; i++){
  console.log(listaPesama[i]);
  stavka += `<li>${listaPesama[i]}</li>`;
  
}

document.querySelector('main').innerHTML = `<ol>${stavka}</ol>`
