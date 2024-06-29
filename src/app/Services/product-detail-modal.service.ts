import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailModalService {

  constructor() { }

  modalFlag:boolean;

  openModalEvent:EventEmitter<any>=new EventEmitter<any>;

  openModal(item:any){
    this.modalFlag=true;
    this.openModalEvent.emit({flag:this.modalFlag,product:item})
  }
  closeModal(){
    this.modalFlag=false;
  }

}
