import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { Todo } from './../../../models/todo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  todos: Todo[];
  getAllTodos$: Subscription;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.getAllTodos$ = this.todoService.getAll().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  ngOnDestroy(): void {
    this.getAllTodos$.unsubscribe();
  }

}
