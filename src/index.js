import "./scss/styles.scss";
const data = document.querySelector(".submit-btn");
data.addEventListener("click", (e) => {
  e.preventDefault();
  const ProjecTitle = document.querySelector("input").value;
  console.log(ProjecTitle);
  console.log(e, data);
});
