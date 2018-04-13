const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const predictionSchema = new Schema({
    team1: { type: String },
    team2: { type: String },
    score1: { type: String },
    score2: { type: String },
    create_by: { type: Schema.Types.ObjectId, ref: 'User'},
});

const prediction = mongoose.model('Prediction', predictionSchema);
module.exports = prediction;
