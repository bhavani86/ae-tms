import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchreportsComponent } from './batchreports.component';

describe('BatchreportsComponent', () => {
  let component: BatchreportsComponent;
  let fixture: ComponentFixture<BatchreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
