import store from '.././index'

const setLocalStorage = () => {
  window.localStorage.setItem('todos', JSON.stringify(store))
}

const populateStore = () => {
  const colletion = JSON.parse(window.localStorage.getItem('todos'))
  colletion.forEach(el => {
    store.push(el)
  });
}

export {setLocalStorage, populateStore}