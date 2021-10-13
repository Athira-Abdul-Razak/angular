import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidation]'
})

export class ValidationDirective {
  @HostBinding('class.isinvalid') isinvalid = true;
  constructor(private el: ElementRef) { }

  @HostListener('focusout', ['$event']) onFocusOut(event: Event) {
    this.isinvalid = this.el.nativeElement.contains(event.target) ? !this.isinvalid : false;
    if (!this.el.nativeElement.value) {
      this.el.nativeElement.classList.add('is-invalid');
    }
  }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    if (!this.el.nativeElement.value) {
      this.el.nativeElement.classList.add('is-invalid');
    }
    else {
      this.el.nativeElement.classList.remove('is-invalid');

    }
  }
}