import { Directive,ElementRef, HostBinding, HostListener, Input,  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangefontsize]',
  standalone: true
})
export class ChangefontsizeDirective {

  @HostBinding('style.fontSize') fontSize!:string;
  @Input('appChangefontsize') startingFontSize!:string;
  @Input('clkfont') onclickFontSize!:string;

//   constructor(public elem:ElementRef, public renderer:Renderer2)  {   } 
constructor() {}

  ngOnInit()
  {
    this.fontSize=this.startingFontSize;
  }

  @HostListener('click')
  onClick()
  {
    this.fontSize=this.onclickFontSize;
  }


}
