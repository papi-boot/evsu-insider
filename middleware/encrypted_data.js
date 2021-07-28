/* eslint-disable no-useless-escape */
"use strict";
const CryptoJS = require("crypto-js");
const bcrypt = require("bcrypt");
const letterWord = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberRandom = "1234567890";
let SECRET_PASSWORD = [];
//Password Key generator
const generateHashToken = async () => {
  for (let i = 1; i < 8; i++) {
    SECRET_PASSWORD.push(
      letterWord.charAt(Math.floor(Math.random() * letterWord.length))
    );
    if (i % 2 === 0) {
      //to LowerCase
      SECRET_PASSWORD.push(
        letterWord
          .charAt(Math.floor(Math.random() * letterWord.length))
          .toLocaleLowerCase()
      );
    }
    for (let j = 0; j < i; j++) {
      SECRET_PASSWORD.push(
        numberRandom.charAt(Math.floor(Math.random() * numberRandom.length))
      );
    }
  }
  const hash_token = SECRET_PASSWORD.toString().replace(/\,/g, "");
  return hash_token;
};

const PASSWORD_KEY_NORMAL = SECRET_PASSWORD.toString().replace(/\,/g, "");
// const PASSWORD_KEY_SHA = CryptoJS.SHA1(PASSWORD_KEY_NORMAL);

const passwordResetTokenHash = async (PASSWORD_KEY_SHA) => {
  const CONVERTED_SHA = CryptoJS.SHA1(PASSWORD_KEY_SHA)
  const encrypt = CryptoJS.AES.encrypt(
    PASSWORD_KEY_NORMAL,
    CONVERTED_SHA.toString(CryptoJS.enc.Hex)
  );
  return encrypt.toString();
};

//Bcrypt matcher work
// console.log(`PASSWORD RESET SECRET: ${PASSWORD_KEY_NORMAL}`);
// console.log(`PASSWORD RESET TOKEN: ${encrypt}`);

const passwordResetSecretHash = async (password_key) => {
  const hashPasswordSecret = await bcrypt.hash(password_key, 10);
  return hashPasswordSecret;
};

//on email link check
// const comparePasswordResetSecret = async () => {
//   const password_reset_hash = await passwordResetHash(PASSWORD_KEY_NORMAL);
//   bcrypt.compare(
//     PASSWORD_KEY_NORMAL,
//     password_reset_hash,
//     (err, passwordMatched) => {
//       if (err) {
//         console.log(err);
//       }
//       if (passwordMatched) {
//         console.log("YESS ITS PERFECT");
//       } else {
//         console.log("PASSWORD RESET NOT MATCHED");
//       }
//     }
//   );
// };
// comparePasswordResetSecret();
module.exports = {
  passwordResetSecretHash,
  passwordResetTokenHash,
  generateHashToken,
};
