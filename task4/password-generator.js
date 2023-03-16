const generatePassword = require('generate-password');
const password = generatePassword.generate({
    length: 10,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    excludeSimilarCharacters: true
  });
  console.log(password);
  