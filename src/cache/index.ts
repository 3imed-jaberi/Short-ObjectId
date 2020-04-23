import { CacheEl, CacheState } from './../@types/index';

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

  public getFullObjectId(shortObjectId: number): string {
    const result = this.getCacheState().filter((state: CacheEl) => state.shortObjectId === shortObjectId);

    if(result.length !== 1) {
      throw new Error(`Your ShortObjectId < ${shortObjectId} > Not Found ..`)
    }

    return result[0].oid;
  }

  public getShortObjectId(fullObjectId: string): number {
    const result = this.getCacheState().filter(state => state.oid === fullObjectId);
    
    if(result.length !== 1) {
      throw new Error(`Your ObjectId < ${fullObjectId} > Not Found ..`)
    }

    return result[0].shortObjectId;
  }
}

export { ShortObjectIdCache as default };