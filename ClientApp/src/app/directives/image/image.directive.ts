import { Directive, HostListener, Input, ViewChild, ElementRef, OnInit, OnChanges } from '@angular/core';
import * as _srv from "@services/index";

@Directive({
  selector: 'img[default]',
  host: {
    '(error)': 'updateUrl()',
    '[src]': 'src'
  }
})
export class DefaultImage implements OnChanges {
  @Input() src?: string | undefined;
  @Input() default!: string;


  constructor(private readonly utilSvc: _srv.UtilitiesService,
    private readonly fileSvc: _srv.UploadService
  ) { }

  ngOnChanges(): void {
    if (!!this.src && this.src.length > 30 && this.utilSvc.isValidGuid(this.src)) {
      this.loadImageByGUID();
    }
  }
  /** Load image by GUID */
  private loadImageByGUID(): void {
    //this.fileSvc.gatFileByGuid(this.src).subscribe((response: string) => {
    //  this.src = response;
    //})
  }

  public updateUrl(): void {
    this.src = this.default;
  }
}
