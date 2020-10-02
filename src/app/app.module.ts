import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MainRoutingModule } from './main/main-routing.module';
import { AdministrationModule } from './administration/administration.module';
import { StudentsModule } from './students/students.module';
import { TrainerModule } from './trainers/trainer.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ExamModule } from './exams/exam.module';
import { AcademicModule } from './academics/academic.module';
import { AssignmentModule } from './assignments/assignment.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    DashboardModule,
    MainRoutingModule,
    AdministrationModule,
    StudentsModule,
    TrainerModule,
    AttendanceModule,
    ExamModule,
    AcademicModule,
    AssignmentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
