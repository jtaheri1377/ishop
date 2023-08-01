import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  toggleDrawer: Subject<boolean> = new Subject;
  locationBoxVisible: Subject<boolean> = new Subject;

  constructor() { }
}
