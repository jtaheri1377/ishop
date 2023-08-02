import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-cart-slider',
  templateUrl: './horizontal-cart-slider.component.html',
  styleUrls: ['./horizontal-cart-slider.component.css']
})
export class HorizontalCartSliderComponent {

  items: string[] = [
    "جوراب زنانه",
    "پیراهن مردانه",
    "عینک آفتابی",
    "شلوار راحتی",
    "کت و شلوار",
    "کاپشن",
    "کاموایی",
    "روسری و شال",
    "مانتو",
  ]
}
