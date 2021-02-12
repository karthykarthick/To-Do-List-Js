import "./scss/styles.scss";
import Project from './components/Project';
import Todo from './components/Todos';

const store = []

const data = document.querySelector(".submit-btn");
data.addEventListener("click", (e) => {
  e.preventDefault();
  const ProjectTitle = document.querySelector("input").value;
  const newProject = new Project(ProjectTitle);
  newProject.renderProject();
});

const todoBtm = document.querySelector(".hitme");
todoBtm.addEventListener("click",(e) =>{
    e.preventDefault();
    const title = document.querySelector('.todo-title').value;
    const description = document.querySelector(".todo-description").value;
    const dueDate = document.querySelector('.todo-due-date').value;
    const priority = document.querySelector('#priority').value;
    const todo = new Todo(title,description,dueDate,priority);
    todo.renderTodo();
} )
export default store;