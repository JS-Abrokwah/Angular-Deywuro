import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'login',component:RegisterLoginComponent,children:[
    {path:'',component:LoginFormComponent},
    {path:'reset-password',component:ForgetPasswordComponent}
  ]},
  {path:'register',component:CreateAccountComponent},
  
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

