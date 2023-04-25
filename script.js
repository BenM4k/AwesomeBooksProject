const books = JSON.parse(localStorage.getItem('form')) || [];

class Books {
  constructor(author, title, books, button) {
    this.author = author;
    this.title = title;
    this.books = books;
    this.button = button;
  }

  addBook() {
    const { title } = this;
    const { author } = this;

    const newBook = {
      title,
      author,
    };

    this.books.push(newBook);
  }

  deleteBook() {
    const item = this.button.parentNode;
    const parent = item.parentNode;
    parent.parentNode.removeChild(parent);

    const { id } = this.button;

    for (let i = 0; i < this.books.length; i += 1) {
      if (id.includes(i)) {
        this.books.splice(i, 1);
      }
    }
  }
}

function storeForm(form) {
  localStorage.setItem('form', JSON.stringify(form));
}

function returnBooks(book, index) {
  const content = `
    <tr class="tableRow">
        <td>"${book.title}" by ${book.author} </td>   
        <td><button id ="delete${index}">Remove</button></td>
    </tr>
    `;
  return content;
}

function displayBooks(book, form){
  let container = form;
  let currentBook = "";
  for (let i = 0; i < book.length; i += 1) {
    currentBook = returnBooks(book[i], i);
  }
  container.innerHTML += currentBook;
}

const addButton = document.getElementById('addBook');
const newTitle = document.getElementById('bookTitle');
const newAuthor = document.getElementById('authorName');
const container = document.querySelector('.bodyh1');

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (newAuthor.value !== '' && newTitle.value !== '') {
    const library = new Books(newAuthor.value, newTitle.value, books);
    library.addBook();
    storeForm(books);
    displayBooks(books, container);
  }
  document.getElementById('addNewForm').reset();
});

displayBooks(books, container);

const deleteBtn = document.querySelectorAll('[id^="delete"]');
deleteBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const libraryOne = new Books(newAuthor.value, newTitle.value, books, button);
    libraryOne.deleteBook();
    storeForm(books);
  });
});
