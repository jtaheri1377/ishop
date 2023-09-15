import { SliderAd } from 'src/app/shared/models/product.model';
import { HttpService } from './../../../core/services/http.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/Operators';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-first-slider',
  templateUrl: './first-slider.component.html',
  styleUrls: ['./first-slider.component.css']
})
export class FirstSliderComponent implements OnInit, OnDestroy {

  destroySubject: Subject<void> = new Subject;
  items: Observable<SliderAd[]>;
  side_ads: SliderAd[];
  config: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    navigation: true,
    virtual: {
      enabled: true
    },
    pagination: {
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  };

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.items = this.http.getAll("firstSlider");
    this.http.getAll("side_ads")
      .pipe(takeUntil(this.destroySubject))
      .subscribe((res: any) => this.side_ads = res);
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
  }

}
