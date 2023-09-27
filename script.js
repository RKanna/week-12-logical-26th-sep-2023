"use strict";

//1.Write a function that checks if two strings are anagrams of each other (contain the same characters in a different order).

function checkAnagrams(str1, str2) {
  const regexSorting = (str) =>
    str.replace(/\s/g, "").toLowerCase().split("").sort().join("");
  return regexSorting(str1) === regexSorting(str2);
}

const str1 = "listen";
const str2 = "silent";
console.log(checkAnagrams(str1, str2));

//2.Given an array containing numbers from 1 to N with one number missing, write a function to find the missing number.
function findMissingNumber(arr) {
  const lengthOfArray = arr.length + 1;
  const totalSum = (lengthOfArray * (lengthOfArray + 1)) / 2;
  const sumOfArray = arr.reduce((acc, num) => acc + num, 0);
  return totalSum - sumOfArray;
}
const arr = [1, 2, 4, 5, 6];
const missingNumber = findMissingNumber(arr);
console.log(missingNumber);

//3.Write a function to find common elements between two arrays.

function findCommonElements(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(arr1, arr2);
console.log(commonElements);

//4.Write a function to implement the binary search algorithm to find an element in a sorted array.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const index = binarySearch(sortedArray, target);
console.log(index);

//5.Write a function to find missing elements in a given range within an array.
const arrEle = [1, 3, 4, 7, 9];
const startRange = 1;
const endRange = 10;
function findMissingNumbers(arrEle, startRange, endRange) {
  return Array.from(
    { length: endRange - startRange + 1 },
    (_, i) => i + startRange
  ).reduce((missingArray, currentNum) => {
    if (!arrEle.includes(currentNum)) {
      missingArray.push(currentNum);
    }
    return missingArray;
  }, []);
}
const missingNumbers = findMissingNumbers(arrEle, startRange, endRange);
console.log(missingNumbers);

//6.Write a function to validate if the parentheses in an expression are balanced.
function validateParentheses(expression) {
  let balance = 0;
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char === "(") {
      balance++;
    } else if (char === ")") {
      balance--;
      if (balance < 0) {
        return false;
      }
    }
  }
  return balance === 0;
}
const expression1 = "((a + b) - (c * d))";
const expression2 = "(a + b) - (c * d))";
console.log(validateParentheses(expression1));
console.log(validateParentheses(expression2));

//7.Write a function to perform basic string compression using the counts of repeated characters.
function compressString(inputString) {
  return inputString
    .split("")
    .reduce((result, char) => {
      if (!result.length || char !== result[result.length - 2]) {
        result.push(char, "1");
      } else {
        result[result.length - 1]++;
      }
      return result;
    }, [])
    .join("");
}
const inputString = "aabcccccaaa";
const compressedString = compressString(inputString);
console.log(compressedString);

//8.Write a function to reverse a given integer.

const reverseNumber = (number) => {
  const isNegative = Math.sign(number) === -1;
  const reversed = parseInt(
    [...Math.abs(number).toString()].reverse().join(""),
    10
  );
  return isNegative ? -reversed : reversed;
};
const number1 = 12345;
const number2 = -9876;
console.log(reverseNumber(number1));
console.log(reverseNumber(number2));

//9.Write a function to determine if a given text matches a pattern containing regular expressions.

function isMatch(text, pattern) {
  const regex = new RegExp("^" + pattern + "$");
  return regex.test(text);
}
const text1 = "aa";
const pattern1 = "a*";
const text2 = "mississippi";
const pattern2 = "mis*is*p*.";
console.log(isMatch(text1, pattern1));
console.log(isMatch(text2, pattern2));

//10.Write a function that finds the length of the longest increasing subsequence of a given array of integers.
