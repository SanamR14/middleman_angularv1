import { DIALOG_DATA } from '@angular/cdk/dialog';
import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cartoverlay',
  standalone: true,
  imports: [NgFor,NgIf,MatCardModule],
  templateUrl: './cartoverlay.component.html',
  styleUrl: './cartoverlay.component.scss'
})
export class CartoverlayComponent {
  cartData = inject(DIALOG_DATA);
  ngOnInit(){
  console.log(this.cartData);
  }
}
