"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _1 = require(".");
describe('unit test using ` mocha ☕️ ` & ` chai 🍵 ` is running 👻 ..', () => {
    let __MongoDB_ObjectID__, __Config__, __Result__, __Correct_Result__;
    beforeEach(() => {
        __MongoDB_ObjectID__ = { "$oid": "507f191e810c19729de860ea" };
        __Config__ = { Timestamp: 57, MachineId: 65, ProcessId: 48, Counter: 47 };
    });
    it('ideal sutation with all params 🚀 .. ', () => {
        __Result__ = _1.shortObjectId(__MongoDB_ObjectID__, __Config__);
        __Correct_Result__ = 532860;
        chai_1.expect(__Result__).to.equal(__Correct_Result__);
    });
    it('default config params 🃏 .. ', () => {
        __Result__ = _1.shortObjectId(__MongoDB_ObjectID__);
        __Correct_Result__ = 3591228;
        chai_1.expect(__Result__).to.equal(__Correct_Result__);
    });
});
