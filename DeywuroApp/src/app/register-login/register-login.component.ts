import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteOnClickService } from '../route-on-click.service';

@Component({
  selector: 'register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {
  
  
  hide:boolean=true;
  constructor(private fb:FormBuilder,private _clickRoute:RouteOnClickService,private clickRoute:RouteOnClickService) { }

  loginForm!:FormGroup;

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      userNameOrEmail:['',[Validators.required, Validators.minLength]],
      password:['', Validators.required,Validators.minLength]
  });
  }

  logoClicked(){
    this._clickRoute.reload('/login')
  }


  get getUserNameOrEmail(){
    return this.loginForm.get('useNameOrEmail')
  }
  get getPassword(){
    return this.loginForm.get('password')
  }


}
