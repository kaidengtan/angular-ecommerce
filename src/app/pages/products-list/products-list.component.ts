import { Component, inject, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
        <app-product-card [product]="product"/>
      }
    </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  async ngOnInit(){
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    this.products.set(data);
  }
  products = signal<Product[]>([]);
  
  // products = signal<Product[]>([
  //   {
  //     id: 1,
  //     title: 'Product1',
  //     price: 109.95,
  //     image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/472517/item/goods_00_472517_3x4.jpg?width=494',
  //     stock: 10,
  //   },
  //   {
  //     id: 2,
  //     title: 'Product2',
  //     price: 10.95,
  //     image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/425974/item/goods_09_425974_3x4.jpg?width=494',
  //     stock: 5,
  //   },
  //       {
  //     id: 3,
  //     title: 'Product3',
  //     price: 10111.95,
  //     image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_55_455359_3x4.jpg?width=494',
  //     stock: 0,
  //   }
  // ]);
}
