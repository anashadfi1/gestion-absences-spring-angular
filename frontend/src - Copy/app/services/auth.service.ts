import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = 'http://localhost:8090/api/users'; // Replace with your Spring API URL
  private currentUser: User = {} as User; // Initialize currentUser

  constructor(private http: HttpClient) {}

  login(user:any): Observable<any> {
    
    return this.http.post<any>(`${this.apiUrl}/login`,user);
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  isAdmin(): boolean {
    return this.isLoggedIn() && this.currentUser.role === 'ADMIN';
  }

  isProfessor(): boolean {
    return this.isLoggedIn() && this.currentUser.role === 'PROF';
  }
}
