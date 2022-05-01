const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  };

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let result = [];
    let koef = 0;


    message = message.toUpperCase();
    key = key.padEnd(message.length, key).toUpperCase();

    for(let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        result += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(koef)) % 26 + 65);
        koef++;
      }
      else {
        result += message[i];
      }
    }

    return (!this.flag) ? result.split('').reverse().join('') : result;
  };

  decrypt(message, key) {
      if (!message || !key) throw new Error('Incorrect arguments!');

      let result = [];
      let koef = 0;
  
  
      message = message.toUpperCase();
      key = key.padEnd(message.length, key).toUpperCase();

      for(let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
          result += String.fromCharCode((message.charCodeAt(i) - key.charCodeAt(koef) + 26) % 26 + 65);
          koef++;
        }
        else {
          result += message[i];
        }
      }

      return (!this.flag) ? result.split('').reverse().join('') : result;
  };
}

module.exports = {
  VigenereCipheringMachine
};
