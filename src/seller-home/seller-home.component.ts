import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.scss'
})
export class SellerHomeComponent {

}
