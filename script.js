var form = document.getElementById('todo-form'); //This variable stores the element with the ID "todo-form" from the index.html file.

var input = document.getElementById('todo-input'); // This variable stores the element with the ID 'todo-input' from the index.html file.

var list = document.getElementById('todo-list'); // This variable stores the element with the ID 'todo-list' from the index.html file.

// The variables allow one to access and manipulate the form, input, and list elements in the JavaScript code. 

window.addEventListener('load', function () { //This code adds an event listener to the window object that listens for the 'load' event.
    for (var i = 0; i < localStorage.length; i++) {
      addTaskToList(localStorage.key(i)); // This loop retrieves each item from local storage and adds it to a list.
    }
    
    console.log('Page has loaded!'); // This code will be executed when the 'load' event occurs.
  });

  