    
// MIT License

// Copyright (c) 2019 imed jaberi

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


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
  __Default_Config_Counter
} from "./config.json";




// ################################
//        Types Declaration
// ################################


// _id Type <MongoDB_ObjectId> ..
export interface MongoDB_ObjectId {
  $oid: string;
}
// config Type <UserConfig> .. 
export interface UserConfig {
  Timestamp:number;
  MachineId:number;
  ProcessId:number;
  Counter:number;
}





// ###############################
//             Core Funcs
// ###############################


/**
 * Some desc ...
 * @param _id : MongoDB Object ID .. 
 * @param config : Custom User Configuration ..
 */
export function main (_id:MongoDB_ObjectId,config?:UserConfig): number | string {

  //
  // For the first release we use a custom basic validation for the ObjectId ..
  // So, If you have a issue , let me know and thanks you so much ..  
  //

  // Check ObjectId .. 
  if (Object.keys(_id).length !== 1) return new Error('Please check your MongoDB ObjectId : should be have one keys ..').message ;
  if (Object.keys(_id).join() !== "$oid" ) return new Error('Please check your MongoDB ObjectId : the key should be have as name `$oid` ..').message ;
  if (_id.$oid.length !== 24 ) return new Error('Please check your MongoDB ObjectId : the value of `$oid` should be have exact 24 characters ..').message ;
  if (_id.$oid.match(/[^a-z0-9]/g) !== null ) return new Error('Please check your MongoDB ObjectId : the value of `$oid` should be have only lowercase character and number `<a..z> & <0..9>` ..').message ;



  let _Result:number = 0 , __Our_Condition__:number , Id:string = _id.$oid ; 
  


  // Check Config object of user & re-init .. 
  if (typeof config === 'undefined' || config === null ) {
    
   console.warn("Warning : Should be add config object to our fucntion !");

   // re-init 
    config = {
      Timestamp : __Default_Config_Timestamp,
      MachineId : __Default_Config_MachineId,
      ProcessId : __Default_Config_ProcessId,
      Counter : __Default_Config_Counter
    }
    
  }
  

  let { Timestamp , MachineId , ProcessId , Counter } = config ;
 

  // my direction .. 
  Id.split('').forEach((char:string,index:number) => {

    switch(index) {
      case _TimestampZone: __Our_Condition__ = _Timestamp * _Bit * Timestamp ; break;
      case _MachineIdZone: __Our_Condition__ = _MachineId * _Bit * MachineId ; break;
      case _ProcessIdZone: __Our_Condition__ = _ProcessId * _Bit * ProcessId ; break;
      case _CounterZone: __Our_Condition__ = _Counter * _Bit * Counter ; break;
      default: __Our_Condition__ = 1 ;
    }
    
    _Result = _Result + ((index + char.charCodeAt(0)) * __Our_Condition__ );
  
  });

  return _Result ;

};



