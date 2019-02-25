'use strict';
/* global Item, cuid */
/* global store, cuid */

const Item = (function(){
  const foo = 'bar';
  const array = ['testing'];
  function validateName(name){
    if(!name){
      throw 'Name does not exist';
    }
  }

  function create(name){
    return ({id:cuid(),name:name,checked:false});
  }

  return{
    array:array,
    validateName:validateName,
    create:create
  };
}());

console.log(Item);
