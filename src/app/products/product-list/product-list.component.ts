import { Component, Input, inject } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { ProductDetailModalService } from 'src/app/Services/product-detail-modal.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private modalservice:ProductDetailModalService){

  }

  // OR
  // modalservice=inject(ProductDetailModalService);

  shoesData:any[]=[];

  allShoesData:any[]=[
    {
      id: 1,
      name: "Nike Air Force 1 '07 Black & White Drip",
      price: 100.00,
      colors: ["White", "Black"],
      gender: "Men",
      discountedPrice:25,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3f3e7049-5c99-428c-abcd-e246b086f2ed/air-force-1-07-shoes-VWCc04.png",
      isInInventory:true,
      itemsLeft:2,
    },
    {
      id: 2,
      name: "Adidas Yeezy Boost 350 V2 woven design",
      price: 220.00,
      colors: ["Core Black", "Cloud White"],
      gender: "Men",
      imageUrl: "https://crepdogcrew.com/cdn/shop/products/yeezyboostv2slate2.png?v=1662016830&width=2048",
      isInInventory:false,
      itemsLeft:0,
    },
    {
      id: 3,
      name: "Jordan 1 Retro High Off-White Chicago",
      price: 1900.00,
      colors: ["Red", "White", "Black"],
      gender: "Men",
      imageUrl: "https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar01_26606013-c06f-4e2a-a961-b7161036215a.png?v=1718275331&width=2048",
      isInInventory:true,
      itemsLeft:5,
    },
    {
      id: 4,
      name: "Nike SB Dunk Low Travis Scott",
      price: 1500.00,
      colors: ["Sail", "Black", "Desert Sand"],
      gender: "Men",
      imageUrl: "https://crepdogcrew.com/cdn/shop/files/NIKESBDUNKLOWTRAVISSCOTT_SPECIALBOX.jpg?v=1696939959&width=2048",
      isInInventory:false,
      itemsLeft:0,
    },
    {
      id: 5,
      name: "Adidas Ultraboost 21",
      price: 180.00,
      colors: ["Core Black", "Solar Red", "Screaming Orange"],
      gender: "Men",
      discountedPrice:27,
      imageUrl: "https://kdbdeals.com/wp-content/uploads/2023/11/Adidas-Ultraboost-21-Running-Shoes-For-Men-1.jpg",
      isInInventory:true,
      itemsLeft:1,
    },
    {
      id: 6,
      name: "Puma RS-X3",
      price: 110.50,
      colors: ["Puma Black", "Pink Lady", "Puma White"],
      gender: "Women",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rscHZD3uVrGW6Rt8fWnrs8Uck2kAFZlagg&s",
      isInInventory:true,
      itemsLeft:9,
    },
    {
      id: 7,
      name: "Reebok Classic Leather",
      price: 80.00,
      colors: ["White", "Gum"],
      gender: "Unisex",
      imageUrl: "https://media.sivasdescalzo.com/media/catalog/product/G/X/GX8771_sivasdescalzo-Reebok-CLASSIC_LEATHER_1983_VINTAGE-1664284195-1.jpg?quality=70&auto=webp&fit=bounds&width=420",
      isInInventory:true,
      itemsLeft:6,
    },
    {
      id: 8,
      name: "New Balance 574",
      price: 80.00,
      colors: ["Black", "Grey", "White"],
      gender: "Men",
      discountedPrice:50,
      imageUrl: "https://images-cdn.ubuy.co.in/634f3239dcba6368bb76dd11-new-balance-574-classic-leather-shoes.jpg",
      isInInventory:true,
      itemsLeft:3,
    },
    {
      id: 9,
      name: "Vans Old Skool",
      price: 60.00,
      colors: ["Black", "White"],
      gender: "Unisex",
      imageUrl: "https://images.vans.com/is/image/Vans/VN000D3H_NVY_HERO?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0",
      isInInventory:false,
      itemsLeft:0,
    }
  ];





  // for calculating numbers

  all:number=this.allShoesData.length;
  inStock:number=this.allShoesData.filter(p=>p.isInInventory===true).length
  outStock:number=this.allShoesData.filter(p=>p.isInInventory===false).length





  // for showing filtered shoes

  showFilteredProductsFlag:string;

  showFilteredProducts(event){

    this.showFilteredProductsFlag=event
  }



  // for search results
  @Input()
  searchText:string;


  //for view product



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

  onProductSelect(item:any){
    this.selectedProduct=item;
    this.modalservice.openModal(item);
  }

  //Observable

  delay:number=0;



  myObservable=new Observable((observer)=>{


    this.allShoesData.forEach((item)=>{
      setTimeout(()=>{observer.next(item)},this.delay);
      this.delay+=500;
    })

    setTimeout(()=>{observer.complete()},this.delay);

    // observer.error(new Error('Something went wrong'))

  })

  //OR

  // myObs1=of(1,2,3,4,5)

  //OR

  // myObs2=from([1,2,3,4,5])

  //subscribe to the observable

  // next,error,complete
  getAsyncData(){
    this.myObservable.subscribe({
      //this wont work because 'this' will not recognise shoesData and is used for in scope of myObservable
      // next(item){
      //   this.shoesData.push(item);
      // }
      //instead we have to use it like
      next:(item)=>{
        this.shoesData.push(item);
      },
      error(error){
        console.log("error -> ",error.message);
      },
      complete() {
        console.log("All data has been fetched successfully!! ")
      },
    })
  }

  ngOnInit() {
    this.getAsyncData();
  }

}
