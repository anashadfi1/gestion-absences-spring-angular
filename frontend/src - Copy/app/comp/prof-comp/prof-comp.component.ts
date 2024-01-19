import { ProfServiceService } from './../../services/prof-service.service';
import { Etudiant } from '../../module';
import { EtdServiceService } from './../../services/etd-service.service';
import { Component, OnInit } from '@angular/core';
import { AbsServiceService } from '../../services/abs-service.service';

@Component({
  selector: 'app-prof-comp',
  templateUrl: './prof-comp.component.html',
  styleUrl: './prof-comp.component.css'
})
export class ProfCompComponent {
  constructor(public etdServiceService:EtdServiceService, public profServiceService:ProfServiceService,public absServiceService:AbsServiceService){}
 
    etudiants !:Etudiant[];
    group!:string;

  
// ngOnInit(): void {
//   this.profServiceService.profGroup$.subscribe(
//     (group) => {
//       this.etdServiceService.getStudentByGrp(group).subscribe(
//         (students) => {
//           this.etudiants = students;
//           console.log('Prof_group updated:', group);
//         },
//         (error) => {
//           console.error('Error fetching students:', error);
//         }
//       );
//     }
//   );
// }
ngOnInit(): void {
  this.etdServiceService.allStudents().subscribe(etudiants => {
    this.etudiants = etudiants;
    console.log(this.etudiants);
  });
}


  markAbsent(etudiants : Etudiant){
    console.log('befor is '+etudiants.isPresent)
    etudiants.isPresent=true;
    console.log('after is '+etudiants.isPresent)
   
    
   }
 
  

}
