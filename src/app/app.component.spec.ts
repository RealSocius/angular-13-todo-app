import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('Test TodosComponent', () => {
  let appComponent: AppComponent;

  beforeAll(async () => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, TodosComponent],
      imports: [BrowserModule, FormsModule],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  });

  it('should create the app component', () => {
    expect(appComponent).toBeTruthy();
    expect(appComponent.title).toEqual('angular-13-todo-app');
  });
});
