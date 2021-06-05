import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { Todo } from './../../../models/todo.model';
import { CreateTodoDialogComponent } from './../dialogs/create-todo-dialog/create-todo-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  isLoading: boolean;

  todos: Todo[];
  getAllTodos$: Subscription;

  constructor(
    private todoService: TodoService,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.fetchTodos();
  }

  ngOnDestroy(): void {
    this.getAllTodos$.unsubscribe();
  }

  fetchTodos(): void {
    this.isLoading = true;
    this.getAllTodos$ = this.todoService.getAll().subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
        this.isLoading = false;
      },
      (error) => { this.isLoading = false; }
    );
  }

  addTodo(): void {
    const dialogRef = this.matDialog.open(CreateTodoDialogComponent, {
      width: '50vw'
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res.submitted) {
        this.fetchTodos();
      }
    });
  }
}
