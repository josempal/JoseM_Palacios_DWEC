import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCcaaComponent } from './update-ccaa.component';

describe('UpdateCcaaComponent', () => {
  let component: UpdateCcaaComponent;
  let fixture: ComponentFixture<UpdateCcaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCcaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCcaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
