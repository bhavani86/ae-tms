import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamReportsComponent } from './exam-reports/exam-reports.component';
import { AddExamComponent } from './add-exam/add-exam.component';

const routes: Routes = [
  { path: 'exam-list', component: ExamListComponent },
  { path: 'exam-report', component: ExamReportsComponent },
  { path: 'add-exam', component: AddExamComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamRoutingModule {}
