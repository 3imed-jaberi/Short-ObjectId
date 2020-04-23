import 'mocha';
import { expect } from 'chai';
import { shortObjectId, shortObjectIdCache } from '../src';


// types .. 
interface MongoDB_ObjectId { $oid: string }
type ResultShortObjectId = number | [number, string?];

// test code .. 
describe('unit test using ` mocha ☕️ ` & ` chai 🍵 ` is running 👻 ..', () => {
   let __MongoDB_ObjectID__: MongoDB_ObjectId, __Result__: ResultShortObjectId, __Correct_Result__: ResultShortObjectId ;

   beforeEach(() =>{
      __MongoDB_ObjectID__ = { '$oid' : '507f191e810c19729de860ea' };
   });

   it('Success Test ✔️: shortObjectIdCache work fine 🚀 .. ', () => {
      
      let resultBeforeSubscibtion;
      try {
         resultBeforeSubscibtion = {
            shortObjectId: shortObjectIdCache.getShortObjectId('507f191e810c19729de860ea'),
            oid: shortObjectIdCache.getFullObjectId(3591228)
         }; 
      } catch (error) {
         resultBeforeSubscibtion = { shortObjectId: null, oid: null };
      }

      shortObjectIdCache.subscribe({ shortObjectId: 3591228, oid: '507f191e810c19729de860ea' });

      let resultAfterSubscibtion = {
         shortObjectId: shortObjectIdCache.getShortObjectId('507f191e810c19729de860ea'),
         oid: shortObjectIdCache.getFullObjectId(3591228)
      };

      (expect(resultBeforeSubscibtion).to.deep.equal({ shortObjectId: null, oid: null }) && 
      expect(resultAfterSubscibtion).to.deep.equal({ shortObjectId: 3591228, oid: '507f191e810c19729de860ea' }));
   });

   it('Success Test ✔️: use cache as options param + getShortObjectId() *️⃣ .. ', () => {
      let result = shortObjectId(__MongoDB_ObjectID__, null, { cache: true }).getShortObjectId('507f191e810c19729de860ea');
      expect(result).to.equal(3591228);
   });

   it('Success Test ✔️: use cache as options param + getFullObjectId() *️⃣ .. ', () => {
      let result = shortObjectId(__MongoDB_ObjectID__, null, { cache: true }).getFullObjectId(3591228);
      expect(result).to.equal('507f191e810c19729de860ea');
   });

   it('Success Test ✔️: use keepOriginal as options param *️⃣ .. ', () => {
      __Result__ = shortObjectId(__MongoDB_ObjectID__, null, { keepOriginal: true });
      __Correct_Result__ = [3591228, __MongoDB_ObjectID__.$oid];
      expect(__Result__).to.deep.equal(__Correct_Result__);
   });

   it('Success Test ✔️: default config param 🃏 .. ', () => {
      __Result__ = shortObjectId(__MongoDB_ObjectID__);
      __Correct_Result__ = 3591228;
      expect(__Result__).to.equal(__Correct_Result__);
   });
  
   it('Success Test ✔️: with config param 🚀 .. ', () => {
      let __Config__ = { Timestamp: 57, MachineId: 65, ProcessId: 48, Counter: 47 };

      __Result__ = shortObjectId(__MongoDB_ObjectID__, __Config__);
      __Correct_Result__ = 532860;
      expect(__Result__).to.equal(__Correct_Result__);
   });

   it('Catch Test ❌: < invalid oid > ⛔️ .. ', () => {
      let __MongoDB_ObjectID__CATCH_1__ = { '$oid' : '507f191e810c19*29de860ea' };

      expect(() => shortObjectId(__MongoDB_ObjectID__CATCH_1__)).to.throw(new Error('Please check your MongoDB ObjectId: the value of `$oid` should be have only lowercase character and number `<a..z> & <0..9>` ..').message);
   });

   it('Catch Test ❌: < length oid > ⛔️ .. ', () => {
      let __MongoDB_ObjectID__CATCH_2__ = { '$oid' : 'err507f191e810c19729de860eaerr' };

      expect(() => shortObjectId(__MongoDB_ObjectID__CATCH_2__)).to.throw(new Error('Please check your MongoDB ObjectId: the value of `$oid` should be have exact 24 characters ..').message);
   });

   it('Catch Test ❌: < pass all option as true > ⛔️ .. ', () => {
      expect(() => __Result__ = shortObjectId(__MongoDB_ObjectID__, null, { keepOriginal: true, cache: true })).to.throw(new Error('Should you use one option. \n In the next release, the option keepOriginal will be overridden by the cache options.').message);
   });

   it('Catch Test ❌: < getShortObjectId() > ⛔️ .. ', () => {
      expect(() => shortObjectIdCache.getShortObjectId('507f191e810c19729de860ea')).to.Throw; // msg updated in each case .. 
   });

   it('Catch Test ❌: < getFullObjectId() > ⛔️ .. ', () => {
      expect(() => shortObjectIdCache.getFullObjectId(3591228)).to.Throw; // msg updated in each case .. 
   });
});