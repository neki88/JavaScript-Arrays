
/*
const QandA = [
    ['Odakle sam ja?', 'Da li si me volela il nisi?',  'Ko to kaze, ko to laze?', 'Cija frula?', 'Jel Sarajevo gde je nekad bilo?'],
    ['balkan', 'jesam', 'dusmani', 'sina', 'jeste']
]

function quiz(arr) {
    let score = 0;

    for(let i = 0; i < arr[0].length; i++){
        let userAnswer = prompt(arr[0][i]);
        console.log(userAnswer);
        if(userAnswer.toLowerCase() === arr[1][i]){
            score++;
        }
    }

    console.log(score);
    return score;
    
}

document.querySelector('main').innerHTML = `<h1>Broj tacnih odgovora je ${quiz(QandA)}!</h1>`;
*/

const questions = [ 
    ['How many planets are in the Solar System?', '8'],
    ['How many continents are there?', '7'],
    ['How many legs does an insect have?', '6'],
    ['What year was JavaScript created?', '1995']  
  ];

  function kviz(arr){
    let score = 0;
    for(let i = 0; i < arr.length; i++){
      if(prompt(arr[i][0]) === arr[i][1]){
        score++;
      }
    }
    return score;
  }

  document.querySelector('main').innerHTML = `<h1>Tacnih odgovora ima ${kviz(questions)}</h1>`

  



