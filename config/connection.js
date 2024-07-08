// const { default: mongoose } = require("mongoose");

const { connect , connection } = require(mongoose);
const connectionString = 'mogodb://127.0.0.1:27017/socialNtAPI';

connect(connectionString);

module.exports = connection;