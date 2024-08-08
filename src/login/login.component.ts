import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
