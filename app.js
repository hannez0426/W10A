// Add two numbers together and multiply the result by 5
function calculateNumbers(num1, num2) {
    let result = (num1 + num2) * 5;
    return result;
}

// Test Function 1 three times
console.log(calculateNumbers(2, 3));
console.log(calculateNumbers(5, 10));
console.log(calculateNumbers(4, 6));


// Return true if the string has more than 10 characters. Otherwise, return false
function checkString(text) {
    if (text.length > 10) {
        return true;
    } else {
        return false;
    }
}

// Test Function 2 three times
console.log(checkString("Hello"));
console.log(checkString("JavaScript"));
console.log(checkString("Learning JavaScript"));


// Find the first string in an array that starts with "ph"
function findPH(words) {
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith("ph")) {
            return words[i];
        }
    }

    // Return undefined if no word starts with "ph"
    return undefined;
}

// Test Function 3 three times
console.log(findPH(["apple", "phone", "banana"]));
console.log(findPH(["cat", "photo", "dog"]));
console.log(findPH(["book", "pen", "physics"]));
