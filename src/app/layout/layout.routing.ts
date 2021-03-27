import { Routes, RouterModule } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {
    path: 'jhj',
    component: TaskListComponent
  },
  {
    path: 'create-task',
    component: CreateTaskComponent
  },
  {
    path: '',
    component: MyComponentComponent
  }
];

export const LayoutRoutes = RouterModule.forChild(routes);
