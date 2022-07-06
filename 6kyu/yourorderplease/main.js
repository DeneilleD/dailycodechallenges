/*    
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

P: paremeters taking in a string with a single number 1-9
R: return string with words ordered by number assigned
E: order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
P: take in a string with number
   1. turn string into an array
   2. sort array with sort()
   3. 


*/ 


function order(words){
  // ...
  let arr = words.split('')
  console.log(arr)

  for(let i = 0; i < arr.length; i++){
    let char = arr[i].split('')
    console.log(char)
    
  }
}

order("is2 Thi1s T4est 3a")
