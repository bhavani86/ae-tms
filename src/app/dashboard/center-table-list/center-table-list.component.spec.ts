import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterTableListComponent } from './center-table-list.component';

describe('CenterTableListComponent', () => {
  let component: CenterTableListComponent;
  let fixture: ComponentFixture<CenterTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterTableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
