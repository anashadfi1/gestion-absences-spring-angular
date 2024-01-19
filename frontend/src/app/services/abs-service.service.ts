import { Injectable } from '@angular/core';
import { Absence } from '../module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AbsServiceService {

  url: string = 'http://localhost:8090/api/absence/';

  constructor(private http: HttpClient) {}

  public getAllAbs(): Observable<Absence[]> {
    return this.http.get<Absence[]>(`${this.url}all`);
  }

  public addAbsence(absence: Absence): Observable<Absence[]> {
    return this.http.post<Absence[]>(`${this.url}add`, absence);
  }

  public deleteAbsence(absence: Absence): Observable<Absence> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: absence,
    };
  

    return this.http.delete<Absence>(`${this.url}delete`, options);
  }
  public findById(id: number): Observable<Absence> {
    return this.http.get<Absence>(`${this.url}byId/${id}`).pipe(
      tap(response => console.log('findById response:', response))
    );
  }
}