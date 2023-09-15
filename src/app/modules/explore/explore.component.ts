import { switchMap } from 'rxjs/internal/operators/switchMap';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../../core/services/http.service';
import { Component, Input, OnInit } from '@angular/core';

import { SliderItem, CategoryAd } from './../../shared/models/product.model';
import { map } from 'rxjs/Operators';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  @Input() title: string = "لیست محصولات";
  @Input() items: SliderItem[];
  isLoading: boolean = false;


  constructor(
    private _http: HttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.pipe(
      switchMap((param: any) => {
        if (param['id']) {
          this._http.getByField("titles", "id", param['id'])
            .subscribe((res: any) =>
              this.title = res[0]['name']
            )
          return this._http.getByField("explore_products", "categoryId", param['id'])
        }
        else {
          return this._http.getAll(param['table'])
        }
      }
      )
    ).subscribe((response: any) => {
      // console.log(response)
      this.items = response
      this.isLoading = false;


    })
  }

}
