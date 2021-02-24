import { store, currentIndex } from './storage';

const storeProject = (projectName, storage) => {
  storage.push({
    projectName,
    todos: [],
  });
};

const storeTodos = (title, description, date, priority) => store[currentIndex.id]
  .todos
  .push(
    {
      title,
      description,
      date,
      priority,
    },
  );

const sanitizeId = (text) => text.split(' ').join('');

const updateTodo = (newTitle, newDescription, newDate, newPriority) => {
  store[currentIndex.id].todos[currentIndex.taskId].title = newTitle;
  store[currentIndex.id].todos[currentIndex.taskId].description = newDescription;
  store[currentIndex.id].todos[currentIndex.taskId].date = newDate;
  store[currentIndex.id].todos[currentIndex.taskId].priority = newPriority;
};

const renderProjects = (container) => {
  store.forEach(project => {
    const li = `
                <li class="list-group-item" id="${sanitizeId(project.projectName)}">${project.projectName}
                  <span class="float-right">
                    <i class="fa fa-times mr-2 delete-pj-btn" data-id="${sanitizeId(project.projectName)}"></i>
                    <i class="fas fa-plus mr-4 add-todo-btn" data-id="${sanitizeId(project.projectName)}"></i>

                  </span>
                </li>
                `;
    container.insertAdjacentHTML('afterbegin', li);
  });
};

const renderTodos = (container) => {
  container.innerHTML = '';
  store[currentIndex.id].todos.forEach(todo => {
    const card = `
      <div class="card" id="${sanitizeId(todo.title)}">
        <h2 class="h2">${todo.title}</h2>
        <p>${todo.description}</p>
        <p>Due Date: ${todo.date}</p>
        <span>priority: ${todo.priority}</span>
        <div>
          <div class="btn btn-success btn-complete-task" data-id="${sanitizeId(todo.title)}">Complete</div>
          <div class="btn btn-warning btn-edit-task" data-id="${sanitizeId(todo.title)}">Edit</div>
          <div class="btn btn-danger btn-delete-task" data-id="${sanitizeId(todo.title)}">Delete</div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('afterbegin', card);
  });
};

const deleteElementFromDOM = (id) => document.querySelector(`#${id}`).remove();

const getProjectIndex = (id) => store.findIndex(pj => sanitizeId(pj.projectName) === id);
const getTaskIndex = (id) => store[currentIndex.id]
  .todos
  .findIndex(task => sanitizeId(task.title) === id);

const displayTodoForm = (element) => element.classList.add('show');
const hideTodoForm = (element) => element.classList.remove('show');
const getBtns = (classElemnt) => document.querySelectorAll(`${classElemnt}`);

export {
  storeProject,
  storeTodos,
  renderProjects,
  sanitizeId,
  getProjectIndex,
  deleteElementFromDOM,
  displayTodoForm,
  hideTodoForm,
  renderTodos,
  getBtns,
  getTaskIndex,
  updateTodo,
};
