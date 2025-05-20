import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
  <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items center">
    <img [src]="cart().image" class="w-[50px] h-[50px] object-contain" />
    <div class="flex flex-col">
      <span class="text-md font-bold">{{cart().title}}</span>
      <span class="text-sm">{{cart().price}}</span>
    </div>
    <div class="flex-1">
      <app-button label="Remove" (btnClicked)="cartService.removeFromCart(cart().id)" />
    </div>
  </div>
  `,
  styles: ``
})
export class CartItemComponent {
  cart = input.required<Product>();
  cartService = inject(CartService);
}
