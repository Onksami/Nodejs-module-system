import { reverseString, countCharacters } from './stringUtils';
import * as fs from 'fs';
import * as path from 'path'; 


const sentence = "Mastering Node.js opens the door to crafting efficient and scalable systems, empowering developers to build solutions that drive the web and shape the future of technology.";


const reversedSentence = reverseString(sentence);


const characterCount = countCharacters(sentence);


console.log("Original Sentence: ", sentence);
console.log("Reversed Sentence: ", reversedSentence);
console.log("Character Count: ", characterCount);


const reversedFilePath = path.join(__dirname, 'reversed.txt');


fs.writeFileSync(reversedFilePath, reversedSentence);

console.log(`Reversed sentence: ${reversedFilePath}`);