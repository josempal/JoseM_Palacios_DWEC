import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcaaComponent } from './ccaa.component';

describe('CcaaComponent', () => {
  let component: CcaaComponent;
  let fixture: ComponentFixture<CcaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
