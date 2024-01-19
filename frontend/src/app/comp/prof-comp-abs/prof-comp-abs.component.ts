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
  etudiant!: Etudiant;
  date!:Date;
  etudiants_abs_list: Absence[] = []; 
  absence!: Absence;
  constructor(public etdServiceService: EtdServiceService, public absServiceService: AbsServiceService) {}

  ngOnInit(): void {
    this.etdServiceService.allStudents().subscribe(etudiants => {
      this.etudiants = etudiants;
      console.log(this.etudiants);
    });
  }
  
  markpresent(etudiant: Etudiant) {
    console.log('befor is '+etudiant.isPresent)
    this.etdServiceService.updatePresence(etudiant.id).subscribe(res=>{console.log(res)})
    window.location.reload();
    console.log('after is '+etudiant.isPresent)
  }

  finish(etudiant:Etudiant[],matiere: string,date:Date,hour:string) {
    // {
    console.log(this.hour);
    console.log(this.matiere);
    // for(var i=1; i<this.etudiant.length;i++)
    // if(etudiant.isPresent === true)
    // {this.absence.student.fname = etudiant.fname
    // this.absence.student.lname = etudiant.lname
    // this.absence.student.tele = etudiant.tele
    // this.absence.student.classId = etudiant.classId
    // this.absence.student.filliere = etudiant.filliere
    // this.absence.matiere = matiere
    // this.absence.date = date
    // this.absence.hour = hour}
    // console.log(this.absence)
    // this.absServiceService.addAbsence(this.absence);
   }
  
}


