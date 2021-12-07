const mongoose = require('mongoose');

const userSchema = {
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    maxLength: 50,
    trim: true, // space를 없애준다.
    // unique: 1, // 같은값은 하나만 존재할 수 있다.
  },
  password: {
    type: String,
    maxLength: 50,
  },
  role: {
    type: Number,
    default: 0, // 값이 정해지지 않았다면 디폴트로 0!
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
};

const User = mongoose.model('User', userSchema); // userSchema를 model로 만들어준다.

module.exports = { User };
