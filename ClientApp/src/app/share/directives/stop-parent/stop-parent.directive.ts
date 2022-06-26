import { Directive, HostListener, Input, ViewChild, ElementRef } from '@angular/core';
@Directive({ selector: '[stop-parent]' })
export class StopPropagationDirective {
  @HostListener("click", ["$event"])
  public onClick(event: any): void { event.stopPropagation(); }
}
