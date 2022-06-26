import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommingSoonService {

  constructor() { }

  /** Open comming-soon */
  public open(): void {
    var elm = document.createElement('button');
    elm.id = 'coomingSoonBtn';
    elm.setAttribute('data-bs-toggle', 'offcanvas');
    elm.setAttribute('data-bs-target', '#commingSoonCanvas');
    document.body.appendChild(elm);
    elm.click();
    document.body.removeChild(elm);
  }
}
