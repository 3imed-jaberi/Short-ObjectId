// ################################
// #       Types Declaration      #
// ################################

interface MongoDB_ObjectId { $oid: string }

interface UserConfig {
  Timestamp: number;
  MachineId: number;
  ProcessId: number;
  Counter: number;
}

// ################################
// #       Var. Declaration       #
// ################################

const 
  defaltConfig = { // defaulllt config. 
    Timestamp: 123,
    MachineId: 456,
    ProcessId: 789,
    Counter: 320
  }, 
  _TimestampIndex = 7, // Position of each Zone .. 
  _MachineIdIndex = 13,
  _ProcessIdIndex = 17,
  _CounterIndex = 23,
  _Bit =8, // Bits for zone .. 
  _Timestamp = 4,
  _MachineId = 3,
  _ProcessId = 2,
  _Counter = 3,
  __OID_LENGTH__ = 24;

// ################################
// #         Private Funcs        #
// ################################

// TODO: in next version the user can pass string not required obj. ... 
function isObjectId (_id: MongoDB_ObjectId): [boolean, string?] {
  if (_id.$oid.length !== __OID_LENGTH__ ) return [false, 'Please check your MongoDB ObjectId: the value of `$oid` should be have exact 24 characters ..'];
  if (_id.$oid.match(/[^a-z0-9]/g) !== null ) return [false, 'Please check your MongoDB ObjectId: the value of `$oid` should be have only lowercase character and number `<a..z> & <0..9>` ..'];
  return [true];
};

function setConfig(config?: UserConfig): UserConfig {
  if (!config) {
    console.warn('Warning: you can use your custom config data ..');
    return defaltConfig;
  }
  return config;
}

function shortObjectIdCore(_id: MongoDB_ObjectId, config: UserConfig): number {
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
function shortObjectId (_id: MongoDB_ObjectId, config?: UserConfig): number {
  const [status, msg] = isObjectId(_id);

  if(!status) {
    throw new Error(msg).message;
  }
  return shortObjectIdCore(_id, setConfig(config));
};

// ################################
// #             Export           #
// ################################

export { shortObjectId as default, shortObjectId };

// For CommonJS
// module.exports.shortObjectId = shortObjectId;
// module.exports.default = shortObjectId;