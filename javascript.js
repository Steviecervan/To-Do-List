/**
 * To Do List
 * 
 * Show an unordered list of to do's
 * Show an input to ender a new to do
 * Show a button to add a to do.
 * 
 * When the button is clicked:
 *  - The text from the input box is used to add a list item to the bottom of the list
 *  - The text from the input box is cleared out
 * 
 * When the user clicks a list item, it is removed.
 * 
 * Extra credit: When a list item is clicked, cross it out, then remove it after 1 second
 * 
 * Submit GitHub Repo
 */

//Gets the elements

function addListItem(){
    let inputText = document.getElementById("insert-to-do-item");
    let listContainer = document.querySelector("ul");
    
    //Creates the List element
    let toDoItem = document.createElement("li");
    let itemText = document.createTextNode(inputText.value);
    toDoItem.className = "list-item";

    //Adds the list element
    toDoItem.appendChild(itemText);
    listContainer.appendChild(toDoItem);

    inputText.value = null; //Clears the input text box

    toDoItem.addEventListener("click", function(){
        this.remove(); //Removes the item
    });  
}