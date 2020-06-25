function challengeBanner(n){
    console.log(`********** Challenge ${n} **********`)
}

challengeBanner(1)

function vowels(word){
    let letter = 0
      while(letter <= word.length){
        if(word[letter] === 'a'|| word[letter] === 'e'|| word[letter] === 'i' || word[letter] === 'o' || word[letter] === 'u'){
          console.log(word[letter])
        }
        letter++;
      }
  }
  console.log(vowels('the course is getting hard'))

  challengeBanner(2)





  challengeBanner(3)

  function thirdLetters(word){
    let length = word.length;
    let start = 2;
      while(start < length){
        console.log(word[start]);
        start = start + 3
      }
  }
  console.log (thirdLetters('I am the alfalfa and the omelette.'))


challengeBanner(4)

function fourAfter(word, start){
    let end = start + 4
    let beginning = start + 0 
    while(beginning < end){
      console.log(word[beginning]);
      beginning = beginning + 1;
    }
  }
  

  console.log(fourAfter(`Oh hi, I didn't see you there. Welcome.`, 36))








challengeBanner(5)

function uu(word){
    let start = 0;
    let character = word[start]
    let end = word.length;
    while(start < end){
      if(character.includes('u') === true){
        console.log(character)
      }
      start++;
    }
  }
  
