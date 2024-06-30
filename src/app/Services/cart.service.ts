import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Array<any> = [];

  constructor() { }

  changeInCart=new Subject<any>()

  getCartItems(): Array<any> {
    return this.cartItems;
  }

  addToCart(item: any): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      if (existingItem.quantity < existingItem.itemsLeft) {
        existingItem.quantity += 1;
      }
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
    this.changeInCart.next(true);
  }

  removeFromCart(item:any): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
    this.changeInCart.next(false);
  }

  changeInQuantity(item:{id:number,action:string}):void{
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if(item.action==='increase'){

      if (existingItem.quantity < existingItem.itemsLeft) {
        existingItem.quantity += 1;
      }
    }else{
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    }
    this.changeInCart.next(false);

  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => {
      const price = item.discountedPrice
        ? item.price - (item.price * item.discountedPrice / 100)
        : item.price;
      return total + (price * item.quantity);
    }, 0);
  }

}
