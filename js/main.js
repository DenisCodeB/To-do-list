"use strict"

const addTask = document.getElementById("add-task-btn");

const elemUl = document.getElementById("parentLi");

let countTask = 0;

// handle window ending load
window.addEventListener("load", () => {
    const lengthStorage = window.localStorage.length;
    countTask = lengthStorage;
    
    // check local storage, empty or not
    if (lengthStorage) {
        for (let i = 0; i < lengthStorage; i++) {

            // get value from local storage
            const getStorageValue = window.localStorage.getItem(`task${i+1}`);
            
            // create new P element with text node
            const newElemP = document.createElement("p");
            const textP = document.createTextNode(getStorageValue);
            newElemP.appendChild(textP);

            // create new BUTTON element with classes and text node
            const newElemBtn = document.createElement("button");
            const textBtn = document.createTextNode("");
            newElemBtn.appendChild(textBtn);
            newElemBtn.innerHTML = "&#10005;";
            newElemBtn.setAttribute("class", "perform-task");
            newElemBtn.setAttribute("onclick", 
                `window.localStorage.removeItem("task${i+1}"); ` + 
                "this.parentElement.remove();"
            );

            // create new LI element and append children P and BUTTON
            const newElemLi = document.createElement("li");
            newElemLi.appendChild(newElemP);
            newElemLi.appendChild(newElemBtn);

            // in UL, append child LI
            elemUl.appendChild(newElemLi);
        }
    }
});

const taskText = document.getElementById("input-task-text");

// handle button(+) click
addTask.addEventListener("click", () => {
    const currentText = taskText.value;

    //check input, empty or not
    if (currentText != "" && currentText != " ") { 
        // task number counter
        countTask++;

        // create new P element with text node
        const newElemP = document.createElement("p");
        const textP = document.createTextNode(currentText);
        newElemP.appendChild(textP);

        // create new BUTTON element with classes and text node
        const newElemBtn = document.createElement("button");
        const textBtn = document.createTextNode("");
        newElemBtn.appendChild(textBtn);
        newElemBtn.innerHTML = "&#10005;";
        newElemBtn.setAttribute("class", "perform-task");
        newElemBtn.setAttribute("onclick", 
            `window.localStorage.removeItem("task${countTask}"); ` + 
            "this.parentElement.remove();"
        );

        // create new LI element and append children P and BUTTON
        const newElemLi = document.createElement("li");
        newElemLi.appendChild(newElemP);
        newElemLi.appendChild(newElemBtn);

        // in UL, append child LI
        elemUl.appendChild(newElemLi);

        // Clean text input after create new task
        taskText.value = "";

        // Save values in local storage
        window.localStorage.setItem(`task${countTask}`, currentText);
    }

    else alert("Invalid input!");
});
