# Short ObjectId
---

[![Build Status][travis-img]][travis-url] &nbsp;&nbsp;
[![Coverage Status][coverage-img]][coverage-url] &nbsp;&nbsp;

### The idea of this project is make your details route easier using mongodb object-ids ..


## Installation

```bash
# npm ..
$ npm install short-objectid
# yarn ..
$ yarn add short-objectid
```


## Usage

The method of use is simple and very easy ... Just follow these steps :

Step 1 : Import the module in this way.

```javascript
const shortObjectId = require ('short-objectid') ; // you can  also use destucture way .. 
```

Step 2 : Enter the mongodb objectId with your custom config object you want to the function.

```javascript

 // ObjectId ..  
 let MongoDB_ObjectID = { "$oid" : "507f191e810c19729de860ea" }; 

 // Config Object <Optional> .. 
 let config = { Timestamp: 57, MachineId: 65, ProcessId: 48, Counter: 47 }; 

 let result = shortObjectId(MongoDB_ObjectID, config);
 
 console.log(`*****\n ${result} \n*****`);
```
Step 3 : Execute method to see the result ..
```bash
$your_pc_name_with_your_directory
*****
 532860
*****
```


#### License
---
[MIT](LICENSE)



[travis-img]: https://travis-ci.org/3imed-jaberi/Short-ObjectId.svg?branch=master
[travis-url]: https://travis-ci.org/3imed-jaberi/Short-ObjectId
[coverage-img]: https://coveralls.io/repos/github/3imed-jaberi/Short-ObjectId/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/3imed-jaberi/Short-ObjectId?branch=master