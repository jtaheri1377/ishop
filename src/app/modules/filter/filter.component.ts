import { Component, ViewChild, TemplateRef } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @ViewChild('FilterDialog') filterDialog = {} as TemplateRef<any>;
  dialogRef: any;
  brandFilter: boolean = false;
  colorFilter: boolean = false;
  priceFilter: boolean = true;
  offFilter: boolean = true;
  availableFilter: boolean = true;
  minPrice: number = 12000;
  maxPrice: number = 1500000;
  items = [1, 2, 2, 2, 32132, 1, 321, 321, 3213516, , 5641, 654, 165, 41, 6541, 56]

  constructor(private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(this.filterDialog);

    // .subscribe((result: any) => {
    //   console.log('The City dialog was closed.');
    // });
  }

  CancelDialog() {
    this._bottomSheet.dismiss();
  }

  onSliderChange(event: any) {
    console.log(event)
  }


  onFilterItemClicked(item: any, Unchoose: boolean) {
    if (!Unchoose) {
      let output = this.filter_items[item.id];
      // this.onChoose.emit(output);
    }
    else {
      item.choosen = '';
    }
  }

  filter_items: any = [
    {
      id: 0,
      text: 'نمایش بر اساس',
      choosen: '',
      items:
      [
        {
          id: 0,
          text: 'پرفروش ترین'
        },
        {
          id: 1,
          text: 'ارزانترین'
        },
        {
          id: 2,
          text: 'بیشترین تخفیف'
        },
        {
          id: 3,
          text: 'جدیدترین'
        },
        {
          id: 4,
          text: 'بهترین کیفیت'
        }
      ]
    },
    {
      id: 1,
      text: 'برند ها',
      choosen: '',
      items:
      [
        {
          id: 0,
          text: 'Adidas'
        },
        {
          id: 1,
          text: 'Sinc'
        },
        {
          id: 2,
          text: 'Nike'
        },
        {
          id: 3,
          text: 'Cat'
        },
        {
          id: 4,
          text: 'Caterpillar'
        }
      ]
    },
    {
      id: 2,
      text: 'قیمت',
      choosen: '',
      items:
      [
        {
          id: 0,
          text: 'از 50,000 تومان'
        },
        {
          id: 1,
          text: 'از 100,000 تومان'
        },
        {
          id: 2,
          text: 'از 200,000 تومان'
        },
        {
          id: 0,
          text: 'از 500,000 تومان'
        },
        {
          id: 1,
          text: 'از 1000,000 تومان'
        },
        {
          id: 2,
          text: 'از 1,500,000 تومان'
        }
      ]
    },
    {
      id: 3,
      text: 'رنگ',
      choosen: '',
      items:
      [
        {
          id: 0,
          text: 'آبی'
        },
        {
          id: 1,
          text: 'قرمز'
        },
        {
          id: 2,
          text: 'زرد'
        },
        {
          id: 1,
          text: 'سفید'
        },
        {
          id: 2,
          text: 'مشکی'
        },
      ]
    },
    {
      id: 4,
      text: 'تخفیف و فروش ویژه',
      choosen: '',
      items:
      [
        {
          id: 0,
          text: 'کالا های با تخفیف شگفت انگیز'
        },
        {
          id: 1,
          text: 'کالا های دارای تخفیف'
        }
      ]
    },
    {
      id: 5,
      text: 'موجودیت انبار',
      choosen: '',
      items:
      [
        {
          id: 0,
          text: 'فقط کالاهای موجود'
        }
      ]
    },
  ];
}




@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: '<h1>Hello, </h1>',
  // standalone: true,
  // imports: [MatListModule],
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
