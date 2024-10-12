import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-cartoverlay',
  standalone: true,
  imports: [],
  templateUrl: './cartoverlay.component.html',
  styleUrl: './cartoverlay.component.scss'
})
export class CartoverlayComponent {
  data = inject(DIALOG_DATA);
  ngOnInit(){
    console.log(this.data);
  }
}
