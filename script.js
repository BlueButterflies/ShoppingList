var button = document.getElementById('add');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul')
var deleteBtns = document.getElementsByClassName('delete');
var items = ul.getElementsByTagName('li');
var resetBtn = document.getElementById('reset');
var deleteAll = document.getElementById('deleteAll');
var printShopingList = document.getElementById('print');

//Create new items:
function inputLength() {
    //give input value length
    return input.value.length;
}

function createListElement() {
    //create buttons delete and new items
    var btnDelete = document.createElement('button');
    btnDelete.className = 'btnDelete';
    btnDelete.innerHTML = 'X';
    var newItem = document.createElement('li');

    //append user item and button delete in new item
    newItem.appendChild(document.createTextNode(input.value));
    newItem.innerHTML = newItem.innerHTML.toUpperCase() + '&nbsp &nbsp &nbsp &nbsp &nbsp' + '&nbsp &nbsp &nbsp &nbsp &nbsp';
    newItem.appendChild(btnDelete);
    ul.appendChild(newItem);

    //reset input value after click button add
    input.value = '';

    //Delete item after click X
    btnDelete.onclick = removeParent;
}

function addToListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addToListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

//Reset input insert
function resetInput() {
    return input.value = '';
}

//Remove single item and all items
function removeParent(event) {
    event.target.removeEventListener('click', removeParent, false);
    event.target.parentNode.remove();
}

function removeAllItems() {
    if (addToListAfterClick ) {
        ul.replaceChildren();
    }
}

// Print shopping list
function printItems() {
    var printList = document.getElementById("list");
    var printWindow = window.open('', '', 'left=300, top=100, width=800, height=500, toolbar=0, scrollbars=0, status=0');
    printWindow.document.write(printList.innerHTML);
    printWindow.focus();
    printWindow.print();
    printWindow.document.close();
    printWindow.close();
}

//Function for any click button
button.addEventListener('click', addToListAfterClick);

input.addEventListener('keypress', addToListAfterKeypress);

resetBtn.addEventListener('click', resetInput);

deleteAll.addEventListener('click', removeAllItems);

printShopingList.addEventListener('click', printItems);
