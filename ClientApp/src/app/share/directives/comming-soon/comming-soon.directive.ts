import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

import * as _shareSvc from '@share/services';

@Directive({
  selector: '[appCommingSoon]',
})
export class CommingSoonDirective {

  constructor(private readonly renderer: Renderer2,
    private readonly el: ElementRef,
    private readonly commingSoonSvc: _shareSvc.CommingSoonService) { }

  @HostListener('click', ['$event']) onClick($event) {
    this.commingSoonSvc.open();
  }
}
