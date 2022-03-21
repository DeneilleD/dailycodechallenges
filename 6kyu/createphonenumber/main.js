/*  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses

P: parameter takes in an array of only 10 integers ** not including double digits
R: return a string that replicates a phone #, with parenthesis, dashes, and space
E: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
P: create a function that takes in the array . and push the parenthesis(), dash - and space into specific array indexes.  Create a for loop to turn array into a string using toString() method. Return new string with join() method** 


************************* splicing method version :: initial attempt *********************************************/

/* function createPhoneNumber(numbers){
  let newArr = []
  for(let i = 0; i < numbers.length; i++){
    let str = numbers[i].toString()
    newArr.push(str)
  }
  newArr.splice(0, 0,'(')
  newArr.splice(4, 0, ')')
  newArr.splice(5, 0, ' ')
  newArr.splice(9, 0, '-')
  let result = newArr.join('')
  return result
}  
**************************condition statement version*******************************************/

function createPhoneNumber(numbers){
  let newArr = []
  for(let i = 0; i < numbers.length; i++){
    if(i === 0){
      newArr.push('(' + numbers[i])
    }else if(i=== 2){
      newArr.push( numbers[i] + ')' + ' ')
    }else if(i === 6){
      newArr.push('-' + numbers[i])
    }else{ 
      newArr.push(numbers[i]) 
    }
  }
  let result = newArr.join('')  
  console.log(result)
  return result
} 
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
 