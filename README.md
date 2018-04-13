# SOCCER-PREDICTION API DOCS

The endpoint for the API is hosted [here](https://soccer-prediction.herokuapp.com/)

## Open Endpoints

Open endpoints require no Authentication.

* [Create](#create-user): `POST/user/`
* [Login](#login-user) : `POST /login/`

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

**Code** : `200 CREATED`

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

+ **Condition** : If `email` is not correct.
```
  { 
    message: "Email is not correct"
  }
```
**Code** : `500 Internal Error`

+ **Condition** : If `email` already exist.
```
  { 
    message: "User with email ["email"] already exist"
  }
```
**Code** : `500 Internal Error `

# Login User

**URL** : `/login/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "email": "smush.vikings@mk.com",
    "password": "smushvikings"
}
```

## Success Response

**Code** : `200 OK`

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

+ **Condition** : If an error occured.
```
  { 
    message: "Cannot find user with email ["Email"]"
  }
```
**Code** : `500 Internal Error`

+ **Condition** : If user is not in the database.
```
  { 
    message: "No user found"
  }
```
**Code** : `404 NOT FOUND `

+ **Condition** : If password does not match.
```
  { 
    message: "You cannot login"
  }
```
**Code** : `500 Internal Error `

# GET/DELETE/UPDATE User

**URL** : `/user/:userId`

**Methods** : `GET`, `DELETE`, `PUT`

**Auth required** : YES

**Permissions required** : User is Account Owner

**URL Params**

'id=5ad0e805fe1e8f00043a948f'

## Success Response

**Code** : `200 OK`

**Content example**

**GET USER**

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

**DELETE USER**
```
{
    message: 'User deleted' 
}
```


**UPDATE USER**
```
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

+ **Condition** : If user can not be found.
```
  { 
    message: "message: 'Cannot retrieve user"
  }
```
**Code** : `500 Internal Error`

