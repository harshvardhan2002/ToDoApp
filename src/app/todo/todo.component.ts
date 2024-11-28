import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: string[] = [];

  addTodo(newTodoInput: HTMLInputElement){
    if (newTodoInput.value) {
      this.todos.push(newTodoInput.value);
      newTodoInput.value = '';
    }
  }
  deleteTodo(index: number){
    if(confirm('are u sure u wish to delete this task?')){
      this.todos.splice(index, 1);
    }
    
    
  }
}
