import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public filterValue: BehaviorSubject<string> = new BehaviorSubject("");
  constructor() { }
}
