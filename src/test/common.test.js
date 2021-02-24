
import {
  sanitizeId,
  displayTodoForm,
  hideTodoForm,
  storeProject
} from './../components/common';

describe('Sanitize method', () => {
  const text = sanitizeId('prueba 1')

  it('should return the sanitized word', () => {
    expect(text).toBe('prueba1')
  });

  it('should should not return the same text', () => {
    expect(text).not.toBe('prueba 1')
  });
})

describe('Display todo Form', () => {
  const element = document.createElement('div')

  it('Should add show class to the element', () => {
    displayTodoForm(element)
    expect(element.getAttribute('class')).toBe('show')
  })

  it('Should not have the class hide', () => {
    displayTodoForm(element)
    expect(element.getAttribute('class')).not.toBe('hide')
  })
})

describe('Hide To-do form', () => {
  const element = document.createElement('div')
  element.classList.add('show')

  it('Should add show class to the element', () => {
    hideTodoForm(element)
    expect(element.getAttribute('class')).not.toBe('show')
  })
})

describe('Store project', () => {
  const store = []
  storeProject('prueba', store)

  it('should have an object', () => {
    expect(store.length).toEqual(1)
  });

  it('should not have more than one object', () => {
    expect(store.length).not.toEqual(2)
  });

  it('should have an object key called todos', () => {
    expect(typeof store[0].todos).toBe('object')
  });

  it('should have an object key with the name prueba', () => {
    expect(store[0].projectName).toBe('prueba')
  });

})