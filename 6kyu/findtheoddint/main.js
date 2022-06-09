/*
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
   */  


// P: Array of Integers
// R: Return how many times the odd numbers show up in the array
// E:[1,1,2] should return 2, because it occurs 1 time (which is odd)
// P: for loop to iterate through the array elements and see which ones are odd, but also see how many times they show up
//     in order to check if they are odd or not - do % 2 = 0.
// */

function findOdd (A) {  
    
  for (let i = 0; i <= A.length - 1; i += 1) {   
    
    let elmLength = A.filter((elm) => elm === A[i]).length; 
    
    if (elmLength % 2 !== 0) {  
      return A[i];
    }
  }
}