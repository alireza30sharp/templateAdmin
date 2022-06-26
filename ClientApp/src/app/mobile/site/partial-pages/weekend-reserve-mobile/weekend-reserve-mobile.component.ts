import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _srv from "@services/index";
import * as _stores from "@stores/index";
import * as _mls from "@models/index";
import { Router } from '@angular/router';
import { WeekendReserveComponent } from '../../../../desktop/site/partial-pages';

@Component({
  selector: 'app-weekend-reserve-mobile',
  templateUrl: './weekend-reserve-mobile.component.html',
  styleUrls: ['./weekend-reserve-mobile.component.scss']
})
export class WeekendReserveMobileComponent extends WeekendReserveComponent {
  @Input() week: number = 1;

  constructor(
    public override modalService: NgbModal,
    public override calendarDate: _srv.UtilitiesService,
    public override router: Router,
  ) {
    super(modalService, calendarDate, router);
  }
}
