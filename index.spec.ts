import { expect } from 'chai';
import { shortObjectId , MongoDB_ObjectId , UserConfig } from '.';



describe('unit test using ` mocha ☕️ ` & ` chai 🍵 ` is running 👻 ..', () => {

  let __MongoDB_ObjectID__: MongoDB_ObjectId , 
  __Config__: UserConfig,
  __Result__: number,
  __Correct_Result__: number;


  beforeEach(() =>{
   __MongoDB_ObjectID__ = { "$oid" : "507f191e810c19729de860ea" };
   __Config__ = { Timestamp: 57, MachineId: 65, ProcessId: 48, Counter: 47 };
  })


  it('ideal sutation with all params 🚀 .. ', () => {
     __Result__ = shortObjectId(__MongoDB_ObjectID__,__Config__);
     __Correct_Result__ = 532860;
     expect(__Result__).to.equal(__Correct_Result__);
  });


  it('default config params 🃏 .. ', () => {
     __Result__ = shortObjectId(__MongoDB_ObjectID__);
     __Correct_Result__ = 3591228;
     expect(__Result__).to.equal(__Correct_Result__);
  });

});
