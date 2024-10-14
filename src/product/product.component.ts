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
import { FeaturedComponent } from '../featured/featured.component';
import { SearchComponent } from '../search/search.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, HeaderComponent,TileComponent,FlexLayoutModule,MatDivider,MatButtonModule,FeaturedComponent,SearchComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  selectedProduct: Tile | null = null;
 
  cartProduct:any[] =[];
   productCount = 0;
   guest = true;
   

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    if(this.router.url == '/home/productDetails'){
     this.guest = false;
    }
    // Subscribe to selected product from the service
    this.productService.selectedProduct$.subscribe((product) => {
      this.selectedProduct = product;
     
    });
  }
  addToBasket(product: Tile) {
    //this.productService.setCartProduct(product);
    this.productService.cartValue$.subscribe(value =>{
      this.productCount = value;
    });
    this.productService.cartProduct$.subscribe(value =>{
      this.cartProduct = value;
    });
    this.cartProduct.push(product);
    this.productService.cartProductSubject.next(this.cartProduct);
    this.productService.cartValueSubject.next(this.productCount +1);
  }
}
