import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './seller-login.component.html',
  styleUrl: './seller-login.component.scss'
})
export class SellerLoginComponent {
  sellerLoginForm = this.formBuilder.group({
    email: "",
    password: "",
  });
  
  constructor(private router : Router, private formBuilder: FormBuilder){}

  submit() {
   alert("System development on progress. Please try after some time. Thank you for understanding");
  }
  toHome(){
    this.router.navigateByUrl('');
}
}
