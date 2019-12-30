import { 
  _TimestampZone, 
  _Timestamp, 
  _MachineIdZone, 
  _MachineId, 
  _ProcessIdZone, 
  _ProcessId, 
  _CounterZone,
  _Counter,
  _Bit,
  __Default_Config_Timestamp,
  __Default_Config_MachineId,
  __Default_Config_ProcessId,
  __Default_Config_Counter,
  __OID_LENGTH__
} from './config.json';



// ################################
// #       Types Declaration      #
// ################################


export interface MongoDB_ObjectId {
  $oid: string;
}


export interface UserConfig {
  Timestamp: number;
  MachineId: number;
  ProcessId: number;
  Counter: number;
}


// ################################
// #         Private Funcs        #
// ################################


function isObjectId (_id: MongoDB_ObjectId): [boolean, string] {

  // [status, msg] : response model ..
  if (Object.keys(_id).length !== 1) {
    return [
      false,
      'Please check your MongoDB ObjectId : should be have one keys ..'
    ];
  }

  if (Object.keys(_id).join() !== '$oid' ) {
    return [
      false,
      'Please check your MongoDB ObjectId : the key should be have as name `$oid` ..'
    ];
  }

  if (_id.$oid.length !== __OID_LENGTH__ ) {
    return [
      false,
      `Please check your MongoDB ObjectId : the value of \`$oid\` should be have exact ${__OID_LENGTH__} characters ..`
    ];
  }

  if (_id.$oid.match(/[^a-z0-9]/g) !== null ) {
    return [
      false,
      'Please check your MongoDB ObjectId : the value of `$oid` should be have only lowercase character and number `<a..z> & <0..9>` ..'
    ];
  }

  return [
    true,
    ''
  ];

};


function setConfig(config: UserConfig | undefined): UserConfig {

  if (typeof config === 'undefined' || config === null ) {
    
    // warn for next version `2.x.x` .. 
    console.warn('Warning : you can use your custom config data'); 

    config = {
      Timestamp : __Default_Config_Timestamp,
      MachineId : __Default_Config_MachineId,
      ProcessId : __Default_Config_ProcessId,
      Counter : __Default_Config_Counter
    }

  }

  return config;
}


function shortObjectIdCore(_id: MongoDB_ObjectId, config: UserConfig): number {

  let result: number = 0, 
  __Our_Condition__: number,
  Id: string = _id.$oid,
  { 
    Timestamp,
    MachineId, 
    ProcessId, 
    Counter 
  } = config;


  Id.split('').forEach((char: string, index: number) => {

    switch(index) {
      case _TimestampZone: __Our_Condition__ = _Timestamp * _Bit * Timestamp; break;
      case _MachineIdZone: __Our_Condition__ = _MachineId * _Bit * MachineId; break;
      case _ProcessIdZone: __Our_Condition__ = _ProcessId * _Bit * ProcessId; break;
      case _CounterZone: __Our_Condition__ = _Counter * _Bit * Counter; break;
      default: __Our_Condition__ = 1;
    }
    
    result = result + ((index + char.charCodeAt(0)) * __Our_Condition__ );
  
  });

  return result;
}


// ################################
// #         short-objectid       #
// ################################



/**
 * The idea of this project is make your details route easier by convert objectid to number 🥰 ..
 * @param {MongoDB_ObjectId} _id : MongoDB Object ID .. 
 * @param {UserConfig} config : Custom User Configuration ..
 */
export function shortObjectId (_id: MongoDB_ObjectId, config?: UserConfig): number {

  const [status, msg] = isObjectId(_id);

  if(!status) {
    throw new Error(msg).message;
  }

  
  return shortObjectIdCore(_id, setConfig(config));

};



// For CommonJS default export support 
module.exports = shortObjectId;
module.exports.shortObjectId = shortObjectId; // old export method ..
module.exports.default = shortObjectId;