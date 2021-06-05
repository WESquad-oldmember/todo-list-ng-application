import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
