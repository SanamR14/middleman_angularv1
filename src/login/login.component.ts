import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router : Router){}

  submit() {
    // if (this.form.valid) {
    //   this.submitEM.emit(this.form.value);
    // }
    console.log(this.form.value);
  }
  toHome(){
      this.router.navigateByUrl('');
  }
 
}
