import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AdministrationComponent } from '../administration/administration.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { StudentsComponent } from '../students/students.component';
import { TrainersComponent } from '../trainers/trainers.component';
import { AttendanceComponent } from '../attendance/attendance.component';
import { ExamsComponent } from '../exams/exams.component';
import { AcademicsComponent } from '../academics/academics.component';
import { AssignmentsComponent } from '../assignments/assignments.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'administration',
    component: AdministrationComponent,
    loadChildren: () =>
      import('../administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
  {
    path: 'students',
    component: StudentsComponent,
    loadChildren: () =>
      import('../students/students.module').then((m) => m.StudentsModule),
  },
  {
    path: 'trainers',
    component: TrainersComponent,
    loadChildren: () =>
      import('../trainers/trainer.module').then((m) => m.TrainerModule),
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
    loadChildren: () =>
      import('../attendance/attendance.module').then((m) => m.AttendanceModule),
  },
  {
    path: 'exams',
    component: ExamsComponent,
    loadChildren: () =>
      import('../exams/exam.module').then((m) => m.ExamModule),
  },
  {
    path: 'academics',
    component: AcademicsComponent,
    loadChildren: () =>
      import('../academics/academic.module').then((m) => m.AcademicModule),
  },
  {
    path: 'assignments',
    component: AssignmentsComponent,
    loadChildren: () =>
      import('../assignments/assignment.module').then(
        (m) => m.AssignmentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
