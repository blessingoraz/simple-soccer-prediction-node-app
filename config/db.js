require('dotenv').config();
// url: 'mongodb://localhost:27017/soccer-prediction'

module.exports = {
    url: process.env.MONGODB_URI
};
