import "./scss/styles.scss";
import Project from './components/Project';
import Todo from './components/Todos';
import Ui from './components/Ui';

const store = [
]

let projectIdx = 0

const data = document.querySelector(".submit-btn");
data.addEventListener("click", (e) => {
  // e.preventDefault();
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
    const todo = new Todo(title,description,dueDate,priority, projectIdx);
    todo.renderTodo();
} )


document.addEventListener("DOMContentLoaded", e => {
  const UI = new Ui()
    UI.renderUi()
    checkProject()
    UI.deleteProject()
    console.log(store)
})
  
const checkProject = () => {
  const projects = [...document.querySelectorAll('.project')]
  projects.forEach(pj => {
    pj.addEventListener('click', e => {
      projectIdx = e.target.id
      console.log(projectIdx)
      })
    })
}



export default store;