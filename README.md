# Short ObjectId
---

[![Build Status][travis-img]][travis-url] &nbsp;&nbsp;
[![Coverage Status][coverage-img]][coverage-url] &nbsp;&nbsp;

### The idea of this project is make your details route easier using mongodb object-ids ..

Note: v4.2.0 ~ currently 1 option it's available ({ cache: true}).

## Installation

```bash
# npm ..
$ npm install short-objectid
# yarn ..
$ yarn add short-objectid
```


## Usage

The method of use is simple and very easy ... Just follow this example :

```javascript
  const shortObjectId = require ('short-objectid') ; // you can  also use destucture way .. 

  // ObjectId ..  
  let MongoDB_ObjectID = { "$oid" : "507f191e810c19729de860ea" }; 

  // Config Object <Optional> .. 
  let config = { Timestamp: 57, MachineId: 65, ProcessId: 48, Counter: 47 }; 

  // Now, with Version 4.2.0 you can use Opts Object <Optional>
  // for say to `shortObjectId` please give me the original 
  // objectId.
  let opts = { cache: true }; // default is false .. 
  // so the result 
  let [shortObjectId, MongoDB_ObjectID] = shortObjectId(MongoDB_ObjectID, config, opts);
 
  console.log(`*****\n ${shortObjectId} \n*****`);
```

### Result

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