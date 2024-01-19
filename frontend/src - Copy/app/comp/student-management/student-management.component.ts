import { EtdServiceService } from './../../services/etd-service.service';
import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../module';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {
  students: Etudiant[] = [];
  searchid!: number ;
  student!:Etudiant;
  constructor(private studentservice: EtdServiceService) {}
  ngOnInit() {
    
    this.studentservice.allStudents().subscribe((students) => this.students = students);
  }

  searchById(searchid: number) {
    this.studentservice.getStduentById(searchid).subscribe(
      (student) => {
        if (student) {
          this.students = [student];
        } else {
          // Handle the case where no student is found with the given ID
          console.log(`No student found with ID ${searchid}`);
        }
      },
      (error) => {
        // Handle any errors that might occur during the API call
        console.error(`Error fetching student with ID ${searchid}:`, error);
      }
    );
  }
  
  createStudent(student: Etudiant) {
    this.studentservice.addStudent(student).subscribe((newStudent) => {
      this.students.push(newStudent);
    });
  }

  deleteStudent(student: Etudiant) {
    this.studentservice.deleteStudent(student).subscribe(() => {
      this.students = this.students.filter((s) => s.id !== student.id);
    });
  }

  updateStudent(id:number,student: Etudiant) {
    this.studentservice.updateStudent(id,student).subscribe((updatedStudent) => {
      const index = this.students.findIndex((s) => s.id === updatedStudent.id);
      if (index !== -1) {
        this.students[index] = updatedStudent;
      } else {
        // Handle the case where the updated student is not found in the current list
        console.log(`Student with ID ${updatedStudent.id} not found in the list.`);
      }
    });
  }

}
