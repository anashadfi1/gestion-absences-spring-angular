import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProfComponent } from './nav-prof.component';

describe('NavProfComponent', () => {
  let component: NavProfComponent;
  let fixture: ComponentFixture<NavProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavProfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
