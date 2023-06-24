/*   Complete the solution so that the function will break up camel casing, using a space between words.s
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""        =>  ""
 */

/* bug fix*/ 
function solution(string) {
  let arr = string.split('')
  for(let i = 0; i < arr.length; i++){
      if(arr[i].toUpperCase() === arr[i]){
          arr.splice(i, 0, ' ')
          break
      }
  }  
  return arr.join('')
}

