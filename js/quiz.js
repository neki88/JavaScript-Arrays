
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
/*My way 
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

  */

  /*HIs way */

  const questions = [ 
    ['How many planets are in the Solar System?', '8'],
    ['How many continents are there?', '7'],
    ['How many legs does an insect have?', '6'],
    ['What year was JavaScript created?', '1995']  
  ];

  const correcAnswers = [  ];
  const wrongAnswers = [  ];

  let score = 0;
  let li = '';
  let lil = '';

 
    for(let i = 0; i<questions.length; i++){
      let question = questions[i][0];
      let answer = questions[i][1];
      let response = prompt(question);

      if(response === answer){
        score++;
        correcAnswers.push(question);
        li += `<li>${correcAnswers[i]}</li>`;
      } else {
        wrongAnswers.push(question);
        lil += `<li>${wrongAnswers[i]}</li>`;
      }
    }

    function createListItems(arr) {
      let items = '';
      for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
      }
      return items;
    }
    


let html = `

<h1>Broj tacnih ogovora je ${score}</h1>
<p>Ovo su oni</p>
<ol>${createListItems(correcAnswers)}</ol>
<p>Ovo su pogresni</p>
<ol>${createListItems(wrongAnswers)}</ol>

`;

document.querySelector('main').innerHTML = html;
