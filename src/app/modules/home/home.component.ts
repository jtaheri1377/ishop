import { SliderItem, Slider_H_Item } from './../../shared/models/product.model';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { HttpService } from './../../core/services/http.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  summer: Slider_H_Item[];
  bestSellerItems: SliderItem[];
  monthItems: SliderItem[];
  weekItems: SliderItem[];
  isLoading: boolean = false;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.isLoading = true;
    window.scroll(0, 0);
    const requests = [
      this.http.getAll("within_week"),
      this.http.getAll("within_month"),
      this.http.getAll("best_seller"),
      this.http.getAll("summer")
    ]

    forkJoin(
      this.http.getAll("within_week"),
      this.http.getAll("within_month"),
      this.http.getAll("best_seller"),
      this.http.getAll("summer"))
      .subscribe((res: any) => {
        this.weekItems = res[0];
        this.monthItems = res[1];
        this.bestSellerItems = res[2];
        this.summer = res[3];
        this.isLoading = false;
      })

  }
}
