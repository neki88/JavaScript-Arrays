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



