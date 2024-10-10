import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, MatGridListModule, MatCardModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: "",
    password: "",
  });

  constructor(private router : Router,private formBuilder: FormBuilder,private authService: AuthService){}

  submit() {
    this.authService.register([]);
    //alert("System development on progress. Please try after some time. Thank you for understanding");
  } 
}
