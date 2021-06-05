import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoService } from '../../../services/todo.service';
import { Todo } from './../../../../models/todo.model';


@Component({
  selector: 'app-create-todo-dialog',
  templateUrl: './create-todo-dialog.component.html',
  styleUrls: ['./create-todo-dialog.component.scss']
})
export class CreateTodoDialogComponent implements OnInit {

  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private dialogRef: MatDialogRef<CreateTodoDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  submitTodo(): void {
    if (!this.todoForm.valid) {
      this.todoForm.markAllAsTouched();
      return;
    }

    const todo = new Todo(this.todoForm.value);
    this.todoService.create(todo).subscribe(() => {
      this.dialogRef.close(
        { submitted: true }
      );
    });
  }

  private initForm(): void {
    this.todoForm = this.fb.group({
      title: [null, [Validators.required, Validators.maxLength(255)]],
      description: [null, [Validators.required, Validators.maxLength(255)]]
    });
  }
}
