import { Component } from '@angular/core';

@Component({
  selector: 'app-suggestion-box',
  templateUrl: './suggestion-box.component.html',
  styleUrls: ['./suggestion-box.component.css']
})
export class SuggestionBoxComponent {

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
