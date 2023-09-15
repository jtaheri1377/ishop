import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { SliderAd } from 'src/app/shared/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { Observable, of } from 'rxjs';
import { filter, map, mergeMap, flatMap } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // baseUrl = "https://supabase.com/dashboard/project/lpleyftaaqaajirzvfsa/";
  constructor(private http: HttpClient) { }

  getAll<T>(table: string): Observable<T> {
    return this.http.get<T>(environment.apiEndpoint + table);
  }

  getByField<T>(table: string, field: string, value: string): Observable<T> {
    return this.http.get<T>(environment.apiEndpoint + table + "?" + field + "=" + value);
  }

  add<T>(table: string, item: any): Observable<T> {
    return this.http.post<T>(environment.apiEndpoint + table, item);
  }

  updateByField<T>(table: string, field: string, value: string, item: any): Observable<T> {
    //
    let result: any = this.http.get<T>(environment.apiEndpoint + table + "?" + field + "=" + value)
      .pipe(
      switchMap((res: any) => {
        return this.http.put<T>(environment.apiEndpoint + table + "/" + res[0].id, item);
      }));
    return result;
  }

  deleteByField<T>(table: string, field: string, value: string): Observable<T> {
    //
    let result: any = this.http.get<T>(environment.apiEndpoint + table + "?" + field + "=" + value)
      .pipe(
      switchMap((res: any) => {
        return this.http.delete<T>(environment.apiEndpoint + table + "/" + res[0].id);
      }));
    return result;
  }

  // .pipe(flatMap((res: any) => {
  // id = res[0].id;
  // result.toPromise();
  // }))
  // .subscribe((response: any) => { return response})


  //  ).subscribe((result: any) => {
  //  return this.http.get<T>(environment.apiEndpoint + table + "/" + id, item);
  // });
  // return obs
  // return forkJoin()

  filterContain<T>(table: string, field: string, value: string): Observable<T> {
    return this.http.get<T>(environment.apiEndpoint + table).pipe(
      map((arr: any) =>
        arr.filter((res: any) => { return res[field].indexOf(value) !== -1 })
      )
    );
  }
}
