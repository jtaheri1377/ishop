import { takeUntil } from 'rxjs/Operators';
import { SliderItem } from './../../models/product.model';
import { Observable, Subject } from 'rxjs';
import { Component, Input, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-vertical-cart-slider',
  templateUrl: './vertical-cart-slider.component.html',
  styleUrls: ['./vertical-cart-slider.component.css']
})
export class VerticalCartSliderComponent {

  @Input() title: string;
  @Input() showBasketAmount: boolean;

  @Input() items: any
  @Input() seeAllVisible: boolean = true;
  @Input() tableName: string = "";
  // SliderItem[];


  // ngDoCheck(): void {
  //   this.items.subscribe(res => console.log(res))
  // }

  // ngOnInit(): void {
  //   debugger;
  //   this.items.subscribe((res: any) => {
  //     debugger
  //     this.products = res
  //     console.log(res)
  //   })
  // }

  // ngOnDestroy(): void {
  //   this._destroyed.next();
  // }
  config: SwiperOptions = {
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      1024: {
        slidesPerView: 5
      },
      1280: {
        slidesPerView: 6
      },
      1536: {
        slidesPerView: 7
      }
    }
    // sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7

  }
  //  [
  //   "جوراب زنانه",
  //   "پیراهن مردانه",
  //   "عینک آفتابی",
  //   "شلوار راحتی",
  //   "کت و شلوار",
  //   "کاپشن",
  //   "کاموایی",
  //   "روسری و شال",
  //   "مانتو",
  // ]
}
