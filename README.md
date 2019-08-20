# Short ObjectId
---

<!-- soon will be add a logo as my other packages .. -->
<!-- ![imed-jaberi](logo.jpg) -->

[![Build Status](https://travis-ci.org/3imed-jaberi/Short-ObjectId.svg?branch=master)](https://travis-ci.org/3imed-jaberi/Short-ObjectId)

[![Coverage Status](https://coveralls.io/repos/github/3imed-jaberi/Short-ObjectId/badge.svg?branch=master)](https://coveralls.io/github/3imed-jaberi/Short-ObjectId?branch=master)

##### The idea of this project is make your details route easier using mongodb object-ids ..

## Installation 
---

- NPM :
```bash
$ npm install short-objectid
```

## Usage 
---
The method of use is simple and very easy ... Just follow these steps :

Step 1 : Import the module in this way.

```javascript
const shortObjectId = require ('short-objectid') ;
```

Step 2 : Enter the mongodb objectId with your custom config object you want to the function.

```javascript

 // ObjectId ..  
 let MongoDB_ObjectID = {"$oid" : "507f191e810c19729de860ea" }; 

 // Config Object || You can also not pass it or pass it as `null` .. 
 let Config = { Timestamp: 57, MachineId: 65, ProcessId: 48, Counter: 47 }; 

 let result = shortObjectId(MongoDB_ObjectID, Config);
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
[MIT](https://choosealicense.com/licenses/mit/) 

