import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfCompComponent } from './comp/prof-comp/prof-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { NavProfComponent } from './comp/nav-prof/nav-prof.component';
import { ProfCompAbsComponent } from './comp/prof-comp-abs/prof-comp-abs.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './comp/auth/auth.component';
import { AdminComponent } from './comp/admin/admin.component';
import { NavAdminComponent } from './comp/nav-admin/nav-admin.component';
import { StudentManagementComponent } from './comp/student-management/student-management.component';
import { ProfessorManagementComponent } from './comp/professor-management/professor-management.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfCompComponent,
    NavProfComponent,
    ProfCompAbsComponent,
    AuthComponent,
    AdminComponent,
    NavAdminComponent,
    StudentManagementComponent,
    ProfessorManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
