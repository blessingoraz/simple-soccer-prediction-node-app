# SOCCER-PREDICTION API DOCS

The endpoint for the API is hosted [here](https://soccer-prediction.herokuapp.com/)

## Open Endpoints

Open endpoints require no Authentication.

* [Create](#create-user): `POST/user/`
* [Login]() : `POST /login/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login above.

### User API

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

* [Show all users info](): `GET /users`
* [Show user info]() : `GET /user/:userId`
* [Update user info]() : `PUT /user/:userId`
* [Delete user](): `DELETE /user/:userId`

### Prediction API

Endpoints for viewing and manipulating the Predictions that the Authenticated User
has permissions to access.

* [Request for a prediction](): `POST /user/:userId/prediction`
* [Show predictions by user info]() : `GET /user/:userId/predictions`
* [Show all predictions]() : `GET /predictions`


# Create User

Used to collect a Token for a registered User.

**URL** : `/user/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "username": "[valid username]",
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "username": "Smush Vikings",
    "email": "smush.vikings@mk.com",
    "password": "smushvikings"
}
```

## Success Response

**Code** : `201 OK`

**Content example**

```json
{
    "predictions": [],
    "_id": "5ad0e805fe1e8f00043a948f",
    "password": "$2a$10$vBmLRnDoRSz9Ahfs4PdrkuSJWf2F5ChDy1IqS3NJsZH6kxQRI1NDm",
    "username": "Smush Vikings ",
    "email": "smush.vikings@mk.com",
    "created_at": "2018-04-13T17:25:25.574Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZDBlODA1ZmUxZThmMDAwNDNhOTQ4ZiIsImlhdCI6MTUyMzY0MDMyNSwiZXhwIjoxNTIzNzI2NzI1fQ.DJI8UUl7QXoo-fBJ9sCTCaSVu3kjMgibvqKZqfFKPxI",
    "__v": 0
}
```

## Error Response

**Condition** : If 'email' is not correct.
```
  { 
    message: "Email is not correct"
  }
```
**Code** : `500 Internal Error`
