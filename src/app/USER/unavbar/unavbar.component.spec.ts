import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavbarComponent } from './unavbar.component';

describe('UnavbarComponent', () => {
  let component: UnavbarComponent;
  let fixture: ComponentFixture<UnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
