import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
// import { FormsModule } from '@angular/forms';
// import { MatDividerModule } from '@angular/material/divider';
import { AdministrationRoutingModule } from './administration-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [AdministrationComponent],
  imports: [CommonModule, AdministrationRoutingModule, MatPaginatorModule],
})
export class AdministrationModule {}
