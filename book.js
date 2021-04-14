
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

// let REbook = new Book('investments', 'perez', 190, 'yes i read');
// let housebook = new Book('finance', 'mezzy', 100);

// var bookLibrary = [];

// bookLibrary.push(housebook, REbook)
// //bookLibrary.push(REbook);

// console.log(bookLibrary[0].info());