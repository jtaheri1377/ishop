import { LayoutService } from './../../service/layout.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  suggestionBox: boolean = false;
  locationBox: boolean = false;
  suggestionClicked: boolean = false;

  constructor(private LayoutServ: LayoutService) { }

  ngOnInit(): void {
    this.LayoutServ.locationBoxVisible.subscribe(res => { this.locationBox = res })
  }

  toggleSidenav() {
    this.LayoutServ.toggleDrawer.next();
  }
}
