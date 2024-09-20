import { Component } from '@angular/core';
import { Tile } from '../modals/product.modal';
import { ProductService } from './product.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  selectedProduct: Tile | null = null;
 

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Subscribe to selected product from the service
    this.productService.selectedProduct$.subscribe((product) => {
      this.selectedProduct = product;
    });
  }
}
