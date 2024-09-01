import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  
  
  constructor(private authService: AuthService, private formBuilder: FormBuilder,){}
  
  registerData = this.formBuilder.group({
    username: '',
    u_password: '',
  })  ;

  onRegister(): void {
    console.log(this.registerData.value);
    this.authService.register(this.registerData.value);
  }

}
