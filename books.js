document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector("#book-list ul");
    //remove book
    list.addEventListener("dblclick", function (e) {
        if (e.target.className == "delete") {
            const lis = e.target.parentElement.parentElement;
            list.removeChild(lis);
        }
    });

    //add book
    const addForm = document.forms["add-book"];
    addForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const value = addForm.querySelector("#author").value;
        const words = addForm.querySelector("#new-book").value;
        //create element
        const li = document.createElement("li");
        const link = document.createElement("a");
        const author = document.createElement("span");
        const bookName = document.createElement("span");
        const deleteBtn = document.createElement("span");
        if (value === "") {
            return false;
        }
        //add contents
        author.textContent = value;
        link.textContent = words;
        deleteBtn.textContent = "Delete";
        //add classes
        bookName.classList.add("name");
        link.classList.add("nam");
        deleteBtn.classList.add("delete");
        author.classList.add("author");
        //add an attribute
        deleteBtn.setAttribute("title", "Delete this book");
        //append to document
        bookName.appendChild(deleteBtn);
        bookName.appendChild(link);
        li.appendChild(bookName);
        li.appendChild(author);
        list.appendChild(li);
        value.textContent = "";
        words.textContent = "";
    });

    //hide books
    const hideBox = document.querySelector(".hide");
    hideBox.addEventListener("change", () => {
        if (hideBox.checked) {
            list.style.display = "none";
        } else {
            list.style.display = "initial";
        }
    });

    //search book
    const searchBar = document.forms["search-book"].querySelector("input");
    searchBar.addEventListener("keyup", (e) => {
        const term = e.target.value.toLowerCase();
        const books = list.querySelectorAll("li");
        Array.from(books).forEach((book) => {
            const title = book.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(term) != -1) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });
    });

    //tabbed content
    const tabs = document.querySelector(".tabs");
    const panels = document.querySelectorAll(".panel");
    tabs.addEventListener("click", function (e) {
        if (e.target.tagName == "LI") {
            const targetPanel = document.querySelector(e.target.dataset.target);
            panels.forEach(function (panel) {
                if (panel == targetPanel) {
                    panel.classList.add("active");
                } else {
                    panel.classList.remove("active");
                }
            });
        }
    });
});
