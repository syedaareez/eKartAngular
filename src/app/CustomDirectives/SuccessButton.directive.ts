import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector:"[successbtn]"
})
export class SuccessButton implements OnInit{
  constructor(private element:ElementRef){

  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor="green";
    this.element.nativeElement.style.color="white";
  }
}
