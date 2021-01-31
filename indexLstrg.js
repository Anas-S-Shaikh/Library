console.log('Library Management');
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display {
    static add() {
        // console.log('add book fnctin');
        let bookList = localStorage.getItem('bookList');
        let bookObj;
        if (bookList == null) {
            bookObj = [];
        } else {
            bookObj = JSON.parse(bookList);
        }

        let tableBody = document.getElementById('books');
        let uiString = ``;
        bookObj.forEach(function (element,index) {
            // console.log(index);
            // console.log(bookObj);

            uiString += `<tr>
                            <td>${element.name}</td>
                            <td>${element.author}</td>
                            <td>${element.type}</td>
                            <td><button class = 'btn dlt' onclick=deleteBook(${index})>Delete</button></td>
                            </tr>`;
        });
        if (bookObj.length > 0) {
            tableBody.innerHTML = uiString;
        } else {
            tableBody.innerHTML = `<tr>
                                    <td colspan="4">
                                        <p>No books found. Please add book details to see here.</p>
                                    </td>
                                </tr>`
        }
    }
    clear() {
        let name = document.getElementById('Name');
        let author = document.getElementById('Author');
        name.value = '';
        author.value = '';
    }
    showMessage(status, message) {
        let msg = document.getElementById('msg');
        let html = `${message}`;
        msg.innerHTML = html;
        if (status == 'succes') {
            msg.setAttribute('class', 'mx msg');
            setInterval(() => {
                msg.innerHTML = ``;
                msg.classList.remove('msg')
            }, 5000);
        }
        else if (status == 'danger') {
            msg.setAttribute('class', 'mx danger');
            setInterval(() => {
                msg.innerHTML = ``;
                msg.classList.remove('danger')
            }, 5000);
        }

    }
}
// let display = new Display();
Display.add();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
    let name = document.getElementById('Name').value;
    let author = document.getElementById('Author').value;
    let fiction = document.getElementById('Fiction');
    let computer = document.getElementById('Computer');
    let cooking = document.getElementById('Cooking');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (computer.checked) {
        type = computer.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }


    let bookList = localStorage.getItem('bookList');
    if (bookList == null) {
        bookObj = [];
    } else {
        bookObj = JSON.parse(bookList);
    }

    // console.log(bookList);
    // console.log(bookObj);


    let display = new Display();
    if (name.length > 2 && author.length > 2) {
        // console.log("Success");
        let book = new Book(name, author, type);
        bookObj.push(book);
        localStorage.setItem('bookList', JSON.stringify(bookObj));
        Display.add();
        display.clear();
        display.showMessage('succes', 'Your book has been added successfully!');
    }
    else {
        // console.log('Fail');
        display.showMessage('danger', 'Sorry! The data is not valid. Please enter the valid data.');
    }
});

function deleteBook(index){
    let bookList = localStorage.getItem('bookList');
    if (bookList == null) {
        bookObj = [];
    } else {
        bookObj = JSON.parse(bookList);
    }
    bookObj.splice(index,1);
    localStorage.setItem('bookList', JSON.stringify(bookObj));
    Display.add();
}