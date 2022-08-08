/*
You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.


P: take in an array as objects 
R:return an integer (array.length) 
E:    
        var list1 = [
          { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
          { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
          { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
          { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
        ];
        ===> [1]

P: create a function that will spit out the number of event goers from Europe who use javaScript if none return 0. 


var for result => var.length
*/


function countDevelopers(list) {
  // your awesome code here :)
  let counter = 0
  for (let i = 0; i < list.length; i++){
   if(list[i].continent  === 'Europe' && list[i].language === 'JavaScript'){
     counter++
   }
  }
  return counter
}