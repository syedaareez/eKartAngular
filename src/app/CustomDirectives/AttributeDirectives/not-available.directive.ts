import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNotAvailable]'
})
export class NotAvailableDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @Input('appNotAvailable') set fade(check:boolean){
    if(check){
      this.renderer.addClass(this.element.nativeElement,'product-not-available');
    }
  }

}
