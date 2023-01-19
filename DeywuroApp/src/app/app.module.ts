import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module/material-module.module';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteOnClickService } from './route-on-click.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

import { ClientAppModule } from './client-app/client-app.module';



@NgModule({
  declarations: [
    AppComponent,
    RegisterLoginComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    LoginFormComponent,
    CreateAccountComponent,
    ForgetPasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ClientAppModule,
    AppRoutingModule,
  ],
  providers: [RouteOnClickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
