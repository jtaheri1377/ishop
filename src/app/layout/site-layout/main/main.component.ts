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

}
