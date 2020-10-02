import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentsComponent } from './assignments.component';
import { AssignmentRoutingModule } from './assignment-routing.module';

@NgModule({
  declarations: [AssignmentsComponent],
  imports: [CommonModule, AssignmentRoutingModule],
})
export class AssignmentModule {}
