const mongoose = require('mongoose');

// create connection
module.exports = async () => {
  try {
    await mongoose.createConnection('mongodb://localhost:27017/backbenchers', {
      useNewUrlParser: true,
    });
    // console.log('Database Connected');
  } catch (error) {
    console.log('Database Connectivity Error', error);
    throw new Error(error);
  }
}