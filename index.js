console.log('Library Management');
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display {
    add(book) {
        // console.log('add book fnctin');
        let tableBody = document.getElementById('books');
        let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
        tableBody.innerHTML += uiString;
    }
    clear() {
        let name = document.getElementById('Name');
        let author = document.getElementById('Author');
        name.value = '';
        author.value = '';
    }
    showMessage(status, message){
        let msg = document.getElementById('msg');
        let html = `${message}`;
        msg.innerHTML = html;
        if(status == 'succes'){
            msg.setAttribute('class','mx msg');
            setInterval(() => {
                msg.innerHTML = ``;
                msg.classList.remove('msg')
            }, 5000);
        }
        else if(status == 'danger'){
            msg.setAttribute('class','mx danger');
            setInterval(() => {
                msg.innerHTML = ``;
                msg.classList.remove('danger')
            }, 5000);
        }
        
    }
}
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
    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if (name.length > 2 && author.length > 2) {
        // console.log("Success");
        display.add(book);
        display.clear();
        display.showMessage('succes','Your book has been added successfully!');
    }
    else {
        // console.log('Fail');
        display.showMessage('danger','This book cannot be added!');
    }
});