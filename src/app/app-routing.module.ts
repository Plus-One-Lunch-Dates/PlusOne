import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { MainpageComponent } from './mainpage/mainpage.component';

// Client-side routes
const routes: Routes = [
  {
    path: '', redirectTo: 'mainpage', pathMatch: 'full'
  },
  {
    path: 'mainpage', 
    component: MainpageComponent
  },
  {
    path: 'signup', 
    component: SignupComponent
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home/:email',
    component: HomeComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
