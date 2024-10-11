import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider'
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule, MatIcon, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() login = false;
  @Input() sell = false;

  @Input() userName = false;
  @Input() user = false;
  @Input() divider = true;

  constructor(private router : Router){}

  ngOnInit(){
   
  }
  toLoginPage(){
    this.router.navigateByUrl('/login');
  }
  toHome(){
    this.router.navigateByUrl('');
  }
}
