"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = reverseString;
exports.countCharacters = countCharacters;
exports.capitalizeWords = capitalizeWords;
function reverseString(input) {
    return input.split('').reverse().join('');
}
function countCharacters(input) {
    return input.length;
}
function capitalizeWords(input) {
    return input
        .split(' ')
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
        .join(' ');
}
