const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const read = document.querySelector('#read');

  const AlreadyRead = Number(read.value) ? true : false;

  const book = new Book(title.value, author.value, pages.value, AlreadyRead);

  title.value = '';
  author.value = '';
  pages.value = '';
  read.value = '0';

  myLibrary.push(book);
  closeForm();
  displayBooks();
}

function removeBookFromLibrary() {

}

function toggleBookStatus() {
  
}

function displayBooks() {
  const main = document.querySelector('#main');
  main.innerHTML = '';

  myLibrary.forEach(book => {
    main.innerHTML += bookCard(book);
  });
}

function bookCard(book) {
  const statusClass = book.status ? 'read' : 'not-read';
  const status = book.status ? 'Read' : 'Not Read';
  const toggle = book.status ? './assets/toggle-right.svg' : './assets/toggle-left.svg';

  return `
    <article class="book ${statusClass}">
      <header class="book-header">
        <img class="toggle" src="${toggle}" alt="toggle">
        <span class="status">${status}</span>
        <img class="delete" src="./assets/trash-2.svg" alt="delete">
      </header>
      <main class="book-main">
        <h2>${book.title}</h2>
        <p>${book.author}</p>
      </main>
      <footer class="book-footer">
        <p>${book.pages} Pages</p>
      </footer>
    </article>
  `
}

function closeForm() {
  const form = document.querySelector('#form');
  form.style.display = 'none';
}

displayBooks();

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', () => {
  const form = document.querySelector('#form');
  form.style.display = 'flex';
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closeForm);

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
});