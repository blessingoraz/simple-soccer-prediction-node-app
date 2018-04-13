"use strict";

const should = require('should');
const request = require('supertest');
const app = require('../../../server');
const agent = request.agent(app);

describe('Prediction CRUD integration testing', () => {
    describe('Get all predictions', () => {
        it('Should get status equal success and array of prediction', (done) => {
            const userId = '5a841a3b3e2e9da2f4a3c0a3';
            agent
                .get(`/user/${userId}/predictions`)
                .expect(200)
                .end((err, results) => {
                    results.status.should.equal(200);
                    done();
                });
        });
    });

    describe('Post a prediction', () => {
        it('Should allow to post a prediction and return _id', (done) => {
            const params = { team1: "Arsenal", team2: "Baca" };
            const userId = '5a841a3b3e2e9da2f4a3c0a3';
            agent
                .post(`/user/${userId}/prediction`)
                .send(params)
                .expect(200)
                .end((err, results) => {
                    results.body.should.have.property('_id');
                    done();
                });
        });
    });
});
