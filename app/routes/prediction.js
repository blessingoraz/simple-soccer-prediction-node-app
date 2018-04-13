const prediction = require('../controllers/prediction');
const VerifyToken = require('../auth/VerifyToken');

module.exports = (app) => {
    app.post('/user/:userId/prediction', VerifyToken, prediction.create);

    app.get('/user/:userId/predictions', VerifyToken, prediction.findAllByUser);

    app.get('/predictions', VerifyToken, prediction.findAll);
};
