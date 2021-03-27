import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './layout/create-task/create-task.component';
import { LandingComponent } from './landing/landing.component';
import { TaskListComponent } from './layout/task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m =>
          m.AuthModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./layout/layout.module').then(m => {
          m.LayoutModule
        })
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
