const books = JSON.parse(localStorage.getItem('form')) || [];

function displayBooks(book, index){
    let content = `
    <div>
        <p>${book.title}</p>
        <p>${book.author}</p>    
        <button id ="delete${index}">Remove</button>
        <hr>
    </div>
    `;
    return content;
}

function storeForm(form) {
    localStorage.setItem('form', JSON.stringify(form));
}

let addButton = document.getElementById('addBook');
let newTitle = document.getElementById('bookTitle');
let newAuthor = document.getElementById('authorName');
const container = document.querySelector('.bodyh1');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if ( newAuthor.value !== "" && newTitle.value !== ""){
        let title = newTitle.value;
        let author = newAuthor.value;
        let newBook = {
            title: title,
            author: author,
        };

        books.push(newBook);
        storeForm(books);
        
        location.reload();
    }

    this.reset();
})

for (let i = 0; i < books.length; i += 1){
    let book = displayBooks(books[i], i);
    container.innerHTML += book;
};

const deleteBtn = document.querySelectorAll('[id^="delete"]');
deleteBtn.forEach(button => {
    button.addEventListener('click', () => {
        let item = button.parentNode;
        item.parentNode.removeChild(item);

        let id = button.id; 

        for (let i = 0; i < books.length; i++) {
            if ( id.includes(i) ) {
                books.splice (i, 1);
            }
        }

        console.log(books);
        storeForm(books);
    })
})