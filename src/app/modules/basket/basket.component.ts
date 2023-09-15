import { takeUntil } from 'rxjs/Operators';
import { SliderItem } from './../../shared/models/product.model';
import { HttpService } from './../../core/services/http.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  items: SliderItem[];
  @ViewChild('top') element: ElementRef;
  _destroyed: Subject<void> = new Subject;

  constructor(
    private _http: HttpService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this._http.getAll('user_Basket')
      .pipe(takeUntil(this._destroyed))
      .subscribe((response: any) => {
        this.items = response;
        this.isLoading = false;
        this.element.nativeElement.scrollIntoView({ behavior: 'smooth' });
      })
  }

  ngOnDestroy(): void {
    this._destroyed.next();
  }

}
