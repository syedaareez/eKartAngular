import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  item:{
    id:number,
    name:string,
    price:number,
    colors:string[],
    gender:string,
    imageUrl:string,
    itemsLeft:number,
    isInInventory:boolean,
    discountedPrice?:number
  }
}
