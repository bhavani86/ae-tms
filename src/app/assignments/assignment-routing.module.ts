import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { AssignmentMarksComponent } from './assignment-marks/assignment-marks.component';

const routes: Routes = [
  { path: 'assignment-list', component: AssignmentListComponent },
  { path: 'assignment-marks', component: AssignmentMarksComponent },
  { path: 'add-assignments', component: AddAssignmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentRoutingModule {}
