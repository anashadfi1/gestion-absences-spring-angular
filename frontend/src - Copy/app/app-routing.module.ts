import { AuthComponent } from './comp/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfCompAbsComponent } from './comp/prof-comp-abs/prof-comp-abs.component';
import { ProfCompComponent } from './comp/prof-comp/prof-comp.component';
import { AdminComponent } from './comp/admin/admin.component';
import { NavProfComponent } from './comp/nav-prof/nav-prof.component';
import { StudentManagementComponent } from './comp/student-management/student-management.component';
import { ProfessorManagementComponent } from './comp/professor-management/professor-management.component';
import { NavAdminComponent } from './comp/nav-admin/nav-admin.component';

const routes: Routes = [
  
      {path: '',component: AuthComponent},
      { path: 'nav-admin', component: NavAdminComponent , 
        children: [
          { path: '', component: AdminComponent },
          {path:'admin',component:AdminComponent},
          { path: 'student-management', component: StudentManagementComponent },
          { path: 'Professor-management', component: ProfessorManagementComponent },
          
        ]},

      
      { path: 'nav-prof', component: NavProfComponent , 
      children: [
        { path: '', component: ProfCompComponent },
        { path: 'present-list', component: ProfCompComponent },
        { path: 'absent-list', component: ProfCompAbsComponent },
      
        
      ]},


    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }