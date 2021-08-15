
let myLibrary = []; //Initialize library, where books are to be stored

//The book constructor
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

//Adds book to library
function addBooktoLib(userInput) {
    myLibrary.push(userInput);
    showOff();
}

//Removes book from Library
function removeFromLibrary(bookTitle) {
    myLibrary = myLibrary.filter((book) => book.title !== bookTitle);
}

function getBook(bookTitle) {
    for (let book of myLibrary) {
        if (book.title === bookTitle) {
            return book;
        }
    }
    return null;
}

//checks to see book doesnt exist in library
function newBookCheck(nubook) {
    const bookResult = myLibrary.filter(books => books.title === nubook);
    console.log(bookResult);
    if (bookResult.length > 0) {
        return false
    }
    else return true;
}

//Gets input from form
function newBookInfo() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;
    return new Book(title, author, pages, read);
}

//Opens popup to add new book on click

var btn = document.getElementById('myBtn');

btn.addEventListener('click', openForm);

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//Once new book info is added, check new input
var form = document.querySelector(".form-container");
console.log(form);

form.addEventListener('submit', nuBooktoLibrary);

function nuBooktoLibrary(e){
    const booktitle = document.querySelector("#title").value;
    e.preventDefault();
    if (newBookCheck(booktitle)) {
        addBooktoLib(newBookInfo());
    }
    else {
        alert("This books exists, please enter new book!")
    }
}

//create a book card

function makeBookCard(item) {
    const library = document.querySelector(".library-container")
    const bookEl = document.createElement('div');
    const titleEl = document.createElement('div');
    const authEl = document.createElement('div');
    const pagesEl = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn =  document.createElement('button');

    bookEl.classList.add('book');
    bookEl.setAttribute('id', myLibrary.indexOf(item));

    titleEl.textContent = item.title;
    titleEl.classList.add('title');
    bookEl.appendChild(titleEl);

    authEl.textContent = item.author;
    authEl.classList.add('author');
    bookEl.appendChild(authEl);

    pagesEl.textContent = item.pages;
    pagesEl.classList.add('pages');
    bookEl.appendChild(pagesEl);

    bookEl.appendChild(readBtn);

    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', item.title);
    removeBtn.addEventListener('click', removeBook);
    bookEl.appendChild(removeBtn);

    library.appendChild(bookEl);

}

//Display book
function showOff(){
    const display = document.querySelector('.library-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for (let i=0; i < myLibrary.length; i++){
        makeBookCard(myLibrary[i]);
    }
}

//functionality for removing book from library
function removeBook(e) {

    for (i=0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == e.target.id) {
            myLibrary.splice(i,1)
            showOff();
            return
        }
    }
}
