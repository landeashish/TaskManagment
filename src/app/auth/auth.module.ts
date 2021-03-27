import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutes } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes
  ],
  declarations: [AuthComponent, LoginComponent]
})
export class AuthModule { }
