'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let str = "i am a String"


const countChar = (str) => {
  let re = /[^a-z]/g
 let newstr = str.replace( /[^A-Za-z0-9]/g, '')
  const counts = {};
  for (const s of newstr) {
    if (counts[s]) {
      counts[s]++
    } else {
      counts[s] = 1
    }
  }
  return counts;
}

const newstr = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";
console.log(countChar(newstr))


const getPrompt = () =>  {
  rl.question('Enter your string to count the characters: ', (str) => {
    countIt(str);
    getPrompt();
  });
}

if (typeof describe === 'function') {
  describe('#countIt()', () => {
    it('should be of type function', () => {
      
      assert.equal(typeof countIt, "function");
    });
  });
} else {
  getPrompt();
}

