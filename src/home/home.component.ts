import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { TileComponent } from '../tile/tile.component';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,SearchComponent,TileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  
  ngOnInit(){
    
  }
}
