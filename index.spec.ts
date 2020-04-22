import 'mocha';
import { expect } from 'chai';
import shortObjectId from '.';


// types .. 
interface MongoDB_ObjectId { $oid: string }
type ResultShortObjectId = number | [number, string?];

// test code .. 
describe('unit test using ` mocha ☕️ ` & ` chai 🍵 ` is running 👻 ..', () => {
   let __MongoDB_ObjectID__: MongoDB_ObjectId, __Result__: ResultShortObjectId, __Correct_Result__: ResultShortObjectId;

   beforeEach(() =>{
      __MongoDB_ObjectID__ = { '$oid' : '507f191e810c19729de860ea' };
   });


   it('Success Test ✔️: use options param *️⃣ .. ', () => {
      __Result__ = shortObjectId(__MongoDB_ObjectID__, undefined, { cache: true });
      __Correct_Result__ = [3591228, '507f191e810c19729de860ea'];
      expect(__Result__).to.deep.equal(__Correct_Result__);
   });

   it('ideal sutation with all params 🚀 .. ', () => {
      let __Config__ = { Timestamp: 57, MachineId: 65, ProcessId: 48, Counter: 47 };
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
      let __MongoDB_ObjectID__CATCH_1__ = { '$oid' : '507f191e810c19*29de860ea' };

      expect(() => shortObjectId(__MongoDB_ObjectID__CATCH_1__)).to.throw(new Error('Please check your MongoDB ObjectId: the value of `$oid` should be have only lowercase character and number `<a..z> & <0..9>` ..').message);
   });

   it('catch case < length oid > ⛔️ .. ', () => {
      let __MongoDB_ObjectID__CATCH_2__ = { '$oid' : 'err507f191e810c19729de860eaerr' };
      
      expect(() => shortObjectId(__MongoDB_ObjectID__CATCH_2__)).to.throw(new Error('Please check your MongoDB ObjectId: the value of `$oid` should be have exact 24 characters ..').message);
   });
});
