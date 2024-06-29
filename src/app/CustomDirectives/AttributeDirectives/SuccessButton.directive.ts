import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector:"[successbtn]"
})
export class SuccessButton implements OnInit{

  constructor(private element:ElementRef,private renderer:Renderer2){

  }

  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor="green";
    // this.element.nativeElement.style.color="white";

    // above is not a good practice since we are directly accessing and updating dom element which makes it vulnerable for attacks and
    //changing it might go against the angular system function as data between component and view is binded
    // hence we use rendered

    this.renderer.setStyle(this.element,"backgroundColor",'green');
    this.renderer.setStyle(this.element,"color",'white');
  }
}
