// Email validator
let emailInput = prompt('Enter an email');
let symIndex = emailInput.indexOf('@');
let hasSymb = symIndex !== -1;


let dotEnd = (emailInput[emailInput.length - 3] === '.' || emailInput[emailInput.length - 4] === '.');
if(hasSymb && dotEnd){
    alert('Valid Email');
}else{
    alert('Invalid Email');
}

// Capitaliztion
let sentence = prompt("Enter a sentence:"); 

let words = sentence.split(" "); 
let result = "";

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    
    let firstChar = word[0].toUpperCase();      
    let rest = word.slice(1);               
    let capitalized = firstChar + rest;          

    result += capitalized + " ";                
}

alert(result); 

// remove duplicates
let originalArr = [1, 2, 3, 2, 4, 1, 5, 3];
let uniqueArr = [];

for (let i = 0; i < originalArr.length; i++) {
    let value = originalArr[i];
    let alreadyExists = false;

    for (let j = 0; j < uniqueArr.length; j++) {
        if (uniqueArr[j] === value) {
            alreadyExists = true;
            break;
        }
    }

    if (!alreadyExists) {
        uniqueArr.push(value);
    }
}

console.log("Original Array:", originalArr);
console.log("Unique Values:", uniqueArr);


// words longer than five
let sentLine = "my name is maryam and i am 13 years old . i love coding . i like to watch informative video . i have used javascript in my tasks .";
let sentArr = sentLine.split(" ");

let flag = false;

for (let i = 0; i < sentArr.length; i++) {
    if (sentArr[i].length > 5) {
        console.log(sentArr[i]);
        flag = true;
        
    }
}

if (!flag) {
    console.log("Not found.");
}

// search
let names = ['haadi', 'bisma', 'ali', 'osman', 'maryam', 'rizwan'];
let userSearch = prompt('Search a name');
let convertSearch = userSearch.toLowerCase();
let found = false;
 for(i=0; i<names.length; i++){
    if(convertSearch == names[i]){
        alert('Found');
        found = true;
    }
 }if(!found){
    alert('Not found');
 }

// sum of all numbers
let numbers = [1, 2,5 , 10, 4, 6, 2];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

alert('Sum of all numbers in array: ' + sum);

// palindrome
let word = prompt("Enter a word:");
let reverse = "";

for (let i = word.length - 1; i >= 0; i--) {
    reverse = reverse + word[i];
}

if (word === reverse) {
    alert("Palindrome Word");
} else {
    alert("Not a Palindrome");
}
