import { Injectable } from '@angular/core';
import { Professor } from '../module';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfServiceService {

  professors: Professor[]=[];


  private profGroupSubject = new BehaviorSubject<string>('');

  // Observable to subscribe to the prof_group changes
  profGroup$ = this.profGroupSubject.asObservable();
  constructor(private http: HttpClient) { 
  }


  setProfGroup(group: string) {
    this.profGroupSubject.next(group);
  }

 
  getProf(): Professor[]{
    return this.professors;
  }

  getProfById(id:number): Professor[]{
    return [this.professors[id]];
  }

  getProfByIdone(id:number): Professor{
    return this.professors[id];
  }

  addProf(prof:Professor){
    this.professors.push(prof);
  }

  deleteProf(prof:Professor){
    this.professors.splice(this.professors.indexOf(prof), 1);
  }

  updateProf(prof:Professor){
    this.professors[this.professors.indexOf(prof)] = prof;
  }

  



}
