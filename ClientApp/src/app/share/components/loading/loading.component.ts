import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as _shareSvc from "@share/services";

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class Loading implements OnInit {

  @Input() showLoading: boolean = true;

  constructor(
    private readonly router: Router,
    public readonly loadingService: _shareSvc.LoadingService) { }

  ngOnInit(): void {

  }


}
