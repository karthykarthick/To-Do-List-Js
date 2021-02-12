class Todo{
    constructor (title,description,dueDate,priority,) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoContent = document.querySelector('.todos-content');
    }

    get showContent(){
        return (` <h1>${this.title}</h1>
          <p>${this.description}</p>
          <p>${this.dueDate}</p>
          <p>${this.priority}</p>
        `)
    }

    renderTodo(){
        this.todoContent.insertAdjacentHTML("afterbegin",this.showContent);
    }
}

export default Todo;