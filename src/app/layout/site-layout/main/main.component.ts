import { LayoutService } from './../../service/layout.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('sidenav') drawer: any;

  constructor(private LayoutServ: LayoutService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.LayoutServ.toggleDrawer.subscribe(res => this.drawer.toggle())

  }
}
