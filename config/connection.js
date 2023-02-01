const mongoose = require('mongoose');

// set endpoints for connection to DB - Unsure if strictQuery is true or false?
mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/to-dos'
);

module.exports = mongoose.connection;