//ROAD MAP DAY 4
//Q1.1
//Do the below programs in anonymous function
//Print odd numbers in an array
var Result = [];
function Odd(arr) {
    for (var i =0; i<arr.length;i++) {
        if (arr[i] % 2 !== 0) {
            Result.push(arr[i])
    };
}
return Result
}
console.log(Odd([1,2,3,4,5,6,7,8,9,10]))

//Convert all the strings to title caps in a string array
var strings = ["hello", "world", "how", "are", "you"];
var titleCaps = Caps(strings);
function Caps(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
}
console.log(titleCaps);

//Sum of all numbers in an array

var numbers = [1, 2, 3, 4, 5,9,6,2];
var sum = sumArray(numbers);
function sumArray(arr) {
    return arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
}
console.log(sum);

//Return all the prime numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primes = PrimeNumbers(numbers);
function PrimeNumbers(arr) {
    return arr.filter(function(num) {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
}
console.log(primes);

//Return all the palindromes in an array

var words = ["level", "hello", "radar", "world", "deified"];
var palindromes = Palindromes(words);
function Palindromes(arr) {
    return arr.filter(function(str) {
        var reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    });
}
console.log(palindromes);


//Return median of two sorted arrays of the same size.

var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6];
var median = medianOfArrays(arr1, arr2);
function medianOfArrays(arr1, arr2) {
    var mergedArray = arr1.concat(arr2).sort(function(a, b) {
        return a - b;
    });
    var length = mergedArray.length;
    if (length % 2 !== 0) {
        return mergedArray[Math.floor(length / 2)];
    } else {
        var midIndex = length / 2;
        return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    }
}
console.log(median);


//Remove duplicates from an array

var numbers = [1, 2, 3, 3, 4, 4, 5, 5];
var uniqueNumbers = removeDuplicates(numbers);
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(uniqueNumbers);


//Rotate an array by k times

var numbers = [1, 2, 3, 4, 5];
var rotated = rotateArray(numbers, 2);
function rotateArray(arr, k) {
    var rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
}
console.log(rotated);


//Q 1.2
//Do the below programs in IIFY function
//Print odd numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function printOddNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) console.log(arr[i]);
    }
}
printOddNumbers(numbers);


//Convert all the strings to title caps in a string array

var strings = ["hello", "world", "how", "are", "you"];
var titleCaps = convertToTitleCaps(strings);
function convertToTitleCaps(arr) {
    var titleCaps = [];
    for (var i = 0; i < arr.length; i++) {
        titleCaps.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    return titleCaps;
}
console.log(titleCaps);


//Sum of all numbers in an array

var numbers = [1, 2, 3, 4, 5];
var sum = sumArray(numbers);
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum);


//Return all the prime numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primes = getPrimeNumbers(numbers);
function getPrimeNumbers(arr) {
    var primes = [];
    for (var i = 0; i < arr.length; i++) {
        var isPrime = true;
        for (var j = 2; j <= Math.sqrt(arr[i]); j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (arr[i] > 1 && isPrime) primes.push(arr[i]);
    }
    return primes;
}
console.log(primes);


//Return all the palindromes in an array

var words = ["level", "hello", "radar", "world", "deified"];
var palindromes = getPalindromes(words);
function getPalindromes(arr) {
    var palindromes = [];
    for (var i = 0; i < arr.length; i++) {
        var reversedStr = arr[i].split('').reverse().join('');
        if (arr[i] === reversedStr) palindromes.push(arr[i]);
    }
    return palindromes;
}
console.log(palindromes);


//Return median of two sorted arrays of the same size.

var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6];
var median = medianOfArrays(arr1, arr2);
function medianOfArrays(arr1, arr2) {
    var mergedArray = arr1.concat(arr2).sort(function(a, b) {
        return a - b;
    });
    var length = mergedArray.length;
    var median;
    if (length % 2 !== 0) {
        median = mergedArray[Math.floor(length / 2)];
    } else {
        var midIndex = length / 2;
        median = (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    }
    return median;
}
console.log(median);


//Remove duplicates from an array

var numbers = [1, 2, 3, 3, 4, 4, 5, 5];
var uniqueNumbers = removeDuplicates(numbers);
function removeDuplicates(arr) {
    var uniqueNumbers = [];
    for (var i = 0; i < arr.length; i++) {
        if (uniqueNumbers.indexOf(arr[i]) === -1) {
            uniqueNumbers.push(arr[i]);
        }
    }
    return uniqueNumbers;
}
console.log(uniqueNumbers);


//Rotate an array by k times

var numbers = [1, 2, 3, 4, 5];
var rotated = rotateArray(numbers, 2);
function rotateArray(arr, k) {
    var rotations = k % arr.length;
    var rotated = [];
    for (var i = 0; i < arr.length; i++) {
        var newIndex = (i + rotations) % arr.length;
        rotated[newIndex] = arr[i];
    }
    return rotated;
}
console.log(rotated);


//Q 2.0
//Do the below programs in ARROW functions
//Print odd numbers in an array

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function printOddNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) console.log(arr[i]);
    }
}
printOddNumbers(number);


//Convert all the strings to title caps in a string array

var stringss = ["hello", "world", "how", "are", "you"];

var convertToTitleCapss = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
var titleCapss = convertToTitleCapss(stringss);
console.log(titleCapss);


//Sum of all numbers in an array

var numbersss = [1, 2, 3, 4, 5];
var sums = sumArray(numbersss);
function sumArray(arr) {
    var sums = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sums;
}
console.log(sums);


//Return all the prime numbers in an array

var numberssss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getPrimeNumbersss(arr) {
    var primess = [];
    for (var i = 0; i < arr.length; i++) {
        var isPrime = true;
        for (var j = 2; j <= Math.sqrt(arr[i]); j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (arr[i] > 1 && isPrime) primess.push(arr[i]);
    }
    return primess;
}
var primess = getPrimeNumbersss(numberssss);
console.log(primess);


//Return all the palindromes in an array

var wordss = ["level", "hello", "radar", "world", "deified"];
var palindromess = getPalindromes(wordss);
function getPalindromes(arr) {
    var palindromess = [];
    for (var i = 0; i < arr.length; i++) {
        var reversedStr = arr[i].split('').reverse().join('');
        if (arr[i] === reversedStr) palindromess.push(arr[i]);
    }
    return palindromess;
}
console.log(palindromess);
