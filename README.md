# Short ObjectId 🗜
---

[![Build Status][travis-img]][travis-url] &nbsp;&nbsp;
[![Coverage Status][coverage-img]][coverage-url] &nbsp;&nbsp;
[![NPM version][npm-badge]][npm-url] &nbsp;&nbsp;
[![License][license-badge]][license-url] &nbsp;&nbsp;
![Top Language][top-language-badge] &nbsp;&nbsp;
![Code Size][code-size-badge] &nbsp;&nbsp;
[![Code of Conduct][coc-badge]][coc-url]
[![PRs Welcome][pr-badge]][pr-url] &nbsp;&nbsp;

<!-- ***************** -->

[travis-img]: https://travis-ci.org/3imed-jaberi/Short-ObjectId.svg?branch=master
[travis-url]: https://travis-ci.org/3imed-jaberi/Short-ObjectId
[coverage-img]: https://coveralls.io/repos/github/3imed-jaberi/Short-ObjectId/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/3imed-jaberi/Short-ObjectId?branch=master
[npm-badge]: https://img.shields.io/npm/v/short-objectid.svg?style=flat
[npm-url]: https://www.npmjs.com/package/short-objectid
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: https://github.com/3imed-jaberi/short-objectid/blob/master/LICENSE
[top-language-badge]: https://img.shields.io/github/languages/top/3imed-jaberi/short-objectid
[code-size-badge]: https://img.shields.io/github/languages/code-size/3imed-jaberi/short-objectid
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc-url]: https://github.com/3imed-jaberi/short-objectid/blob/master/CODE_OF_CONDUCT.md
[pr-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[pr-url]: https://github.com/3imed-jaberi/short-objectid/blob/master/CONTRIBUTING.md

<!-- ***************** -->

The idea of this module is make your route easier ⚡ when you work with mongodb object-ids 🗜🚀 ..

> Warning ⚠️: Previous versions are deprecated. For that the first release is 5.0.0-rc 👻.


### `Installation`

```bash
# npm ..
$ npm install short-objectid
# yarn ..
$ yarn add short-objectid
```


### `API`

> Caution 🚨: &nbsp; Be careful when you use `shortObjectIdCache`. All cache hooks are not stable outside the function.

  - `shortObjectId` &mdash; helps you to compress your ObjectId and make it short.
  - `shortObjectIdCache` &mdash; A predictable cache container instance, helps you <br/> to go and return between the shortObjetId number and the original ObjectId <br/> and subscribe to each shortObjectId (func) call. 
  
> __When you pass `cache: true` inside the options object, you don't need to use <br/> `shortObjectIdCache` because it works on the background.__

### `Usage`

This is a practical example of how to use.

```javascript
  // you can also use the desctructure way .. 
  const shortObjectId = require ('short-objectid');

  // objectId <required> ..  
  let mongodbObjectId = { "$oid" : "507f191e810c19729de860ea" }; 

  // config object <optional> .. 
  let config = { Timestamp: 57, MachineId: 65, ProcessId: 48, Counter: 47 }; 

  // options object <optional> .. 
  // you can pass one of these options [cache, keepOriginal] ..
  // cache option, informs the shortObjectId function that you 
  // should subscribe to each call and then store all data ..
  let opts = { cache: true }; 
  // Now you have access to 2 hooks (only with cache opts)
  // + getShortObjectId(fullObjectId: string): number
  // + getFullObjectId(shortObjectId: number): string
  const { shortObjectId, getShortObjectId, getFullObjectId } = shortObjectId(mongodbObjectId, config, opts);

  // Result: 
  //  console.log(`*****\n ${shortObjectId} \n*****`);
  //  Treminal
  //  $your_pc_name_with_your_directory
  //  *****
  //  532860
  //  *****
```

> You can play around with it on this sandbox example [codesandbox.io/short-objectid](https://codesandbox.io/s/short-objectid-fs0kv) using `Express JS` and `Mongoose` 🙌🏻.


#### License
---

[MIT](LICENSE)