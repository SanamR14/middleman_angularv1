import { Component, inject, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import { CartoverlayComponent } from '../cartoverlay/cartoverlay.component';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { Tile } from '../modals/product.modal';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule,NgIf, MatBadgeModule,CartoverlayComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  badge: any;
  constructor(private productService: ProductService ){
   this.productService.cartValue$.subscribe(val => {
    this.badge = val;
   })
  }
  @Input() home = false;
  // @Input() badge = 0;
   @Input() data =[{}];
  dialog = inject(Dialog);
  
  openCartDialog(){
    this.dialog.open(CartoverlayComponent, {
      minWidth: '500px',
      data: this.data,
    });
  }
}
