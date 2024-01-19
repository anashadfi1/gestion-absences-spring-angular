import { Component, OnInit } from '@angular/core';
import { Absence, Etudiant } from '../../module';
import { EtdServiceService } from '../../services/etd-service.service';
import { AbsServiceService } from '../../services/abs-service.service';

@Component({
  selector: 'app-prof-comp-abs',
  templateUrl: './prof-comp-abs.component.html',
  styleUrls: ['./prof-comp-abs.component.css'] // Corrected property name
})
export class ProfCompAbsComponent implements OnInit {
  hour!: string;
  matiere!: string;
  etudiants!: Etudiant[];
  // e!: Etudiant;
  date!:Date;
  etudiants_abs_list: Absence[] = []; 
  constructor(public etdServiceService: EtdServiceService, public absServiceService: AbsServiceService) {}

  ngOnInit(): void {
    this.etdServiceService.allStudents().subscribe(etudiants => {
      this.etudiants = etudiants;
      console.log(this.etudiants);
    });
  }
  
  markpresent(etudiants: Etudiant) {
    console.log('before is ' + etudiants.isPresent);
    etudiants.isPresent = false;
    console.log('after is ' + etudiants.isPresent);
  }

  finish(etudiant:Etudiant,matiere: string,date:Date,hour:string) {
    console.log(this.hour);
    console.log(this.matiere);
  
    this.etdServiceService.allStudents().subscribe((etudiants)=>etudiants=etudiants);
    // this.absServiceService.addAbsence()
  }
  
}


