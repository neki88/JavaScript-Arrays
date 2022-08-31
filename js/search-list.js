/*const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if (inStock.includes(search.toLocaleLowerCase())) {
  message = `Yes, we have <strong>${search}</strong>.
  <br>it's #${inStock.indexOf(search.toLocaleLowerCase()) + 1} on the menu
`;
} else if (!search) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;  
}

document.querySelector('main').innerHTML = `<p> ${message} </p>`;*/



/*
const naZalihama = ['spanać', 'mrkva', 'jaja', 'borovnice', 'mleko', 'supa'];

let unos = prompt('Koji artikal vas zanima?');
let porukaKorisniku;

if(!unos){
  porukaKorisniku =  `Postovani evo sta imamo: ${naZalihama.join(', ')}!`
}
else if(naZalihama.includes(unos.toLowerCase())){
  porukaKorisniku = `Dragi nas imamo ti ${unos} na zalihamapod rednim brojem ${naZalihama.indexOf(unos.toLowerCase()) + 1}, poyy!`
} else{
  porukaKorisniku = `Mrka kapa, nema ${unos}`
}

document.querySelector('main').innerHTML = `<h1>${porukaKorisniku}</h1>`

*/





const zalihe = ['hleb','jaja', 'mleko', 'sir', 'salama'];

const pitanje = prompt('Koji proizvod trazite?');
let tekst = '';
if(!pitanje){
  tekst += `<h3>Molim unesite trazeni proizvod</h3>`
}
else if(zalihe.includes(pitanje.toLowerCase())){
  tekst += `<h2>Trazeni proizvod <strong>${pitanje}</strong> je na stanju pod rednim brojem #${zalihe.indexOf(pitanje) + 1}</h2>`
} else{
  tekst += `<h2>Legendo <strong>${pitanje}</strong> ne postoji, ali evo sta ima:<br> ${zalihe.join(', ')}</h2>`
}

console.log(tekst)

document.querySelector('main').innerHTML = tekst;

/* https://teamtreehouse.com/library/javascript-arrays/locate-and-join-array-elements */






