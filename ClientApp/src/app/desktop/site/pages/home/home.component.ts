import { Component } from '@angular/core';
import { UserService } from '@desktop/admin/services/user.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  constructor(public readonly userService: UserService) {

  }
  images = [
    '/assets/images/banners/Image-01.jpg',
    '/assets/images/banners/Image-02.jpg',
    '/assets/images/banners/Image-03.jpg',
    '/assets/images/banners/Image-04.jpg',
    '/assets/images/banners/Image-05.jpg',
    '/assets/images/banners/Image-06.jpg',
    '/assets/images/banners/Image-07.jpg',
    '/assets/images/banners/Image-08.jpg',
    '/assets/images/banners/Image-09.jpg',
    '/assets/images/banners/Image-10.jpg',
    '/assets/images/banners/Image-11.jpg',
    '/assets/images/banners/Image-12.jpg',
    '/assets/images/banners/Image-13.jpg',
    '/assets/images/banners/Image-14.jpg'
  ]

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    nav: true,
    dots: false,
    margin: 10,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left text-danger"></i>', '<i class="fa fa-angle-right text-danger"></i>'],
    responsive: {
      0: {
        items: 5
      },
      400: {
        items: 6
      },
      740: {
        items: 6
      },
      940: {
        items: 6
      }
    },
  }
  test() {
    console.log("click");
  }
}

