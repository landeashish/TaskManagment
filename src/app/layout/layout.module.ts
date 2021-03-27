import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutes } from './layout.routing';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutes,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LayoutComponent, TaskListComponent, CreateTaskComponent, MyComponentComponent]
})
export class LayoutModule { }
