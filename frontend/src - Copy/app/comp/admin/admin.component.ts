// admin.component.ts
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Absence, Etudiant } from '../../module';
import { AbsServiceService } from '../../services/abs-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'] // Corrected property name
})
export class AdminComponent implements OnInit {
  constructor(public absenceService: AbsServiceService, private router: Router) {}

  absences: Absence[] = [];
  searchid!: number;
  etudiant!: Etudiant;

  ngOnInit(): void {
    this.absenceService.getAllAbs().subscribe((absences) => {
      this.absences = absences;
      console.log(this.absences, this.etudiant);
    });
  }

  search(searchid: number) {
    this.absenceService.findById(searchid).subscribe((absence) =>{ this.absences = [absence]}); // Assuming findById returns a single absence
  }

  fulllist() {
    this.absenceService.getAllAbs().subscribe((absences) => {this.absences = absences});
  }
}
