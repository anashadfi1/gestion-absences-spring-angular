// import { any } from './../module'; // Changed from Student to any
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Etudiant } from '../module';
@Injectable({
  providedIn: 'root'
})
export class EtdServiceService {
  private url: string = 'http://localhost:8090/api/students/';

  constructor(private http: HttpClient) {}

  public allStudents(): Observable<Etudiant[]> { // Changed from Student to Etudiant
    return this.http.get<Etudiant[]>(`${this.url}all`);
  }

  public addStudent(student: Etudiant): Observable<Etudiant> { // Changed from Student to Etudiant
    return this.http.post<Etudiant>(`${this.url}add`, student);
  }

  public getStduentById(id: number): Observable<Etudiant> { // Changed from Student to Etudiant
    return this.http.get<Etudiant>(`${this.url}id/${id}`);
  }
  public getStudentByGrp(grp: string): Observable<Etudiant[]> { // Changed to Etudiant[]
    return this.http.get<Etudiant[]>(`${this.url}id/${grp}`);
  }

  public updateStudent(id: number, student: Etudiant): Observable<Etudiant> { // Changed from Student to Etudiant
    return this.http.put<Etudiant>(`${this.url}id/${id}`, student);
  }
  public updatePresence(id:number):Observable<any>{
    return this.http.put<any>(`${this.url}togglePresence/${id}`, id);
  }

  public deleteStudent(student: Etudiant): Observable<Etudiant> { // Changed from Student to Etudiant
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: student,
    };

    return this.http.delete<Etudiant>(`${this.url}delete`, options);
  }
}
