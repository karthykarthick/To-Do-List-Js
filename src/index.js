import "./scss/styles.scss";
import Project from './components/Project';

const store = []

const data = document.querySelector(".submit-btn");
data.addEventListener("click", (e) => {
  e.preventDefault();
  const ProjectTitle = document.querySelector("input").value;
  const newProject = new Project(ProjectTitle);
  newProject.renderProject();
});

export default store;