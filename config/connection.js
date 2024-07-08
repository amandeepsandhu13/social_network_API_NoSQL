const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/socialNetworkDB'; // Update with your actual connection string

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB!');
});

module.exports = db;
