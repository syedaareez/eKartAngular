import { Component, Input, inject } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailModalService } from 'src/app/Services/product-detail-modal.service';
import { CartService } from 'src/app/Services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  constructor(private modalservice:ProductDetailModalService){

  }

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

  ngOnInit() {

    // this.modalservice.openModalEvent.subscribe((obj:any)=>{
    //   this.isModalVisible=obj.flag;
    //   this.selectedProduct=obj.product;
    // })
    this.modalservice.openModalSUbject.subscribe((obj:any)=>{
      this.isModalVisible=obj.flag;
      this.selectedProduct=obj.product;
    })
  }

  closeModal(){
    this.isModalVisible =false;
  }

  //for cart services

  cartService=inject(CartService);

  router=inject(Router);

  addToCart(item){
    this.cartService.addToCart(item);
    this.router.navigate(['Cart'])
  }


}



