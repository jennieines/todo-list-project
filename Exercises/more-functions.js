//2. Create a function named "reverseString" that takes two parameters:
//a string containing only letters and spaces (no punctuation or special characters),
//and a boolean indicating whether or not you should preserve capitalization
//and returns a reversed version of that string

function reverseString (myString, presCap) {
    if (!presCap) {
      myString = myString.toLowerCase(); // converts string to lowercase and resaves as myString 
    }

    let reversedString = ""; //'arcs'

    //with loops often helpful to think about the middle step rather than the first or last steps
    for (let i = 0; i < myString.length; i++) {
        let letter = myString.charAt(i);
        reversedString = letter + reversedString; //"b" + "arcs" --> "barcs"
        //console.log("reversedString currently; ", reversedString); // adding this made it run with all words spelled out
    } //reversedString = myString.charAt(i) + reversedString; // could be done with one line

    return reversedString;

}


/*
original string: XXXXXXXX

reversed string: E+L+B+B+A+R+C+S --> ELBBARCS
*/



//Test: Uncomment the following three lines before running your code. Verify the results.
console.log(reverseString("Alan Turing", true) == "gniruT nalA"); //true
console.log(reverseString("California", false) == "ainrofilac"); //true
console.log(reverseString("Racecar", true) == "racecar"); //false

// if we cared about Caps we put false 
// if not then we said true

//3. Write a function named "isPalindrome" that takes a string as input 
//and returns true if the string is a palindrome (reads the same forwards and backwards), 
//and false otherwise. You can assume your string will only contain letters and spaces.
//You can ignore capitalization (e.g. "Racecar" should be considered a palindrome)
//and also ignore spaces (e.g. "taco cat" should be considered a palindrome).
//Consider how your reverseString function above can be used!

function isPalindrome(myString) { //madam, hello
    // 'clean' myString by replacing all spaces with empty string and converting it to lowercase
    myString = myString.replaceAll(" ", "").toLowerCase();

    //create a variable to store the result of calling reverseString on myString
    //pass in false to reverseString because we don't want to care about capitalization
    let myStringReverse = reverseString(myString, false); //madam, olleh
  
    //check if reversed string is equal to orginal
  if (myStringReverse == myString) {
    //if so, return true
    return true;
  } else {
    //if not, return false
    return false;
  }
}

//Test: Uncomment the following four lines before running your code. Verify the results.
console.log(isPalindrome("Racecar") == true); //true
console.log(isPalindrome("madam") == true); //true
console.log(isPalindrome("hello") == false); //true
console.log(isPalindrome("A man a plan a canal Panama") == true); //true
console.log(isPalindrome("T  a Co        C a       T") == true);


