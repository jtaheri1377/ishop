import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { takeUntil } from 'rxjs/Operators';
import { HttpService } from './../../../../core/services/http.service';
import { SliderItem } from './../../../models/product.model';
import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-v-cart',
  templateUrl: './v-cart.component.html',
  styleUrls: ['./v-cart.component.css']
})
export class VCartComponent implements OnInit, OnDestroy {

  @Input() item: SliderItem;
  @Input() showBasketAmount: boolean = false;
  destroyed: Subject<void> = new Subject;
  basketAmount: number = 0;


  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.router.url == '/basket') {
      this.basketAmount = this.item.amount;
      this.showBasketAmount = true
    }
    else {
      this.http.getByField('user_Basket', 'pId', this.item.pId).pipe(takeUntil(this.destroyed))
        .subscribe((res: any) => {
          if (res[0])
            this.basketAmount = res[0].amount;
        })
    }

    // this.router.events.subscribe((res: any) => {
    //   console.log(
    //     this.route.snapshot.url
    //   )
    // })


  }

  ngOnDestroy(): void {
    this.destroyed.next();
  }

  addToBasket() {
    if (this.basketAmount === 0) {
      const value: any = { ...this.item };
      delete value.id;
      const result = {
        ...value,
        "amount": 1,
        "pId": this.item.pId.toString()
      };

      this.http.add("user_Basket", result)
        .subscribe(res => { })
    }
  }

  increase() {
    this.item.amount++;
    this.http.updateByField("user_Basket", "pId", this.item.pId, this.item)
      .subscribe((item: any) => {
        this.item = item
      })
  }

  decrease() {
    this.item.amount--;
    if (this.item.amount > 0)
      this.http.updateByField("user_Basket", "pId", this.item.pId, this.item)
        .subscribe((item: any) => {
          this.item = item
        })
    else
      this.http.deleteByField("user_Basket", "pId", this.item.pId)
        .subscribe((item: any) => { })
  }

  scrollTOTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}

