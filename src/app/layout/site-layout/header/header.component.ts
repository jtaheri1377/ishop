import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  suggestionBox: boolean = false;
  locationBox: boolean = false;
  suggestionClicked: boolean = false;




  suggestionVisible(InputClicked: boolean) {
    if (InputClicked) {
      this.suggestionBox = true;
    } else
      if (this.suggestionClicked) {
        this.suggestionBox = true;
        this.suggestionClicked = false;
      } else
        this.suggestionBox = false;

  }
}
