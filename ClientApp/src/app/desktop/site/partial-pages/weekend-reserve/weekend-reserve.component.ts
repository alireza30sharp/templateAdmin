import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import * as _srv from "@services/index";
import * as _stores from "@stores/index";
import * as _mls from "@models/index";
import { Router } from '@angular/router';
@Component({
  selector: 'app-weekend-reserve',
  templateUrl: './weekend-reserve.component.html',
  styleUrls: ['./weekend-reserve.component.scss']
}) 
export class WeekendReserveComponent implements OnInit {

  constructor(
    public modalService: NgbModal,
    public readonly calendarDate: _srv.UtilitiesService,
    public readonly router: Router,

  ) { }
  weekendReserve = new Array<_mls.OrderWeekly>();
  filter: any;
  listUnix: any;
  ngOnInit() {
    this.calendarDate.genareteWeekDay().subscribe(res => {

      this.weekendReserve = res.listUnix.map(f => {
        
        return {
          isHoliday: false,
          shiftType: 0,    
          Date: f,
          MainFood:"test",
        }


      })

      debugger

    })
    //تولید از تاریخ تا تاریخ و روز های هفته
   
  }
 




}
