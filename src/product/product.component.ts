import { Component } from '@angular/core';
import { Tile } from '../modals/product.modal';
import { ProductService } from './product.service';
import { NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { TileComponent } from '../tile/tile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDivider } from '@angular/material/divider';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, HeaderComponent,TileComponent,FlexLayoutModule,MatDivider,MatButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  selectedProduct: Tile | null = null;
 

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    // Subscribe to selected product from the service
    this.productService.selectedProduct$.subscribe((product) => {
      this.selectedProduct = product;
    });
  }
  addToBasket(product: Tile) {
    let productRoute = product.productName.trim();
    this.productService.setSelectedProduct(product);
    // this.router.navigate(['/',productRoute]);
    this.router.navigate(['/productDetails'])
  }
}
