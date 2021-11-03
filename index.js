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

let titleCased = () => {

return tutorials.map(tutorials => {
  let splitTutorials = tutorials.split(" ")
  console.log(splitTutorials)
  for(let i = 0; i < splitTutorials.length; i++){
  splitTutorials[i] = splitTutorials[i][0].toUpperCase() 
        + splitTutorials[i].substring(1);
        console.log(splitTutorials)
}
  return splitTutorials.join(" ")})
  console.log(splitTutorials)
}



//console.log(tutorials)
//console.log(splitTutorials)
  
  
//return each word with a capital letter in the front splitTutorial[0].toUpperCase() + splitTutorial[0].substr(1);


//let test = splitTutorials.join(' ');





  // const capitalTutorial = splitTutorials.map(word => { return word[0].toUpperCase() +word.substr(1);
//  splitTutorials.map((word) => word[0].toUpperCase() + word.substring(1))
//  . join('')
// console.log(capitalTutorial)
  // })
   
   
    // join back together .join(" ")


   
