import { map } from 'leaflet';
import { SliderItem } from './../../shared/models/product.model';
import { HttpService } from './../../core/services/http.service';
import { takeUntil } from 'rxjs/Operators';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable, Observer } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  basketAmount: number = 0;
  item: any;
  mainImage: string;
  _ngDestroy: Subject<void> = new Subject;
  suggestedItems: any;
  @ViewChild('top') element: ElementRef;
  isLoading: boolean = false;

  // Observable<SliderItem[]>;
  constructor(private route: ActivatedRoute, private _http: HttpService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.item = this.route.params.pipe(
      takeUntil(this._ngDestroy),
      switchMap((route: any) => this._http.getByField("products", "pId", route['id'])))
      .subscribe((res: any) => {
        this.item = res[0];
        this.suggestedItems = this.item.suggesteds;
        this.mainImage = this.item.images[0];
        this.element.nativeElement.scrollIntoView({ behavior: 'smooth' });
        this.isLoading = false;
        this._http.getByField('user_Basket', 'pId', this.item.pId).pipe(takeUntil(this._ngDestroy))
          .subscribe((res: any) => {
            if (res[0])
              // console.log(res)
              this.basketAmount = res[0].amount;
          })
      })



  }

  addToBasket() {
    if (this.basketAmount === 0) {
      let value: any;
      this._http.getByField('explore_products', 'pId', this.item.pId).pipe(takeUntil(this._ngDestroy))
        .subscribe((res: any) => {
          value = res[0];
          delete value.id;
          const result = {
            ...value,
            "amount": 1,
            "pId": this.item.pId.toString()

          };
          this._http.add("user_Basket", result)
            .subscribe((res: any) => {
              this.basketAmount = res.amount;

            })
        })



    }
  }

  ngOnDestroy(): void {
    this._ngDestroy.next();
  }






}
