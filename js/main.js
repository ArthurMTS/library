const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary() {

}

function toggleBookStatus() {
  
}

function displayBooks() {
  myLibrary.forEach(book => {
    console.log(book);
  })
}