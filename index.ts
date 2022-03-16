// Import stylesheets
import './style.css'; // Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
const searchList: HTMLElement = document.getElementById('searchList');
const listDiv: HTMLElement = document.getElementById('listItems');
const btnAdd: HTMLInputElement = document.getElementById(
  'btnAdd'
) as HTMLInputElement;
const btnShow: HTMLInputElement = document.getElementById(
  'btnShow'
) as HTMLInputElement;
const btnDelete: HTMLInputElement = document.getElementById(
  'btnDelete'
) as HTMLInputElement;
const btnSearch: HTMLInputElement = document.getElementById(
  'btnSearch'
) as HTMLInputElement;
const btnUpdate: HTMLInputElement = document.getElementById(
  'btnUpdate'
) as HTMLInputElement; //push is 7ram f front-end dev
// to not mutate to we use concat instead of push and return a copy of that array
/*interface ShoppingItems {
  id: number;
  name: string;
}*/
//class ShoppingList {listOfItems : ShoppingItems[] ;}
function ShoppingList() {
  this.listOfItems = [];
}
ShoppingList.prototype = {
  addItem: function (item) {
    this.listOfItems.push(item);
  },
  deleteItem: function (item) {
    /* this.listOfItems = this.listOfItems.filter(function (items:
    string) { return item !== items; });*/
    let indexOfremovedItem = this.listOfItems.indexOf(item);
    this.listOfItems = this.listOfItems
      .slice(0, indexOfremovedItem)
      .concat(
        this.listOfItems.slice(indexOfremovedItem + 1, this.listOfItems.length)
      ); //this.arr.pop(); }, deleteLast: function () {
    //this.listOfItems.pop();
  },
  updateItem: function (oldItem, newItem) {
    let oldIndex = this.listOfItems.indexOf(oldItem);
    this.listOfItems[oldIndex] = newItem;
  },
  getItemByIndex(index) {
    let i = Number.parseInt(index);
    return this.listOfItems[i];
  },
  searchByNameContains(char) {
    var arr = [];
    this.listOfItems.map((element) => {
      element.includes(char) ? arr.push(element) : -1;
    });
    return arr;
  },
};
const myTest = new ShoppingList();
myTest.addItem('Banana');
myTest.addItem('Pear');
myTest.addItem('Pineapple');
myTest.addItem('Melon');
myTest.addItem('Watermelon');

function showItems() {
  listDiv.innerHTML = ``;
  for (let i = 0; i < myTest.listOfItems.length; i++) {
    const node = document.createElement('li');
    const txtNode = document.createTextNode(myTest.listOfItems[i]);
    node.appendChild(txtNode);
    listDiv.appendChild(node);
  }
}
function addNewItem() {
  let addInputName: HTMLInputElement = document.getElementById(
    'txtInput'
  ) as HTMLInputElement;
  myTest.addItem(addInputName.value);
  showItems();
}
function deleteOldItem() {
  let deleteInputName: HTMLInputElement = document.getElementById(
    'txtInput'
  ) as HTMLInputElement;
  myTest.deleteItem(deleteInputName.value);
  showItems();
}
function searchForItems() {
  let searchInputName: HTMLInputElement = document.getElementById(
    'txtSearch'
  ) as HTMLInputElement;
  let mySearchList = myTest.searchByNameContains(searchInputName.value);
  searchList.innerHTML = ``;
  for (let i = 0; i < mySearchList.length; i++) {
    const node = document.createElement('li');
    const txtNode = document.createTextNode(mySearchList[i]);
    node.appendChild(txtNode);
    searchList.appendChild(node);
  }
}
function showAnItem() {
  let showInputId: HTMLInputElement = document.getElementById(
    'txtId'
  ) as HTMLInputElement;
  let showInputName: HTMLInputElement = document.getElementById(
    'txtShow'
  ) as HTMLInputElement;
  let result = myTest.getItemByIndex(showInputId.value);
  if (result == undefined) result = 'Unfound Item';
  showInputName.value = result;
}
function updateElement() {
  let newName: HTMLInputElement = document.getElementById(
    'txtNewName'
  ) as HTMLInputElement;
  let oldName: HTMLInputElement = document.getElementById(
    'txtOldName'
  ) as HTMLInputElement;
  myTest.updateItem(oldName.value, newName.value);
  showItems();
}

appDiv.addEventListener('click', showItems);
btnAdd.addEventListener('click', addNewItem);
btnDelete.addEventListener('click', deleteOldItem);
btnSearch.addEventListener('click', searchForItems);
btnShow.addEventListener('click', showAnItem);
btnUpdate.addEventListener('click', updateElement);
