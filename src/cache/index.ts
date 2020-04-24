import { CacheEl, CacheState } from '../@types';
import { isObjectId } from '../utils';

class ShortObjectIdCache {
  private static instance: ShortObjectIdCache;
  private cacheState: CacheState;

  private constructor() {
    this.cacheState = [];
  }

  public static getInstance(): ShortObjectIdCache {
    if (!ShortObjectIdCache.instance) {
      ShortObjectIdCache.instance = new ShortObjectIdCache();
    }
    
    return ShortObjectIdCache.instance;
  }

  private getCacheState(): CacheState {
    return this.cacheState;
  }
  
  public subscribe(newData: CacheEl): void {
    let ExistInCacheState = this.getCacheState().filter((state: CacheEl) => state.oid === newData.oid).length !== 0;

    if(ExistInCacheState) {
      return;
    }

    this.cacheState = [...this.cacheState, newData];
  }

  public getFullObjectId(shortObjectId: number): string | void {
    // catch promise warn with express and mongoose .. 
    if(isNaN(parseInt(shortObjectId.toString(), 10))){
      return;
    }

    const result = this.getCacheState().filter((state: CacheEl, index) => state.shortObjectId == shortObjectId);
    
    if(result.length !== 1) {
      throw new Error(`Your ShortObjectId < ${shortObjectId} > Not Found ..`)
    }

    return result[0].oid;
  }

  public getShortObjectId(fullObjectId: string): number | void {
    // catch promise warn with express and mongoose .. 
    if(typeof fullObjectId == 'undefined'){
      return;
    }
    
    const result = this.getCacheState().filter(state => state.oid == fullObjectId);
    
    if(result.length !== 1) {
      throw new Error(`Your ObjectId < ${fullObjectId} > Not Found ..`)
    }

    return result[0].shortObjectId;
  }
}

export { ShortObjectIdCache as default };