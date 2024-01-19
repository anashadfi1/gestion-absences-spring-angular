import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfCompAbsComponent } from './prof-comp-abs.component';

describe('ProfCompAbsComponent', () => {
  let component: ProfCompAbsComponent;
  let fixture: ComponentFixture<ProfCompAbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfCompAbsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfCompAbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
