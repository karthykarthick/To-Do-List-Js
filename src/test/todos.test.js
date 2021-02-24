/* eslint-disable no-undef */
import Todos from './../components/Todos';


describe('todos class',()=>{
   const todos = new Todos('title', 'description', '12/12/12', 'priority');

   it('Todo should have the name given', () => {
    expect(todos.dueDate).toEqual('12/12/12');
  })

  
  it('Todo should have the name given', () => {
    expect(todos.dueDate).not.toEqual('18/12/12');
  })

  it('Todo should have the name given', () => {
    expect(todos.priority).not.toEqual('High');
  })

  it('Todo should have the name given', () => {
    expect(todos.title).not.toEqual('hello');
  })

  it('should not have a different name than the given', () => {
    expect(todos.title).not.toEqual('name')
  });



})