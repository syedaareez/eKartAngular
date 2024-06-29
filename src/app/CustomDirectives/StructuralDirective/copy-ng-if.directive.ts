import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCopyNgIf]'
})
export class CopyNgIfDirective {

  constructor(private template:TemplateRef<any>,private view:ViewContainerRef) { }

  @Input('appCopyNgIf') set ngIfFunc(condition:boolean){
    if(condition){
      console.log(this.template,this.view)
      this.view.createEmbeddedView(this.template);
    }
    else{
      this.view.clear();
    }
  }

}


