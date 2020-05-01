// Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    }
// UI Constructor
function UI(){

}
// Add Book TO List
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // creat tr element
    const row = document.createElement('tr');
    // Insert col
    row.innerHTML = `
    
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
}
// Show Alert
UI.prototype.showAlert = function(message, className){
// create div
const div = document.createElement('div');
// Add classes
div.className = `alert ${className}`;
// Add text
div.appendChild(document.createTextNode(message));
// Get parent
const container = document.querySelector('.container');
// Get parent
const form = document.querySelector('#book-form');
// Insert before
container.insertBefore(div, form);
// Time out 3 sec
setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}
// Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}
// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
//   Get the form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
// Instatiate book
const book = new Book(title, author, isbn);

// Validate 
// if(title === '' || author === '' || isbn === ''){
//     alert('Failed'); 
// }
// Instantiate UI
const ui = new UI();

// Validate
if(title === '' ||  author === '' || isbn === '')
{
    // Add book to list
    ui.showAlert('Please fill in all fields', 'error');

}else{

// Add book to list 
ui.addBookToList(book);

// show success
ui.showAlert('Books Added ', 'success'); 

// ui.clearFields();
ui.clearFields();
}

e.preventDefault();
})