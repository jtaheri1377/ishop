import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  images: string[] = [
    "./../../../assets/images/watch1.jpg",
    "./../../../assets/images/watch2.jpg",
    "./../../../assets/images/watch3.jpg",
    "./../../../assets/images/watch3.jpg",
    "./../../../assets/images/watch3.jpg",
    "./../../../assets/images/watch3.jpg",
    "./../../../assets/images/watch4.jpg"
  ];
  mainImage: string;
  specifies: any = [
    {
      "id": 0,
      "label": "کالا",
      "value": "ساعت مچی مردانه XS103"
    },
    {
      "id": 1,
      "label": "رنگ",
      "value": "مشکی"
    },
    {
      "id": 2,
      "label": "قیمت",
      "value": "1350000"
    },
    {
      "id": 3,
      "label": "ضد آب",
      "value": "دارد"
    },
    {
      "id": 4,
      "label": "امکانات",
      "value": "بلوتوث و دوربین"
    },
    {
      "id": 5,
      "label": "سری",
      "value": "ََAX33"
    },
    {
      "id": 6,
      "label": "کشور ساخت",
      "value": "ایران"
    },
    {
      "id": 7,
      "label": "ضمانت",
      "value": "سه ساله"
    }
  ];

  ngOnInit(): void {
    this.mainImage = this.images[0];
  }

}
