import { SwiperOptions } from 'swiper';
import { Observable } from 'rxjs';
import { SliderItem, Slider_H_Item } from './../../models/product.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-cart-slider',
  templateUrl: './horizontal-cart-slider.component.html',
  styleUrls: ['./horizontal-cart-slider.component.css']
})
export class HorizontalCartSliderComponent {

  @Input() title: string;
  @Input() tableName: string = "";
  @Input() items: Slider_H_Item[];

  config: SwiperOptions = {
    slidesPerView: "auto"
    // breakpoints: {
    //   0: {
    //     slidesPerView: 1
    //   },
    //   640: {
    //     slidesPerView: 1
    //   },
    //   768: {
    //     slidesPerView: 3
    //   },
    //   1024: {
    //     slidesPerView: 4
    //   },
    //   1280: {
    //     slidesPerView: 5
    //   },
    //   1536: {
    //     slidesPerView: 6
    //   }
    // }
  }
}
