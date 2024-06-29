import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Array<any> = [{
    id: 1,
    name: "Nike Air Force 1 '07 Black & White Drip",
    price: 100.00,
    colors: ["blue", "Black","green"],
    gender: "Men",
    discountedPrice: 25,
    imageUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3f3e7049-5c99-428c-abcd-e246b086f2ed/air-force-1-07-shoes-VWCc04.png",
    isInInventory: true,
    itemsLeft: 2,
  },];

  constructor() { }

  changeInCart=new Subject<any>()

  getCartItems(): Array<any> {
    return this.cartItems;
  }

  addToCart(item: any): void {
    this.cartItems.push(item);
    this.changeInCart.next(true);
  }

  removeFromCart(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.changeInCart.next(true);
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
