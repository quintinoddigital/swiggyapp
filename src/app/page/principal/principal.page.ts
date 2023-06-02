import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  public config: SwiperOptions = {
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    centeredSlides: true
  };

  constructor() { }

  ngOnInit() { }

}
