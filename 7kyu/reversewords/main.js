/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained  */


//P:string , account the spaces in the string
//R: sentence with each word reversed
//E:      /*"This is an example!" ==> "sihT si na !elpmaxe"
          /*"double  spaces"      ==> "elbuod  secaps"*/
//P: /*create a function taking a string, including spaces
    /*return the string reversed we can create a variable for the nw words and implement the 
    methods reverse, join and split to satusfy reverse*/

    function reverseWords(str) {
      return str.split("").reverse().join("").split(" ").reverse().join(" ");
      }