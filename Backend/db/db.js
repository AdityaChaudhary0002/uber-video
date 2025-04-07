const mongoose = require('mongoose');
require('dotenv').config(); // Make sure this is at the top

function connectToDb() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to DB');
  })
  .catch(err => {
    console.error('❌ DB connection error:', err);
  });
}

module.exports = connectToDb;
