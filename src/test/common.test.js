
// import sanitizeId from './../components/common';
// // displayTodoForm,
// // hideTodoForm,
// // getProjectIndex



// afterEach(() => {
//   jest.clearAllMocks()
// })

// describe('Sanitize method', () => {
//   const text = sanitizeId('prueba 1')

//   it('should return the sanitized word', () => {
//     expect(text).toBe('prueba1')
//   });

//   it('should should not return the same text', () => {
//     expect(text).not.toBe('prueba 1')
//   });
// })

// describe('Display todo Form', () => {
//   const element = document.createElement('div')

//   it('Should add show class to the element', () => {
//     displayTodoForm(element)
//     expect(element.getAttribute('class')).toBe('show')
//   })

//   it('Should not have the class hide', () => {
//     displayTodoForm(element)
//     expect(element.getAttribute('class')).not.toBe('hide')
//   })
// })

// describe('Hide To-do form', () => {
//   const element = document.createElement('div')
//   element.classList.add('show')

//   it('Should add show class to the element', () => {
//     hideTodoForm(element)
//     expect(element.getAttribute('class')).not.toBe('show')
//   })
// })

// // describe('Get Project index', () => {
// //   const store = [{ projectName: 'test' }]
// //   const idx = getProjectIndex('test')

// //   it('should return the index of the project', () => {
// //     expect(idx).toEqual(0)
// //   });
// // })