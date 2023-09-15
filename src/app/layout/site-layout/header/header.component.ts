import { HttpService } from './../../../core/services/http.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FilterService } from './../../../modules/filter/service/filter.service';
import { takeUntil } from 'rxjs/Operators';
import { LayoutService } from './../../service/layout.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('searchForm') searchForm: NgForm;
  // ElementRef<NgForm> = {} as ElementRef;
  // ElementRef<any> = {} as ElementRef;
  // NgForm;
  //

  destroyed: Subject<void> = new Subject;
  suggestionBox: boolean = false;
  locationBox: boolean = false;
  suggestionClicked: boolean = false;
  basketAmount: number = 0;
  suggestionItem: string = "";

  constructor(
    private LayoutServ: LayoutService,
    private filterServ: FilterService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpService
  ) { }

  ngOnInit(): void {
    const subjects = [
      ,
      ,
    ];

    this.LayoutServ.locationBoxVisible.pipe(takeUntil(this.destroyed))
      .subscribe((res: any) => {
        this.locationBox = res;
      })

    this.router.events.pipe(takeUntil(this.destroyed))
      .subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          // Hide progress spinner or progress bar
          // this.currentRoute = event.url;
          if (event.url !== "/s") {
            this.filterServ.filterValue.next("");
            this.suggestionItem = "";
          }
        }
      })

    this.http.getAll("user_Basket")
      .pipe(takeUntil(this.destroyed))
      .subscribe((res: any) => {
        this.basketAmount = res.length;
      })
  }

  toggleSidenav() {
    this.LayoutServ.toggleDrawer.next();
  }

  onSearch(form: NgForm) {
    // if (form.value.searchValue.trim() == "")
    //   return;
    this.filterServ.filterValue.next(form.value.searchValue);
    this.suggestionBox = false;
    this.router.navigate(['/s'], { relativeTo: this.route })
  }

  onSelectSuggestions(value: string) {
    this.searchForm.value.searchValue = this.suggestionItem = value;
    this.searchForm.ngSubmit.next();
    this.onSearch(this.searchForm);
  }


  onSelectImg() {
    this.suggestionBox = false;
  }

  ngOnDestroy(): void {
    this.destroyed.next();
  }
}
