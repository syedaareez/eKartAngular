import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @Input('appHighlight') toInject:boolean;

  @HostListener('mouseenter') onMouseEnter(){
    if(this.toInject){
      this.renderer.addClass(this.element.nativeElement,'highlightedCard')
    }

  }
  @HostListener('mouseout') onMouseExit(){
    if(this.toInject){
      this.renderer.removeClass(this.element.nativeElement,'highlightedCard')
    }
  }



  // @HostBinding('style.backgroundColor') bgc="red";


}
