import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider'
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router : Router){}

  toLoginPage(){
    this.router.navigateByUrl('/login');
  }
}
