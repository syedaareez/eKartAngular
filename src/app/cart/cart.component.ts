import { Component, inject } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems:any;

  constructor() { }

  cartService=inject(CartService);


  ngOnInit(){
    this.cartItems=this.cartService.getCartItems()

    this.cartService.changeInCart.subscribe((res)=>{
      this.cartItems=this.cartService.getCartItems()
    })
  }

  calculateTotal(){
    return this.cartService.calculateTotal()
  }

  removeItem(item){
    this.cartService.removeFromCart(item);
  }

  decreaseQuantity(item){
    this.cartService.changeInQuantity({id:item.id,action:'decrease'})
  }

  increaseQuantity(item){
    this.cartService.changeInQuantity({id:item.id,action:'increase'})
  }


}
