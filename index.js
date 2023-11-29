const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  
  const tutorials1= tutorials.map((string)=>{
  return string.split(' ').map((word)=> word[0].toUpperCase() + word.slice(1)).join(' ')

  })
 
  return tutorials1;
  
}




//const array1 = [1, 4, 9, 16];

// Pass a function to map
//const map1 = array1.map((x) => {



 // console.log(x)
//return x * 3;
//})

//console.log(map1);