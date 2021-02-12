import store from '.././index'

class Todo{
    constructor (title,description,dueDate,priority, idx) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoContent = document.querySelector('.todos-content');
    this.index = idx
    }

    get showContent(){
        return (` <h1>${this.title}</h1>
          <p>${this.description}</p>
          <p>${this.dueDate}</p>
          <p>${this.priority}</p>
        `)
    }

    storeTodo(){
      console.log(this.index)
      store[this.index].todos.push({
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        priority: this.priority
      });
      console.log(store[this.index]);
    }

    renderTodo(){
        this.todoContent.insertAdjacentHTML("afterbegin",this.showContent);
        this.storeTodo();
    }
}

export default Todo;