import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive ( {
  selector: '[bmDoHover]'
} )
export class DoHoverDirective implements OnChanges{

  @HostBinding ( 'style.color' )
  fontColor: string | null = null;

  @Input()
  bmDoHover: string;

  private startColor: string|null;

  constructor ( private elem: ElementRef ) {

    const startColor = this.elem.nativeElement.style.color;
    if ( !!startColor ) {
      this.startColor = startColor;
      this.fontColor = this.startColor;
    }
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    if ( !!changes.bmDoHover ) {
      if ( this.bmDoHover === '') {
        this.bmDoHover = 'red';
      }
    }
  }

  @HostListener ( 'mouseenter' )
  enter () {
    this.fontColor = this.bmDoHover;
  }

  @HostListener ( 'mouseleave' )
  leave () {
    this.fontColor = this.startColor;
  }

}
