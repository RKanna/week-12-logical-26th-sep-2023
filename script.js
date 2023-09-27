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
