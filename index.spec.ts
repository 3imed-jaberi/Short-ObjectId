import { expect } from 'chai';
import { shortObjectId , MongoDB_ObjectId , UserConfig } from '.';
import { __OID_LENGTH__ } from './config.json';


describe('unit test using ` mocha ☕️ ` & ` chai 🍵 ` is running 👻 ..', () => {

  let __MongoDB_ObjectID__: MongoDB_ObjectId,
  __MongoDB_ObjectID__CATCH_1__: MongoDB_ObjectId, 
  __MongoDB_ObjectID__CATCH_2__: MongoDB_ObjectId, 
  __Config__: UserConfig,
  __Result__: number,
  __Correct_Result__: number;


  beforeEach(() =>{
   __MongoDB_ObjectID__ = { "$oid" : "507f191e810c19729de860ea" };
   __MongoDB_ObjectID__CATCH_1__ = { "$oid" : "507f191e810c19*29de860ea" };
   __MongoDB_ObjectID__CATCH_2__ = { "$oid" : "err507f191e810c19729de860eaerr" };
   __Config__ = { Timestamp: 57, MachineId: 65, ProcessId: 48, Counter: 47 };
  })


  it('ideal sutation with all params 🚀 .. ', () => {
     __Result__ = shortObjectId(__MongoDB_ObjectID__, __Config__);
     __Correct_Result__ = 532860;
     expect(__Result__).to.equal(__Correct_Result__);
  });


  it('default config params 🃏 .. ', () => {
     __Result__ = shortObjectId(__MongoDB_ObjectID__);
     __Correct_Result__ = 3591228;
     expect(__Result__).to.equal(__Correct_Result__);
  });
  

  it('catch case < invalid oid > ⛔️ .. ', () => {
   
     expect(() => shortObjectId(__MongoDB_ObjectID__CATCH_1__)).to.throw(new Error('Please check your MongoDB ObjectId : the value of `$oid` should be have only lowercase character and number `<a..z> & <0..9>` ..').message);

  });

  it('catch case < length oid > ⛔️ .. ', () => {
   
     expect(() => shortObjectId(__MongoDB_ObjectID__CATCH_2__)).to.throw(new Error(`Please check your MongoDB ObjectId : the value of \`$oid\` should be have exact ${__OID_LENGTH__} characters ..`).message);

  });

});