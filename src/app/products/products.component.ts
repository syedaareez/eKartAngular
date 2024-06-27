import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  searchText:string;

  @ViewChild("productListComponent") productListComponentRef: ProductListComponent;

  searchTextCameFromSearchComponent(event:any){
    this.searchText=event
  }
}
