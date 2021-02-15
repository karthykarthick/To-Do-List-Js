/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
import store from '../index';

const setLocalStorage = () => {
  window.localStorage.setItem('todos', JSON.stringify(store));
};

const populateStore = () => {
  const colletion = JSON.parse(window.localStorage.getItem('todos'));
  if (colletion) {
    colletion.forEach(el => {
      store.push(el);
    });
  }
};

export { setLocalStorage, populateStore };