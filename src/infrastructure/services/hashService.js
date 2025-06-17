const bcrypt = require("bcryptjs");

const hashPassword = (password) => bcrypt.hash(password, 10);
const comparePasswords = (plain, hashed) => bcrypt.compare(plain, hashed);

module.exports = { hashPassword, comparePasswords };
