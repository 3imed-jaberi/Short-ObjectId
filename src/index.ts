import ShortObjectIdCache from './cache';
import { MongoDB_ObjectId, UserConfig, Options } from './@types';
import { isObjectId, shortObjectIdCore, setConfig } from './utils';

// ################################
// #         short-objectid       #
// ################################

/**
 * The idea of this project is make your details 
 * route easier by convert objectid to number 🥰 ..
 * 
 * @param {MongoDB_ObjectId} _id: MongoDB Object ID .. 
 * @param {UserConfig} config: Custom User Configuration ..
 */
function shortObjectId(_id: MongoDB_ObjectId, config?: UserConfig, opts?: Options): number | [number, string?] | any { // TODO: resolve any type 

  // TODO: remove in next release ...
  if(opts?.cache && opts.keepOriginal) {
    throw new Error(`Should you use one option. \n In the next release, the option keepOriginal will be overridden by the cache options.`).message;
  }

  const [status, msg] = isObjectId(_id);

  if(!status) {
    throw new Error(msg).message;
  }

  const shortObjectId = shortObjectIdCore(_id, setConfig(config));

  if(opts?.cache) { 
    // subscribe for all update without duplicate data ..    
    ShortObjectIdCache.getInstance().subscribe({ shortObjectId, oid: _id.$oid });
    return {
      shortObjectId,
      getFullObjectId: (shortObjectId: number) => ShortObjectIdCache.getInstance().getFullObjectId(shortObjectId),
      getShortObjectId: (fullObjectId: string) => ShortObjectIdCache.getInstance().getShortObjectId(fullObjectId)
    }
  }

  if(opts?.keepOriginal) {
    return [shortObjectId, _id.$oid];
  }

  return shortObjectId;
};

/**
 * Cache access ....... 
 * 
 */
const shortObjectIdCache = (function  () {
  return ShortObjectIdCache.getInstance();
})();

// ################################
// #             Export           #
// ################################

export { shortObjectId as default, shortObjectId, shortObjectIdCache };

// For CommonJS
module.exports.default = shortObjectId;
module.exports.shortObjectId = shortObjectId;
module.exports.shortObjectIdCache = shortObjectIdCache;