import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[productBackgroundColor]'
})
export class ProductBackgroundColorDirective {

  @Input('productBackgroundColor') color: string;
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.color || 'lightgreen');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.style.backgroundColor = color;
  }
}
