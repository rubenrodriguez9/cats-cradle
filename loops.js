function challengeBanner(n){
    console.log(`********** Challenge ${n} **********`)
}

challengeBanner(1)
function voweled(arr){
  let vowels = 'aeiou';
  let i = 0;
  while(i < arr.length){
    if(vowels.includes(arr[i])) {
      console.log(arr[i]);
    }
    i++
  }
  }
  
  console.log(voweled("Regular expressions are for term 2."))
  
  challengeBanner(2)

  function first5Vowels(arr){
    let vowels = 'aeiou';
    let i = 0;
    let count = 0;
    while(i < arr.length && count < 5){
      if(vowels.includes(arr[i])) {
        console.log(arr[i]);
        count++
      }
      i++
    }
    }
    
    console.log(first5Vowels("Regular expressions are for term 2."))
    
 

  challengeBanner(3)
  function everyThird(str){
    let i = 0;
    while(i < str.length){
      console.log(str[i])
      i = i + 3;
    }
  }

  console.log(everyThird('I am the alfalfa and the omelette.'))

challengeBanner(4)

function first4After(str, start){
  let count = 0;
  let i = start;
  while(i < str.length) {
    if(count < 4){
      console.log(str[i])
      count++
    }
    i++
  }
}
console.log(first4After(`Oh hi, I didn't see you there. Welcome.`, 4))
console.log(first4After(`Oh hi, I didn't see you there. Welcome.`, 36))
challengeBanner(5)

function everyU(str){
  let i = 0
  while(i < str.length) {
    if(str[i] === 'u'){
    console.log(i);
    }
    i++
  }
  }

console.log(everyU(`You picked the wrong house, bub.`))




challengeBanner(6)
function firstU(str){
  let i = 0
  while(i < str.length) {
    if(str[i] === 'u'){
    console.log(i);
    return
    }
    i++
  }
  }
  console.log(firstU(`You picked the wrong house, bub.`))
challengeBanner(7)

function UdontExist(str){
  let i = 0
  let found = false;
  while(i < str.length) {
    if(str[i] === 'u' && found === false){
      console.log(i)
      found = true;
    }
    i++
  }
  if(found === false){
    return -1
  }
}

console.log(UdontExist(`You picked the wrong house, bub.`))
console.log(UdontExist(`I am Canadian`))
