import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfCompComponent } from './prof-comp.component';

describe('ProfCompComponent', () => {
  let component: ProfCompComponent;
  let fixture: ComponentFixture<ProfCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
