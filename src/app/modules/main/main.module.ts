import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { CreateTodoDialogComponent } from './components/dialogs/create-todo-dialog/create-todo-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [HomeComponent, CreateTodoDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
