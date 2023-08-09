import { Component } from '@angular/core';
import { ProductAd } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-first-slider',
  templateUrl: './first-slider.component.html',
  styleUrls: ['./first-slider.component.css']
})
export class FirstSliderComponent {

  items: ProductAd[] = [
    {
      id: 0,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/cc99bfb51b3f5ccd5dfd23984a0a6fb8e12690b5_1689504981.jpg?x-oss-process=image/quality,q_95/format,webp "
    },
    {
      id: 1,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/6226dde386bf52ce1a9a9b545c7f94ac694be42a_1690016419.jpg?x-oss-process=image/quality,q_95/format,webp"
    },
    {
      id: 2,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/e5e697d5cd6bfdc22b10040eddbf4c9bab34b6d1_1689777551.jpg?x-oss-process=image/quality,q_95/format,webp"
    },
    {
      id: 3,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/4f94eb14da9ca338a5d3e8d2d905c0b118e9d2b7_1690180181.jpg?x-oss-process=image/quality,q_95/format,webp"
    }
  ]

  side_ads: ProductAd[] = [
    {
      id: 1,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/e5e697d5cd6bfdc22b10040eddbf4c9bab34b6d1_1689777551.jpg?x-oss-process=image/quality,q_95/format,webp"
    },
    {
      id: 5,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/4f94eb14da9ca338a5d3e8d2d905c0b118e9d2b7_1690180181.jpg?x-oss-process=image/quality,q_95/format,webp"
    }
  ]
}
