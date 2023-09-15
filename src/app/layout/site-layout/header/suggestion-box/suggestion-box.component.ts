import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { takeUntil } from 'rxjs/Operators';
import { HttpService } from './../../../../core/services/http.service';
import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-suggestion-box',
  templateUrl: './suggestion-box.component.html',
  styleUrls: ['./suggestion-box.component.css']
})
export class SuggestionBoxComponent implements OnInit, OnDestroy {
  @Output() selectItem: EventEmitter<string> = new EventEmitter;
  @Output() selectImg: EventEmitter<void> = new EventEmitter;
  @Output() destroyed: Subject<void> = new Subject;
  suggestionBoxImg: any;

  constructor(private http: HttpService) { }
  items: any[];
  // = [
  //   "جوراب زنانه",
  //   "پیراهن مردانه",
  //   "عینک آفتابی",
  //   "شلوار راحتی",
  //   "کت و شلوار",
  //   "کاپشن",
  //   "کاموایی",
  //   "روسری و شال",
  //   "مانتو",
  // ]

  ngOnInit(): void {
    const sources = [
      this.http.getAll("suggestionBoxImg"),
      this.http.getAll("suggestions")
    ]

    forkJoin(sources)
      .pipe(takeUntil(this.destroyed))
      .subscribe((res: any) => {
        this.suggestionBoxImg = res[0][0];
        this.items = res[1];
      })
  }

  onSelectItem(item: string) {
    this.selectItem.emit(item);
  }

  ngOnDestroy(): void {
    this.destroyed.next();
  }
}
