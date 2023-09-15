import { Component, Input } from '@angular/core';
import { Specify } from 'src/app/shared/models/specify.model';

@Component({
  selector: 'app-specify',
  templateUrl: './specify.component.html',
  styleUrls: ['./specify.component.css']
})
export class SpecifyComponent {
  @Input() items: Specify[];
}
