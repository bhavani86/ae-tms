import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersTableListComponent } from './centers-table-list.component';

describe('CentersTableListComponent', () => {
  let component: CentersTableListComponent;
  let fixture: ComponentFixture<CentersTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentersTableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentersTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
