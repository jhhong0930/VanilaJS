const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const pending = document.querySelector(".pending");
const finished = document.querySelector(".finished");

const TODOS_LS = "toDos";

let toDos = [];
let toDoFinish = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    pending.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function finishToDo(event) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const finishBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDoFinish.length + 1;

    delBtn.innerText = "X";
    // delBtn.addEventListener("click", deleteToDo);
    finishBtn.innerText = "<";
    // finishBtn.addEventListener("click", finishToDo);
    span.innerText = text + " ";
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finishBtn);
    li.id = newId;
    pending.appendChild(li)
    const toDoObj = {
        text: text,
        id: newId
    };
    toDoFinish.push(toDoObj);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const finishBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    finishBtn.innerText = "V";
    finishBtn.addEventListener("click", finishToDo);
    span.innerText = text + " ";
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finishBtn);
    li.id = newId;
    pending.appendChild(li)
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();