const Prediction = require('../models/prediction');
const User = require('../models/user');

const jwt = require('jsonwebtoken');


exports.create = (req, res) => {
    const prediction = new Prediction({
        create_by: req.params.userId,
        team1: req.body.team1,
        team2: req.body.team2,
    });

    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        User.findById(prediction.create_by, (err, user) => {
            if (err) res.status(500).json({message: 'Cannot find user'});
            prediction.score1 = Math.floor(Math.random() * 5);
            prediction.score2 = Math.floor(Math.random() * 5);

            user.predictions.push(prediction);
            user.save((err, user) => {
                if (err) res.status(500).send({message: 'Cannot create a user'});
                res.status(201);
            });

            prediction.save((err, prediction) => {
                if (err) res.status(500).json({message: 'Cannot save prediction'});
                res.status(201).json(prediction);
            });
        });
    });
};

exports.findAllByUser = (req, res) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        Prediction.where('create_by').equals(req.params.userId).exec((err, predictions) => {
            if (err) res.status(500).json({message: 'Cannot retrieve prediction history'});
            res.json(predictions);
        });
    });
};

exports.findAll = (req, res) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        Prediction.find({}, (err, predictions) => {
            if (err) res.status(500).json({ message: 'Cannot retrieve predictions' });
            if (!predictions) return res.status(404).send("No predictions found.");

            res.json(predictions);
        });
    });
};
