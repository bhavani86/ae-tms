import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentMarksComponent } from './assignment-marks.component';

describe('AssignmentMarksComponent', () => {
  let component: AssignmentMarksComponent;
  let fixture: ComponentFixture<AssignmentMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
