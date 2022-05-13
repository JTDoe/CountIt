'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const countIt = (str) => {
  console.log('BOOMS', str.length)
}


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