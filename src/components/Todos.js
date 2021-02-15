import store from ".././index";
import { setLocalStorage } from "./storage";
import { projectIdx,sanitizeName } from "./Ui";

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoContent = document.querySelector(".todos-content");
    this.index = projectIdx;
  }

  get showContent() {
    return `
      <div class="card border-primary row" id="${sanitizeName(this.title)}">
        <div class="card-body col-8">
          <ul class="list-group list-group-flush">
            <h1 class="list-group-item">Title: ${this.title}</h1>
            <li class="list-group-item">Description: ${this.description}</li>
            <li class="list-group-item">Due_Date: ${this.dueDate}</li>
            <li class="list-group-item">Priority: ${this.priority}</li>
          </ul>
          <button class="btn btn-outline-danger del-data" data-name="${this.title}">Delete</button>
          <button class="btn btn-outline-success complete-btn" data-sucess="${sanitizeName(this.title)}">Completed task</button>
        </div>
      </div>
        `;
  }

  completedTask() {
    const btns = document.querySelectorAll(".complete-btn");
    
    btns.forEach(btn => {
      btn.addEventListener('click', e => {
        const card = document.querySelector(`#${e.target.dataset.sucess}`)
        card.classList.toggle('border')
        card.classList.toggle('border-success')
      })
    })
  }

  deleteButton(){
    const data = document.querySelectorAll(".del-data");
    data.forEach(btn => {
      btn.addEventListener("click", e => {
        const idxToDelete = store[this.index].todos.findIndex(td => td.title === e.target.dataset.name)
      this.removeChildDOM(sanitizeName(e.target.dataset.name));
      store[this.index].todos.splice(idxToDelete,1);
      setLocalStorage();
      })
    })
    
  }

  removeChildDOM(idx) {
    const child = document.querySelector(`#${idx}`);
    child.remove()
  }



  storeTodo() {
    store[this.index].todos.push({
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
    });
    setLocalStorage();
  }

  renderTodo() {
    this.todoContent.insertAdjacentHTML("afterbegin", this.showContent);
    this.storeTodo();
    this.deleteButton();
  }
}

export default Todo;
