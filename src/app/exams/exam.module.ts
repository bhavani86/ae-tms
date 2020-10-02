import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamRoutingModule } from './exam-routing.module';
import { ExamsComponent } from './exams.component';

@NgModule({
  declarations: [ExamsComponent],
  imports: [CommonModule, ExamRoutingModule],
})
export class ExamModule {}
