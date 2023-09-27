import { HttpService } from './../../../core/services/http.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LayoutService } from './../../service/layout.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('sidenav') drawer: any;
  constructor(private LayoutServ: LayoutService) { }
  ngOnInit(): void {
    this.LayoutServ.toggleDrawer.subscribe(res => this.drawer.toggle())
  }

  drawerItems = [
    {
      route: '/',
      name: 'خانه',
      icon: 'bi bi-house-fill'
    },
    {
      route: '/basket',
      name: 'سبد خرید',
      icon: 'bi bi-cart3 '
    },
    {
      route: '/explore/00',
      name: 'لباس مردانه',
      icon: 'fa fa-male'
    },
    {
      route: '/explore/01',
      name: 'لباس زنانه',
      icon: 'fa fa-female'
    },
    {
      route: '/explore/02',
      name: 'لباس کودک و نوزاد',
      icon: 'fa fa-child'
    },
    {
      route: '/explore/03',
      name: 'کیف',
      icon: 'fa fa-shopping-bag'
    },
    {
      route: '/explore/04',
      name: 'کفش',
      icon: 'bi bi-person-fill'
    },
    {
      route: '/explore/05',
      name: 'لباس ورزشی',
      icon: 'bi bi-circle-half'
    },
    {
      route: '/explore/06',
      name: 'کت و شلوار',
      icon: 'bi bi-person-heart'
    },
    {
      route: '/explore/07',
      name: 'لباس خواب و راحتی',
      icon: 'bi bi-stars'
    },
    {
      route: '/explore/08',
      name: 'اکسسوری',
      icon: 'bi bi-watch'
    }

  ]

}
