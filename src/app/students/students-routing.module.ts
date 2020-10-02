import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: 'student-list', component: StudentListComponent },
  { path: 'addstudents', component: AddstudentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
