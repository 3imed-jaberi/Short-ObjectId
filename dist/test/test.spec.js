"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../main");
const chai_1 = require("chai");
require("mocha");
describe('unit test using ` mocha ☕️ ` & ` chai 🍵 ` is running 👻 ..', () => {
    let __MongoDB_ObjectID__, __Config__, __Result__;
    it('ideal sutation with all params 🚀 .. ', () => {
        __MongoDB_ObjectID__ = { "$oid": "507f191e810c19729de860ea" };
        __Config__ = { Timestamp: 57, MachineId: 65, ProcessId: 48, Counter: 47 };
        __Result__ = main_1.main(__MongoDB_ObjectID__, __Config__);
        chai_1.expect(__Result__).to.equal(532860);
    });
    it('default config params with ConfigUser object 🃏 .. ', () => {
        __MongoDB_ObjectID__ = { "$oid": "507f191e810c19729de860ea" };
        __Result__ = main_1.main(__MongoDB_ObjectID__);
        chai_1.expect(__Result__).to.equal(3591228);
    });
    //____ this tests is for JS [WIP] ..  ____//
    //   it('passe null config params 🔽 .. ', () => {
    //      __MongoDB_ObjectID__ = { "$oid" : "507f191e810c19729de860ea" };
    //      __Config__ = null;
    //      __Result__ = main(__MongoDB_ObjectID__,__Config__);
    //      expect(__Result__).to.equal(3591228);
    //   });
    //   it('check the ObjectId keys length 📏 .. ', () => {
    //      // here i check with ts type ..        
    //      __MongoDB_ObjectID__ = { "$oid" : "507f191e810c19729de860ea" , 'someOtherKey': 'someOtherValue' };
    //      __Result__ = main(__MongoDB_ObjectID__);
    //      expect(__Result__).to.equal('Please check your MongoDB ObjectId : should be have one keys ..');
    //   });
    //   it('check the ObjectId keys name ✒️ .. ', () => {
    //      // here i check with ts type ..        
    //      __MongoDB_ObjectID__ = { "OtherName" : "507f191e810c19729de860ea"};
    //      __Result__ = main(__MongoDB_ObjectID__);
    //      expect(__Result__).to.equal('Please check your MongoDB ObjectId : the key should be have as name `$oid` ..');
    //   });
    //   it('check the ObjectId : `$oid` value length 📏 .. ', () => {
    //      // here i check with ts type ..        
    //      __MongoDB_ObjectID__ = { "$oid" : "507f191e810c19729de860eaxx"};
    //      __Result__ = main(__MongoDB_ObjectID__);
    //      expect(__Result__).to.equal('Please check your MongoDB ObjectId : the value of `$oid` should be have exact 24 characters ..');
    //   });
    //   it('check the ObjectId : `$oid` value <a..z> & <0..9> 📋 .. ', () => {
    //      // here i check with ts type ..        
    //      __MongoDB_ObjectID__ = { "$oid" : "50Sf191e810c19729de860ea"};
    //      __Result__ = main(__MongoDB_ObjectID__);
    //      expect(__Result__).to.equal('Please check your MongoDB ObjectId : the value of `$oid` should be have only lowercase character and number `<a..z> & <0..9>` ..');
    //   });
});
