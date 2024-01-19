import { Component } from '@angular/core';
import { Professor } from '../../module';
import { ProfServiceService } from '../../services/prof-service.service';

@Component({
  selector: 'app-professor-management',
  templateUrl: './professor-management.component.html',
  styleUrl: './professor-management.component.css'
})
export class ProfessorManagementComponent {

  
  // searchid!: number ;
  // professor!: Professor; 
  // constructor(private profServiceService: ProfServiceService) {
    
  // }

  // searchById(searchid: number) {
   
  //   this.professor = this.profServiceService.getProfByIdone(searchid);
  // }

  // createprof(professor: Professor) {
  //   this.profServiceService.addProf(professor);
  // }

  // deleteprof(professor: Professor) {
  //   this.profServiceService.deleteProf(professor);
  // }

  // updateprof(professor: Professor) {
  //   this.profServiceService.updateProf(professor);
  // }
  
  // clear(){
  //   this.professor = new Professor('','','','','','','','');
    
  // }

}
