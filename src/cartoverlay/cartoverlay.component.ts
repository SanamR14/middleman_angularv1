import { DIALOG_DATA } from '@angular/cdk/dialog';
import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-cartoverlay',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cartoverlay.component.html',
  styleUrl: './cartoverlay.component.scss'
})
export class CartoverlayComponent {
  cartData = inject(DIALOG_DATA);
  ngOnInit(){
  
  }
}
