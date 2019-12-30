"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = require("./config.json");
// ################################
// #         Private Funcs        #
// ################################
function isObjectId(_id) {
    // [status, msg] : response model ..
    if (Object.keys(_id).length !== 1) {
        return [
            false,
            'Please check your MongoDB ObjectId : should be have one keys ..'
        ];
    }
    if (Object.keys(_id).join() !== '$oid') {
        return [
            false,
            'Please check your MongoDB ObjectId : the key should be have as name `$oid` ..'
        ];
    }
    if (_id.$oid.length !== config_json_1.__OID_LENGTH__) {
        return [
            false,
            `Please check your MongoDB ObjectId : the value of \`$oid\` should be have exact ${config_json_1.__OID_LENGTH__} characters ..`
        ];
    }
    if (_id.$oid.match(/[^a-z0-9]/g) !== null) {
        return [
            false,
            'Please check your MongoDB ObjectId : the value of `$oid` should be have only lowercase character and number `<a..z> & <0..9>` ..'
        ];
    }
    return [
        true,
        ''
    ];
}
;
function setConfig(config) {
    if (typeof config === 'undefined' || config === null) {
        // warn for next version `2.x.x` .. 
        console.warn('Warning : you can use your custom config data');
        config = {
            Timestamp: config_json_1.__Default_Config_Timestamp,
            MachineId: config_json_1.__Default_Config_MachineId,
            ProcessId: config_json_1.__Default_Config_ProcessId,
            Counter: config_json_1.__Default_Config_Counter
        };
    }
    return config;
}
function shortObjectIdCore(_id, config) {
    let result = 0, __Our_Condition__, Id = _id.$oid, { Timestamp, MachineId, ProcessId, Counter } = config;
    Id.split('').forEach((char, index) => {
        switch (index) {
            case config_json_1._TimestampZone:
                __Our_Condition__ = config_json_1._Timestamp * config_json_1._Bit * Timestamp;
                break;
            case config_json_1._MachineIdZone:
                __Our_Condition__ = config_json_1._MachineId * config_json_1._Bit * MachineId;
                break;
            case config_json_1._ProcessIdZone:
                __Our_Condition__ = config_json_1._ProcessId * config_json_1._Bit * ProcessId;
                break;
            case config_json_1._CounterZone:
                __Our_Condition__ = config_json_1._Counter * config_json_1._Bit * Counter;
                break;
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
 * The idea of this project is make your details route easier by convert objectid to number 🥰 ..
 * @param {MongoDB_ObjectId} _id : MongoDB Object ID ..
 * @param {UserConfig} config : Custom User Configuration ..
 */
function shortObjectId(_id, config) {
    const [status, msg] = isObjectId(_id);
    if (!status) {
        throw new Error(msg).message;
    }
    return shortObjectIdCore(_id, setConfig(config));
}
exports.shortObjectId = shortObjectId;
;
// For CommonJS default export support 
module.exports = shortObjectId;
module.exports.shortObjectId = shortObjectId; // old export method ..
module.exports.default = shortObjectId;
