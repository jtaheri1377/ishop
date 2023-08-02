import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-cart-slider',
  templateUrl: './vertical-cart-slider.component.html',
  styleUrls: ['./vertical-cart-slider.component.css']
})
export class VerticalCartSliderComponent {

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
