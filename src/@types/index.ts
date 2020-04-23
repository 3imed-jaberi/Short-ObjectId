// ################################
// #       Types Declaration      #
// ################################

export interface MongoDB_ObjectId { $oid: string }

export interface IUserConfig {
  Timestamp: number;
  MachineId: number;
  ProcessId: number;
  Counter: number;
}

export interface Options {
  keepOriginal?: boolean;
  cache?: boolean;
}

export interface CacheEl { 
  shortObjectId: number;
  oid: string
}

export type UserConfig = IUserConfig | null;
export type CacheState = CacheEl[];