import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  selectedProduct:{
    id:number,
    name:string,
    price:number,
    colors:string[],
    gender:string,
    imageUrl:string,
    itemsLeft:number,
    isInInventory:boolean,
    discountedPrice?:number
  };

  isModalVisible: boolean ;

  @Input() productListComponent:ProductListComponent = undefined;

  ngOnInit() {
    this.isModalVisible=true;
    this.selectedProduct=this.productListComponent.selectedProduct;
  }

}



