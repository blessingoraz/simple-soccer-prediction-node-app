# SOCCER-PREDICTION API DOCS

The endpoint for the API is hosted [here](https://soccer-prediction.herokuapp.com/)

## Open Endpoints

Open endpoints require no Authentication.

* [Create](prediction-api): `POST/user/`
* Login : `POST /login/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login above.

### User API

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

* Show all users info: `GET /users`
* Show user info : `GET /user/:userId`
* Update user info : `PUT /user/:userId`
* Delete user: `DELETE /user/:userId`

### Prediction API

Endpoints for viewing and manipulating the Accounts that the Authenticated User
has permissions to access.
