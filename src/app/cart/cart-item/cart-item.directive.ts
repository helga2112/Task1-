import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[app-cart-item]'
})
export class CartItemDirective {
    @HostBinding('class')
    attrClass = 'headingClass';
    @HostListener('mouseenter', ['$event'])
    enter(event: Event) {
      this.attrClass = 'headingClassOver';
    }
    @HostListener('mouseleave', ['$event'])
    leave(event: Event) {
      this.attrClass = 'headingClass';
    }
}
