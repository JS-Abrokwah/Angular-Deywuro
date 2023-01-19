import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteOnClickService } from '../route-on-click.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm!:FormGroup;
  hide:boolean=true;
  constructor(private fb:FormBuilder,private routeOnClick:RouteOnClickService) {}

 

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      userNameOrEmail:['',[Validators.required,Validators.minLength(6)]],
      password:['',[Validators.required,Validators.minLength(8)]]
  });

  }

  get getUserNameOrEmail(){
    return this.loginForm.get('userNameOrEmail');
  }
  get getPassword(){
    return this.loginForm.get('password');
  }

  //Route on user to homepage
  openHomepage(){
    //Todo
    //Do server-side authentication to validate the usser,
    //Then pass the user's homepage url to the routeOnClick service. 
    this.routeOnClick.routeToAnotherPage('/deywuro/welcome');//route to specified url
  }

  
}
