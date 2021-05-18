# basic-api-server

## [Check the deployed app](https://basic-api-server-wafa.herokuapp.com/)


Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a database, using the REST standard


## Routes: 
1. /api/v1/food
2. /api/v1/clothes

## Methods:
GET / Get All Records  
POST / Add a Record and generate an ID and attach it to the object
       - Path: /food/1 ==> Returns: The object from the database, which has the id matching that which is in the path
PUT / Update A Record which has the id matching that which is in the path /food/1
DELETE / Delete A Record which has the id matching that which is in the path /food/1


## structure

```
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── server.test.js
│   ├── logger.test.js
├── src
│   ├── error-handlers
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── middleware
│   │   ├── logger.js
│   │   ├── validator.js
│   ├── models
│   │   ├── food.js
│   │   ├── clothes.js
│   ├── routes
│   │   ├── food.js
│   │   ├── clothes.js
│   ├── server.js
├── index.js
└── package.json
```

## Implementation Notes

Created 2 in-memory data models using ES6 Classes, and exported as Node Modules.

Methods that calsses have : 
create() ,
read() ,
update() ,
delete()


## Testing:

logger.js Checks The correct status codes and returned data for each REST route

server.js Checks the bad methods and bad routes


![lab-03](https://user-images.githubusercontent.com/78326110/118692713-02745580-b813-11eb-905a-7139c1debb37.png)

## [Actions](https://github.com/wafaankoush99/basic-api-server/actions)

## [Pull request](https://github.com/wafaankoush99/basic-api-server/pull/1)



## Dependencies 
(express, dotenv, supertest, jest, uuid, cors, morgan )

## UML

![](https://user-images.githubusercontent.com/78326110/118696388-ebcffd80-b816-11eb-87de-5903d1be6d9d.jpg)
)
## [Show in Mero](https://miro.com/welcomeonboard/ctOC5kcTVU7NAjMfPBZW4F6dqX98Iy8MpXdvcvWK0Kyi0ZCunircdbmtBJ4va9rZ

