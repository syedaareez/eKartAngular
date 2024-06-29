import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomBotton]'
})
export class RandomBottonDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  // @Input('appRandomBotton') border:string="2px solid red";
  // @Input() textColor:string="blue";

  // or

  @Input('appRandomBotton') obj:{border:string, textColor:string};

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement,"color",this.obj.textColor);
    this.renderer.setStyle(this.element.nativeElement,"border",this.obj.border);
  }


}
