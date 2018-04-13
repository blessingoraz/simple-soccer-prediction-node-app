"use strict";

const should = require('should');
const sinon = require('sinon');
const mongoose = require('mongoose');

require('sinon-mongoose');

const PredictionModel = require('../../../app/models/prediction');

describe('Prediction controller testing', () => {
    describe('Post prediction test', () => {
        it('Should save prediction', (done) => {
            var predictionMock = sinon.mock(new PredictionModel({
                prediction: "Test prediction from mock",
            }));
            var prediction = predictionMock.object;

            predictionMock
                .expects('save')
                .yields(null, 'SAVED');

            prediction.save((err, result) => {
                predictionMock.verify();
                predictionMock.restore();
                should.equal('SAVED', result, "Test fails due to unexpected result")
                done();
            });
        });
    });

    describe('Get predictions test', () => {
        it('Should get predictions', (done) => {
            var predictionMock = sinon.mock(PredictionModel);
            predictionMock
                .expects('find')
                .yields(null, 'PREDICTIONS');

            PredictionModel.find((err, result) => {
                predictionMock.verify();
                predictionMock.restore();
                should.equal('PREDICTIONS', result, "Test fails due to unexpected result")
                done();
            });
        });
    });
})
