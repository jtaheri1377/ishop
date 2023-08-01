import { ProductAd, CategoryAd } from './../../../models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent {

  items: CategoryAd[] = [
    {
      id: 0,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/cc99bfb51b3f5ccd5dfd23984a0a6fb8e12690b5_1689504981.jpg?x-oss-process=image/quality,q_95/format,webp ",
      name: "لوازم خانگی"
    },
    {
      id: 1,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/6226dde386bf52ce1a9a9b545c7f94ac694be42a_1690016419.jpg?x-oss-process=image/quality,q_95/format,webp",
      name: "لوازم تحریر"
    },
    {
      id: 2,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/e5e697d5cd6bfdc22b10040eddbf4c9bab34b6d1_1689777551.jpg?x-oss-process=image/quality,q_95/format,webp",
      name: "لوازم برقی"
    },
    {
      id: 3,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/4f94eb14da9ca338a5d3e8d2d905c0b118e9d2b7_1690180181.jpg?x-oss-process=image/quality,q_95/format,webp",
      name: "لوازم آشپزخانه"
    }
  ]
}
