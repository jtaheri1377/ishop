import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  items = [
    {
      icon: "calendar2-day-fill",
      text: "ضمانت 7 روزه بازگشت پول"
    },
    {
      icon: "bus-front",
      text: "ارسال سریع کالا"
    },
    {
      icon: "headset",
      text: "ارتباط تلفنی با مشتری"
    },
    {
      icon: "credit-card-2-back-fill",
      text: "پرداخت امن از درگاه بانکی"
    }
  ];

}
