import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.html',
  styleUrls: ['./confirmation-dialog.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  row: any;

  public onClose: Subject<any>;

  constructor(public _bsModalRef: BsModalRef) { }

  public ngOnInit(): void {
    this.onClose = new Subject();
  }

  public onConfirm(): void {
    this.onClose.next(this.row);
    this._bsModalRef.hide();
  }

  public onCancel(): void {
    //this.onClose.next(false);
    this._bsModalRef.hide();
  }

}

