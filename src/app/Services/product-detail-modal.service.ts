import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailModalService {

  constructor() { }

  modalFlag:boolean;

  // openModalEvent:EventEmitter<any>=new EventEmitter<any>;

  openModalSUbject= new Subject<any>();

  openModal(item:any){
    this.modalFlag=true;
    // this.openModalEvent.emit({flag:this.modalFlag,product:item})
    this.openModalSUbject.next({flag:this.modalFlag,product:item});
  }
  closeModal(){
    this.modalFlag=false;
  }

}


