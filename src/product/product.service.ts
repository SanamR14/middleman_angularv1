import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tile } from '../modals/product.modal';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public selectedProductSubject = new BehaviorSubject<Tile | null>(null);
  selectedProduct$ = this.selectedProductSubject.asObservable();

  public cartValueSubject = new BehaviorSubject(0);
  cartValue$ = this.cartValueSubject.asObservable();

  public cartProductSubject = new BehaviorSubject<any>([]);
  cartProduct$ = this.cartProductSubject.asObservable();


  constructor() {}

  // Method to update the selected product
  setSelectedProduct(product: Tile) {
    this.selectedProductSubject.next(product);
  }

  // setCartProduct(value:any) {
  //   this.cartProductSubject.next(value);
  // }
}