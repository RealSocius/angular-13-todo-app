import { TestBed } from '@angular/core/testing';
import { TodosComponent } from './todos.component';

describe('Test TodosComponent', () => {
  let todosComponent: TodosComponent;

  beforeEach(async () => {
    const fixture = TestBed.createComponent(TodosComponent);
    todosComponent = fixture.componentInstance;
    todosComponent.ngOnInit();
  });

  it('should create the todo component', () => {
    expect(todosComponent).toBeTruthy();
  });

  it('should add a new todo', () => {
    todosComponent.inputTodo = 'New todo';
    todosComponent.addTodo();
    expect(todosComponent.todos.length).toEqual(3);
  });

  it('should delete a todo', () => {
    todosComponent.deleteTodo(0);
    expect(todosComponent.todos.length).toEqual(1);
  });

  it('should complete a todo', () => {
    todosComponent.toggleDone(0);
    expect(todosComponent.todos[0].completed).toEqual(true);
  });
});
