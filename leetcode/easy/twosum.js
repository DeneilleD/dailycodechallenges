/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*    

P: parameter of numbers, 1st ( array of int )  2nd (target #)
R: function will return the indexes of the two integers 
E: 
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
P: create a function that will take an array of integers and return 2 indexes 
(condition) of the numbers, that when added together, will ammount to the targt number of the intial 2nd parameter.


forLoop
if Condtion
variable for result set equal to target



*/
let twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
   for(let j = i + 1; j < nums.length; j++){
    if( nums[i] +  nums[j] === target){
      return [i , j]
    }
   }
  }
};