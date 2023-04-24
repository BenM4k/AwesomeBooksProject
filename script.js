const books = [
    {
        title: "Fantastic Four",
        author: "Ben",
    },
    {
        title: "Fantastic Books",
        author: "Nahid",
    },
]

function addBook(book, title, author){

}

function removeBook(book) {
    let title = "";
    let author = "";

    for (let i = 0; i < book.length; i++) {
        if (title === book[i].title && author === book[i].author){
            delete book[i];
        }
    }
}

function displayBooks(book){
    let content = `
    <div>
        <p>${book.title}</p>
        <p>${book.author}</p>    
        <button>Remove</button>
        <hr>
    </div>
    `;
    return content;
}

const container = document.querySelector('.bodyh1');

for (let i = 0; i < books.length; i += 1){
    console.log(books[i]);
    let book = displayBooks(books[i]);
    container.innerHTML += book;
}

let addButton = document.getElementById('addBook');
let newTitle = document.getElementById('bookTitle');
let newAuthor = document.getElementById('authorName');

addButton.addEventListener('click', () => {
    let title = newTitle;
    let author = newAuthor;

    let newBook = {
        title: title,
        author: author,
    };

    books.push(newBook);
})
console.log(books);