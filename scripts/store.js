/* global Item */
'use strict';

const store = (function(){
  const foo = 'bar';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';
  function addItem(name){
    try{
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(err){
      console.log(`Can't add blank name:${err.message}`);
    }}
  function findById(id){
    return this.items.find(item => item.id===id);
  }  
  
  function findAndToggleChecked(id){
    const item = this.findById(id);
    item.checked = !item.checked;
  }

  function findAndUpdateName(id,newName){
    try{
      Item.validateName(newName);
      const item = this.findById(id);
      item.name = newName;
    }
    catch(err){
      console.log(`Cannot update name:${err.message}`);
    }
  }

  function findAndDelete(id){
    
    
    const index = this.items.findIndex(item=>item.id===id);
    
    this.items.splice(index,1);
  }

  function toggleCheckedItemsFilter(){
    this.hideCheckedItems = !this.hideCheckedItems;
  }

  function setSearchTerm(val) {
    this.searchTerm = val;
  }

  return{
    items:items,
    hideCheckedItems:hideCheckedItems,
    searchTerm:searchTerm,
    addItem:addItem,
    findById:findById,
    findAndToggleChecked:findAndToggleChecked,
    findAndUpdateName:findAndUpdateName,
    findAndDelete:findAndDelete,
    toggleCheckedItemsFilter:toggleCheckedItemsFilter,
    setSearchTerm:setSearchTerm
  };
}());




