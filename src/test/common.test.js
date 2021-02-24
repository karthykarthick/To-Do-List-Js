
import {
  sanitizeId,
  displayTodoForm,
  hideTodoForm,
  storeProject,
  storeTodos,
  getProjectIndex,
  getTaskIndex
} from './../components/common';

import { store, currentIndex } from './../components/storage';

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

describe('store todos', () => {
  const store = [{ projectName: 'prueba1', todos: [] },
  { projectName: 'prueba2', todos: [] }];

  storeTodos('task1', 'task1 description', '12/12/12', 'high', store, 0);

  it('should have an object on the key todos position 0', () => {
    expect(typeof store[0].todos).toBe('object')
  });

  it('should have an object on the key todos position 0', () => {
    expect(typeof store[1].todos).toBe('object')
  });

  it('should have a todos key with one object in an array', () => {
    expect(store[0].todos.length).toEqual(1)
  })

  it('should not have a todos key with two objects in an array', () => {
    expect(store[0].todos.length).not.toEqual(2)
  })

  it('should have a todos key with no objects in an array', () => {
    expect(store[1].todos.length).toEqual(0)
  })

  it('should have a task named task1 in the first object', () => {
    expect(store[0].todos[0].title).toBe('task1')
  })

  it('should have a task description in todos', () => {
    expect(store[0].todos[0].description).toBe('task1 description')
  })

  it('should have a task date in todos', () => {
    expect(store[0].todos[0].date).toBe('12/12/12')
  })

  it('should have a task priority in todos', () => {
    expect(store[0].todos[0].priority).toBe('high')
  })

  it('should not have priority of low', () => {
    expect(store[0].todos[0].priority).not.toBe('low')
  })

  it('should not have description of described', () => {
    expect(store[0].todos[0].priority).not.toBe('described')
  })
})

describe('Get project index', () => {
  storeProject('prueba1', store);
  storeProject('prueba2', store);

  it('should return the idx of the id given', () => {
    const idx = getProjectIndex('prueba1');
    expect(idx).toEqual(0);
  })

  it('should return the idx of the id given', () => {
    const idx = getProjectIndex('prueba2');
    expect(idx).toEqual(1);
  })

  it('should not return 3', () => {
    const idx = getProjectIndex('prueba2');
    expect(idx).not.toEqual(3);
  })

  it('should return -1', () => {
    const idx = getProjectIndex('prueba3');
    expect(idx).toEqual(-1);
  })
})

describe('Get Task Index', () => {
  storeProject('prueba1', store);
  storeProject('prueba2', store);
  currentIndex.id = 0
  storeTodos('task1', 'task1 description', '12/12/12', 'high', store, 0);
  storeTodos('task2', 'task2 description', '12/12/12', 'low', store, 0);

  it('Should return 0', () => {
    const idx = getTaskIndex('task1');
    expect(idx).toEqual(0);
  })

  it('Should return 1', () => {
    const idx = getTaskIndex('task2');
    expect(idx).toEqual(1);
  })

  it('Should return -1', () => {
    const idx = getTaskIndex('task3');
    expect(idx).not.toEqual(0);
  })
})
