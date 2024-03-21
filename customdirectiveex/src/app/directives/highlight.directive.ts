import { Directive, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit, OnChanges,OnDestroy {

  @Input('initcolor') color1: string;
  @Input() color2: string;

  constructor(public elem: ElementRef, public renderer: Renderer2) {
    this.color1 = 'yellow';
    this.color2 = 'cyan';
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', this.color1);
    // this.renderer.setProperty(this.elem.nativeElement, 'innerHTML', 'I am Divyanshu');
    console.log('directive highlight constuctor called...'+this.color1);
  }
  

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HIGHLIGHT directive  onchanges lifecycle method called....' + this.color1);
    //check on @Input properties monitor them here
  }

  ngOnInit() {
    console.log('ngOnIt of highlight directive called...' + this.color1);
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', this.color1);
    this.renderer.setProperty(this.elem.nativeElement, 'innerHTML', 'I am Divyanshu');
  }

  @HostListener('click')
  mousehover(): void {
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', this.color2);
    this.renderer.setProperty(this.elem.nativeElement, 'innerHTML', 'I am Div');
  }

  ngOnDestroy(): void {
    console.log('app component on destroy called ...');
  }

}
