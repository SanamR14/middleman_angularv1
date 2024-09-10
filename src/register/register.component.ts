import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../Auth/auth.service';
import { MatSelectModule } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatSelectModule,NgFor,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  
  
  constructor(private authService: AuthService, private formBuilder: FormBuilder,private router : Router){}
  
  registerData = this.formBuilder.group({
    email:'',
    username: '',
    u_Password: '',
    c_Password: '',
    address:'',
    state:'',
    city:'',
    pincode:'',
    contact:''
  })  ;

  states = [
    { name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur'] },
    { name: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai','Trichy'] },
    { name: 'Karnataka', cities: ['Bangalore', 'Mysore', 'Hubli'] },
    { name: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Varanasi'] }
  ];

  selectedState: string = '';
  cities: string[] = [];
  selectedCity: string = '';

  onStateChange() {
    console.log(this.registerData.value.state);
    this.cities = this.states.find(state => state.name === this.registerData.value.state)?.cities || [];
    this.registerData.value.city = '';
  }
  onRegister(): void {
    console.log(this.registerData.value);
    this.authService.register(this.registerData.value);
    this.registerData.reset();
  }

  toHome(){
    this.router.navigateByUrl('');
}
}
