import { MongoDB_ObjectId, UserConfig, IUserConfig } from './../@types';

const 
  defaltConfig = { Timestamp: 123, MachineId: 456, ProcessId: 789, Counter: 320 },
  // Position of each Zone (24 total) .. 
  _TimestampIndex = 7, _MachineIdIndex = 13,_ProcessIdIndex = 17, _CounterIndex = 23,
  // 12 total .. 
  _Timestamp = 4, _MachineId = 3, _ProcessId = 2, _Counter = 3,
  _Bit =8, __OID_LENGTH__ = 24;

export function isObjectId (_id: MongoDB_ObjectId): [boolean, string?] {
  if (_id.$oid.length !== __OID_LENGTH__ ) return [false, 'Please check your MongoDB ObjectId: the value of `$oid` should be have exact 24 characters ..'];
  if (_id.$oid.match(/[^a-z0-9]/g) !== null ) return [false, 'Please check your MongoDB ObjectId: the value of `$oid` should be have only lowercase character and number `<a..z> & <0..9>` ..'];
  return [true];
};

export function setConfig(config?: UserConfig): IUserConfig {
  return !config ? defaltConfig : config;
}

export function shortObjectIdCore(_id: MongoDB_ObjectId, config: IUserConfig): number {
  let result: number = 0, __Our_Condition__: number, Id: string = _id.$oid,
  { Timestamp, MachineId, ProcessId, Counter } = config;

  Id.split('').forEach((char: string, index: number) => {
    switch(index) {
      case _TimestampIndex: __Our_Condition__ = _Timestamp * _Bit * Timestamp; break;
      case _MachineIdIndex: __Our_Condition__ = _MachineId * _Bit * MachineId; break;
      case _ProcessIdIndex: __Our_Condition__ = _ProcessId * _Bit * ProcessId; break;
      case _CounterIndex: __Our_Condition__ = _Counter * _Bit * Counter; break;
      default: __Our_Condition__ = 1;
    }
    result = result + ((index + char.charCodeAt(0)) * __Our_Condition__);
  });

  return result;
}