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

    // this.cartService.changeInCart.subscribe((res)=>{
    //   if(res){
    //     this.cartItems=this.cartService.getCartItems()
    //   }
    // })
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => {
      const price = item.discountedPrice
        ? item.price - (item.price * item.discountedPrice / 100)
        : item.price;
      return total + price;
    }, 0);
  }


}
